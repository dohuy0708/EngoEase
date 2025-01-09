import React from 'react'
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';

export default function MainLayout() {
    return (
        <div>
            <Header />
          <main className=" min-h-[calc(100vh-72px)] bg-bg mt-hheader flex  ">
            <Outlet />
          </main>
        </div>
      );
}
