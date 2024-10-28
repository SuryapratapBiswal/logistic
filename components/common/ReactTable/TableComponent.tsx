"use client";
import React, { useEffect, useRef, useState } from 'react';
import { DownloadTableExcel } from 'react-export-table-to-excel';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

interface Column {
  Header: string;
  accessor: string;
  sortable?: boolean;
  width?: number | string;
  className?: string;
  Cell?: (props: { row: { original: any } }) => JSX.Element;
}

interface TableComponentProps {
  columns: Column[];
  data: any[];
  totalCount: number;
  setPageNo: (page: number) => void;
  receivePageSize: (size: number) => void;
  setTableSearch?: (term: string) => void;
  setAiTableSearch?: (term: string) => void;
  sortBy: (sort: { sort: { accessor: string; direction: 'asc' | 'desc' } }) => void;
  slno?: boolean;
  searchInput?: boolean;
  showPDF_Print?: boolean;
  tableHeadforPDF?: string;
  show_search_pdf_row?: boolean;
  show_pagination?: boolean;
  ai_search?: boolean;
  normal_search?: boolean;
}

const TableComponent: React.FC<TableComponentProps> = ({
  columns,
  data,
  totalCount,
  setPageNo,
  receivePageSize,
  setTableSearch,
  setAiTableSearch,
  sortBy,
  slno,
  searchInput = true,
  showPDF_Print = true,
  tableHeadforPDF,
  show_search_pdf_row = true,
  show_pagination = true,
  ai_search = false,
  normal_search = true,
}) => {
  const tableRef = useRef<HTMLTableElement>(null);
  const [pageNo, setNewPageNo] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(5);
  const [columnSort, setColumnSort] = useState<{ accessor?: string; direction?: 'asc' | 'desc' }>({});
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [aiSearchTerm, setAiSearchTerm] = useState<string>('');

  const startNo = (pageNo - 1) * pageSize + 1;

  // Sort handler
  const handleSort = (sortable: boolean | undefined, accessor: string) => {
    if (!sortable) return;
    const newSortDirection = columnSort.accessor === accessor ? (columnSort.direction === 'asc' ? 'desc' : 'asc') : 'asc';
    setColumnSort({ accessor, direction: newSortDirection });
    sortBy({ sort: { accessor, direction: newSortDirection } });
  };

  // Handle Excel Download
  const downloadExcel = () => exportTableToExcel('PR-table-export.xls');
  const exportTableToExcel = (filename: string) => {
    const table = tableRef.current;
    if (!table) return;

    const blob = new Blob(['xml-content-here'], { type: 'application/vnd.ms-excel' });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Handle PDF Export
  const handleTableToPdf = async () => {
    const doc = new jsPDF();
    const table = tableRef.current;
    if (!table) return;

    const margin = 10;
    const pageWidth = doc.internal.pageSize.getWidth() - margin * 2;
    const container = document.createElement('div');
    container.style.position = 'absolute';
    container.style.left = '-9999px';

    if (tableHeadforPDF) {
      const headerElement = document.createElement('h1');
      headerElement.innerText = tableHeadforPDF;
      container.appendChild(headerElement);
    }

    container.appendChild(table.cloneNode(true));
    document.body.appendChild(container);
    const canvas = await html2canvas(container, { scale: 2 });
    const imgData = canvas.toDataURL('image/png');
    const imgProps = doc.getImageProperties(imgData);
    const pdfHeight = (imgProps.height * pageWidth) / imgProps.width;

    doc.addImage(imgData, 'PNG', margin, margin, pageWidth, pdfHeight);
    doc.save('table-export.pdf');
    document.body.removeChild(container);
  };

  // Handle Pagination
  const handleNewPageNo = (i: number) => {
    setNewPageNo(i);
    setPageNo(i);
  };
  const handlePageSize = (i: number) => {
    receivePageSize(i);
    setPageSize(i);
    setNewPageNo(1);
  };

  // Debounced Search
  useEffect(() => {
    const delayDebounceFn = setTimeout(() => setTableSearch?.(searchTerm), 1000);
    return () => clearTimeout(delayDebounceFn);
  }, [searchTerm, setTableSearch]);

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => setAiTableSearch?.(aiSearchTerm), 1000);
    return () => clearTimeout(delayDebounceFn);
  }, [aiSearchTerm, setAiTableSearch]);

  return (
    <div className="p-4 bg-slate-100 shadow-md">
      {show_search_pdf_row && (
        <div className="flex justify-between items-center mb-4">
          {searchInput && normal_search && (
            <input
              type="text"
              placeholder="Search..."
              className="border px-2 py-1 rounded"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          )}
          {searchInput && ai_search && (
            <input
              type="text"
              placeholder="AI Search..."
              className="border px-2 py-1 rounded"
              value={aiSearchTerm}
              onChange={(e) => setAiSearchTerm(e.target.value)}
            />
          )}
          {showPDF_Print && (
            <div className="flex space-x-2">
              <button onClick={downloadExcel} className="bg-blue-500 text-white px-4 py-2 rounded">Download Excel</button>
              <button onClick={handleTableToPdf} className="bg-red-500 text-white px-4 py-2 rounded">Download PDF</button>
            </div>
          )}
        </div>
      )}

      <table id="dtable" ref={tableRef} className="table-auto w-full border-2 border-gray-500">
        <thead>
          <tr>
            {slno && <th className="border px-2 py-1 text-center">Sl.No.</th>}
            {columns.map((column, index) => (
              <th
                key={index}
                onClick={() => handleSort(column.sortable, column.accessor)}
                className={`border px-2 py-1 text-left cursor-pointer ${column.accessor === 'action' ? 'hidden print:block' : ''} ${
                  columnSort.accessor === column.accessor
                    ? columnSort.direction === 'asc'
                      ? 'bg-gray-200'
                      : 'bg-gray-300'
                    : ''
                }`}
                style={{ width: column.width || 'auto' }}
              >
                {column.Header}
                {column.sortable && <span className="ml-2">&#8597;</span>}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((rowData, rowIndex) => (
            <tr key={rowIndex} className="border-t">
              {slno && <td className="border px-2 py-1 text-center">{startNo + rowIndex}</td>}
              {columns.map((column, columnIndex) => (
                <td key={columnIndex} className={`border px-2 py-1 ${column.accessor === 'action' ? 'hidden print:block' : ''}`}>
                  {column.Cell ? column.Cell({ row: { original: rowData } }) : rowData[column.accessor]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      {show_pagination && (
        <nav aria-label="Page navigation" className="mt-2">
          <ul className="flex justify-end space-x-1">
            <li>
              <button onClick={() => handleNewPageNo(pageNo > 1 ? pageNo - 1 : pageNo)}>&laquo;</button>
            </li>
            {Array.from({ length: Math.ceil(totalCount / pageSize) }, (_, index) => (
              <li key={index}>
                <button
                  onClick={() => handleNewPageNo(index + 1)}
                  className={`px-2 py-1 ${pageNo === index + 1 ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                >
                  {index + 1}
                </button>
              </li>
            ))}
            <li>
              <button onClick={() => handleNewPageNo(pageNo < Math.ceil(totalCount / pageSize) ? pageNo + 1 : pageNo)}>&raquo;</button>
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
};

export default TableComponent;
