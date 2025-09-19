import React from 'react'

import { ReactNode } from 'react';
import WorkspaceProvider from './provider';

interface WorkspaceLayoutProps {
  children: ReactNode;
}

const WorkspaceLayout = ({ children }: WorkspaceLayoutProps) => {
  return (
    <div>
        <WorkspaceProvider>
             {children}
        </WorkspaceProvider>
     
    </div>
  )
}

export default WorkspaceLayout
