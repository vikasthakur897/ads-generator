"use client"
import React, { ReactNode } from 'react'

const WorkspaceProvider = ({children}: { children: ReactNode }) => {
  return (
    <div>
      {children}
    </div>
  )
}

export default WorkspaceProvider
