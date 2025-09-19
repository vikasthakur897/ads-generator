"use client"
import { api } from '@/convex/_generated/api'
import { useUser } from '@clerk/nextjs'
import { useMutation } from 'convex/react'
import React, { ReactNode, useEffect } from 'react'

const WorkspaceProvider = ({children}: { children: ReactNode }) => {
  const newUserMutation= useMutation(api.user.CreateNewUser);
  const { user } = useUser();
  
  
  useEffect(() => {
    user && CreateNewUser();
  }, [user])
  

  const CreateNewUser = async() =>{
    const result = await newUserMutation({
        name: user?.fullName || "No Name",
        email: user?.emailAddresses[0]?.emailAddress || "No Email",
        picture: user?.imageUrl || "No Picture",
    });

    console.log("New User Created", result);
  }

    return (
    <div>
      {children}
    </div>
  )
}

export default WorkspaceProvider
