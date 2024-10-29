"use client";
import DashboardLayout from '@/components/common/layout';
import TableComponent from '@/components/common/ReactTable/TableComponent';
import { Button } from '@/components/ui/button';
import useTablePagination from '@/hooks/prTableHook';
import Link from 'next/link';
import React from 'react';
import { FaEye, FaListUl, FaPlus } from 'react-icons/fa';

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
    interface User {
        userid: string;
        first_name: string,
        last_name: string,
        phone: string;
        address: string;
        email: string;
        total_spends: number;
    }

    // Define the columns with user data fields
    const columns: Column[] = [
        { Header: 'User ID', accessor: 'userid', sortable: true },
        { Header: 'Phone', accessor: 'phone', sortable: true },
        { Header: 'Address', accessor: 'address', sortable: true },
        { Header: 'Email', accessor: 'email', sortable: true },
        { Header: 'Total Spends', accessor: 'total_spends', sortable: true },
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
    const data: User[] = [
        {
            userid: 'U001',
            first_name:"John",
            last_name:"Wick",
            phone: '123-456-7890',
            address: '123 Main St, Springfield',
            email: 'john.doe@example.com',
            total_spends: 500,
        },
        {
            userid: 'U002',
            phone: '098-765-4321',
            first_name:"John",
            last_name:"Wick",
            address: '456 Elm St, Riverdale',
            email: 'jane.smith@example.com',
            total_spends: 1200,
        },
        {
            userid: 'U003',
            first_name:"John",
            last_name:"Wick",
            phone: '555-123-4567',
            address: '789 Maple Ave, Lakeside',
            email: 'alice.johnson@example.com',
            total_spends: 750,
        },
        {
            userid: 'U004',
            first_name:"John",
            last_name:"Wick",
            phone: '555-987-6543',
            address: '101 Pine St, Hilltop',
            email: 'bob.brown@example.com',
            total_spends: 300,
        },
    ];

    return (
        <DashboardLayout>
            <div className="flex justify-between px-4 mb-10 ">
                <div className="flex items-center gap-4">
                    <div className="bg-gradient p-4 rounded-md w-14 text-white">
                        <FaListUl size={24} />
                    </div>
                    <div>
                        <p className="text-2xl font-bold">User List</p>
                        <p className='text-sm text-gray-500'>Here is the list of all users</p>
                    </div>
                </div>
                <Link href={'/users/add'}>
                    <Button className="bg-gradient"><FaPlus/> Add User</Button>
                </Link>
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
        </DashboardLayout>
    );
};

export default Page;
