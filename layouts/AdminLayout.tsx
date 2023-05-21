import React, { ReactNode } from "react";

type AdminLayoutProps = {
  children: ReactNode;
};
export function AdminLayout({ children }: AdminLayoutProps) {
  return (
    <div flex max-w="900px" mx-auto>
      {children}
    </div>
  );
}
