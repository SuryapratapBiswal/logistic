"use client";

import React, { useState } from "react";

// Define the structure of the pagination state
interface Pagination {
    pageNo: number;
    limit: number;
    order_by?: string;
    field?: string;
}

// Define the type for the sort parameter
interface Sort {
    accessor: string;
    direction: 'asc' | 'desc';
}

// Define the return type of the custom hook
interface UseTablePagination {
    pagination: Pagination;
    setPagination: React.Dispatch<React.SetStateAction<Pagination>>;
    setPageNo: (data: number) => void;
    receivePageSize: (no: number) => void;
    setTableSearch: (stext: string) => void;
    sortBy: ({ sort }: { sort: Sort }) => void;
}

export default function useTablePagination(): UseTablePagination {
    const [pagination, setPagination] = useState<Pagination>({
        pageNo: 1,
        limit: 5,
        order_by: "",
        field: "",
    });

    // Function to receive data from the child
    const setPageNo = (data: number) => {
        setPagination((prev) => ({
            ...prev,
            pageNo: data
        }));
    };

    const receivePageSize = (no: number) => {
        setPagination((prev) => ({
            ...prev,
            pageNo: 1,
            limit: no
        }));
    };

    const setTableSearch = (stext: string) => {
        setPagination((prev) => ({
            ...prev,
            keySearch: stext // Update keySearch instead of search
        }));
    };

    const sortBy = ({ sort }: { sort: Sort }) => {
        setPagination((prev) => ({
            ...prev,
            order_by: sort.accessor,
            field: sort.direction // Assuming `field` represents the sort direction
        }));
    };

    const setKeySearch = (key: string) => {
        setPagination((prev) => ({
            ...prev,
            keySearch: key
        }));
    };

    return { pagination, setPagination, setPageNo, receivePageSize, setTableSearch, sortBy };
}
