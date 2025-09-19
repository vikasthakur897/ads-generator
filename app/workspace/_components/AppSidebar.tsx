import React from 'react'
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
} from "@/components/ui/sidebar"
import Image from 'next/image'

const AppSidebar = () => {
  return (
     <Sidebar>
      <SidebarHeader className={'flex item-center'} >
        <Image src={'./logo.svg'} alt={'logo'} width={50} height={50} />
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup />
        <SidebarGroup />
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  )
}

export default AppSidebar
