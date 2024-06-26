import React from 'react';
import Sidebar from '@/app/components/Sidebar';

export interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  console.log('rendering layout');
  return (
    <>
      <Sidebar />
      <div className="ml-60">{children}</div>
    </>
  );
}
