"use client";
import TableComponent from '@/components/common/ReactTable/TableComponent';
import useTablePagination from '@/hooks/prTableHook';
import Link from 'next/link';
import React from 'react';
import { FaEye, FaListUl } from 'react-icons/fa';

const Page = () => {
  const { pagination, setPageNo, receivePageSize, setTableSearch, sortBy } = useTablePagination();

  // Define the type for each column
  interface Column {
    Header: string;
    accessor: string;
    sortable?: boolean;
    Cell?: (props: { row: { original: any } }) => JSX.Element;
  }

  // Define the type for the user data
  interface Order {
    orderid: string;
    phone: string;
    address: string;
    email: string;
    order_value: number;
    status: string
  }

  // Define the columns with user data fields
  const columns: Column[] = [
    { Header: 'Order ID', accessor: 'orderid', sortable: true },
    { Header: 'Phone', accessor: 'phone', sortable: true },
    { Header: 'Address', accessor: 'address', sortable: true },
    { Header: 'Email', accessor: 'email', sortable: true },
    { Header: 'Order Value', accessor: 'order_value', sortable: true },
    { Header: 'Order Status', accessor: 'status', sortable: true },
    {
      Header: 'Action',
      accessor: 'action',
      sortable: false,
      Cell: ({ row }) => (
        <div style={{ width: '120px' }}>
          <Link
            href={{
              pathname: '/user/details',
              query: {
                userid: row.original.userid,
                phone: row.original.phone,
                address: row.original.address,
                email: row.original.email,
                total_spends: row.original.total_spends,
              },
            }}
            className="btn btn-outline-primary btn-xs mr-1"
          >
            <FaEye />
          </Link>
        </div>
      ),
    },
  ];

  // Define sample data for users
  const data: Order[] = [
    {
      orderid: 'ORD000001',
      status: "new order",
      phone: '123-456-7890',
      address: '123 Main St, Springfield',
      email: 'john.doe@example.com',
      order_value: 500,
    },
    {
      orderid: 'ORD000002',
      phone: '098-765-4321',
      status: "picked-up",
      address: '456 Elm St, Riverdale',
      email: 'jane.smith@example.com',
      order_value: 1200,
    },
    {
      orderid: 'ORD000003',
      status: "dispatched",
      phone: '555-123-4567',
      address: '789 Maple Ave, Lakeside',
      email: 'alice.johnson@example.com',
      order_value: 750,
    },
    {
      orderid: 'ORD000004',
      status: "delivered",
      phone: '555-987-6543',
      address: '101 Pine St, Hilltop',
      email: 'bob.brown@example.com',
      order_value: 300,
    },
    {
      orderid: 'ORD000005',
      status: "cancelled",
      phone: '555-987-6543',
      address: '101 Pine St, Hilltop',
      email: 'bob.brown@example.com',
      order_value: 300,
    },
    {
      orderid: 'ORD000006',
      status: "in_hub",
      phone: '555-987-6543',
      address: '101 Pine St, Hilltop',
      email: 'bob.brown@example.com',
      order_value: 300,
    },
    {
      orderid: 'ORD000007',
      status: "in_transit",
      phone: '555-987-6543',
      address: '101 Pine St, Hilltop',
      email: 'bob.brown@example.com',
      order_value: 300,
    },
    
  ];

  return (
    <div>
      <div className="flex justify-between px-4 mb-10 ">
        <div className="flex items-center gap-4">
          <div className="bg-gradient p-4 rounded-md w-14 text-white">
            <FaListUl size={24} />
          </div>
          <div>
            <p className="text-2xl font-bold">Oders List</p>
            <p className='text-sm text-gray-500'>Here is the list of all oders</p>
          </div>
        </div>
      </div>
      <TableComponent
        columns={columns}
        data={data}
        totalCount={data.length}
        setPageNo={setPageNo}
        receivePageSize={receivePageSize}
        setTableSearch={setTableSearch}
        sortBy={sortBy}
        slno={true}
      />
    </div>
  );
};

export default Page;
