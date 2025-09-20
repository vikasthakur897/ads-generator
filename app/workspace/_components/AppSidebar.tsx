"use client"
import React from 'react'
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { IoMdAddCircle } from "react-icons/io";
import { LuLayoutDashboard } from "react-icons/lu";
import { IoVideocamOutline } from "react-icons/io5";
import { LuVideotape } from "react-icons/lu";
import { CiMoneyBill } from "react-icons/ci";
import { IoSettingsOutline } from "react-icons/io5";
import { usePathname } from 'next/navigation'
import Link from 'next/link'

const MenuItems = [
  { name: 'Dashboard', icon: <LuLayoutDashboard />, link: '/workspace' },
  { name: 'Create Ad', icon: <IoVideocamOutline />, link: '/workspace/create-ad' },
  { name: 'My Video', icon: <LuVideotape />, link: '/workspace/my-video' },
  { name: 'Billing', icon: <CiMoneyBill />, link: '/workspace/billing' },
  { name: 'Settings', icon: <IoSettingsOutline />, link: '/workspace/Setting' },
]

const AppSidebar = () => {
  const pathname = usePathname()

  return (
    <Sidebar>
      <SidebarHeader className="flex items-center my-3">
        <Image src="/logo.svg" alt="logo" width={30} height={50} />
      </SidebarHeader>

      <hr />

      <SidebarContent>
        <SidebarGroup>
          <Button className="w-full mt-4 flex gap-2">
            <IoMdAddCircle className="text-xl" />
            Create New Ad Video
          </Button>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel className="text-[14px] mb-2">Application</SidebarGroupLabel>
          <SidebarContent>
            <SidebarMenu className='space-y-2'>
              {MenuItems.map((item, index) => (
                <SidebarMenuItem key={index}>
                  <SidebarMenuButton asChild
                    className={`text-[17px] ${
                      pathname === item.link&&'bg-slate-200 text-black font-medium'
                    }`}
                  >
                    <Link href={item.link}>
                      {item.icon}
                      <span>{item.name}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter />
    </Sidebar>
  )
}

export default AppSidebar
