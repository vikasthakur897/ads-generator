"use client";

import { ConvexProvider, ConvexReactClient } from "convex/react";

import React from "react";

import { ReactNode } from "react";

const provider = ({ children }: { children: ReactNode }) => {
  const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL!);

  return (
    <ConvexProvider client={convex}>
      <div>{children}</div>
    </ConvexProvider>
  );
};

export default provider;
