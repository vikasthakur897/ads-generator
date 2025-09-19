"use client";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { UserDetailContext } from "@/context/userDetailContext";
import { api } from "@/convex/_generated/api";
import { useUser } from "@clerk/nextjs";
import { useMutation } from "convex/react";
import React, { ReactNode, useEffect, useState } from "react";
import AppSidebar from "./_components/AppSidebar";

type UserDetail = {
  _id: string;
  _creationTime?: number;
  paymentId?: string;
  name: string;
  email: string;
  picture: string;
  credits: number;
};

const WorkspaceProvider = ({ children }: { children: ReactNode }) => {
  const newUserMutation = useMutation(api.user.CreateNewUser);
  const { user } = useUser();
  const [userDetail, setUserDetail] = useState<UserDetail | undefined>(
    undefined
  );

  useEffect(() => {
    user && CreateNewUser();
  }, [user]);

  const CreateNewUser = async () => {
    const result = await newUserMutation({
      name: user?.fullName || "No Name",
      email: user?.emailAddresses[0]?.emailAddress || "No Email",
      picture: user?.imageUrl || "No Picture",
    });

    setUserDetail(result);
    // console.log("New User Created", result);
  };

  return (
    <UserDetailContext.Provider value={{ userDetail, setUserDetail }}>
      <SidebarProvider>
       <AppSidebar />
        <div>
             <SidebarTrigger />
            {children}
        </div>
        </SidebarProvider>
      </UserDetailContext.Provider>
  );
};

export default WorkspaceProvider;
