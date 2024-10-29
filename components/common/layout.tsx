import React, { ReactNode } from 'react';
import Sidebar from '../myComponents/Layout/Sidebar';
import Navbar from '../myComponents/Layout/Navbar';

interface DashboardLayoutProps {
    children: ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
    return (
        <main className="w-full grid grid-cols-[auto_1fr] h-screen">
            <Sidebar />
            <div className="flex flex-col h-full">
                <Navbar />
                <div className="flex-grow overflow-auto p-4">
                    {children}
                </div>
                {/* <Footer /> */}
            </div>
        </main>
    );
};

export default DashboardLayout;
