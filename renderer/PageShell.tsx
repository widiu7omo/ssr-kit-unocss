import React from "react";
import logo from "./logo.svg";
import { PageContextProvider } from "./usePageContext";
import type { PageContext } from "./types";
import "@unocss/reset/tailwind-compat.css";
import "virtual:uno.css";
import { Link } from "./Link";

export { PageShell };

function PageShell({
  children,
  pageContext,
}: {
  children: React.ReactNode;
  pageContext: PageContext;
}) {
  const UsedLayout = (pageContext.exports.Layout ||
    LayoutDefault) as React.ElementType;
  return (
    <React.StrictMode>
      <PageContextProvider pageContext={pageContext}>
        <UsedLayout>{children}</UsedLayout>
      </PageContextProvider>
    </React.StrictMode>
  );
}

function LayoutDefault({ children }: { children: React.ReactNode }) {
  return (
    <div flex max-w="900px" m-auto>
      <Sidebar>
        <Logo />
        <Link px-3 py-1 rounded-full href="/">
          Home
        </Link>
        <Link px-3 py-1 rounded-full href="/star-wars">
          Data Fetching
        </Link>
        <Link px-3 py-1 rounded-full href="/about">
          About
        </Link>
      </Sidebar>
      <Content>{children}</Content>
    </div>
  );
}

function Sidebar({ children }: { children: React.ReactNode }) {
  return (
    <div
      id="sidebar"
      p="20px"
      space-y-2
      flex
      flex-col
      items-center
      line-height="1.8em"
      flex-shrink-0
    >
      {children}
    </div>
  );
}

function Content({ children }: { children: React.ReactNode }) {
  return (
    <div
      id="page-container"
      p="20px"
      pb="50px"
      border-l="2px"
      border-gray
      min-h="100vh"
    >
      <div
        id="page-content"
        p="20px"
        pb="50px"
        min-h-screen
        style={{
          padding: 20,
          paddingBottom: 50,
          minHeight: "100vh",
        }}
      >
        {children}
      </div>
    </div>
  );
}

function Logo() {
  return (
    <div mt="20px" mb="10px">
      <a href="/">
        <img src={logo} height={64} width={64} alt="logo" />
      </a>
    </div>
  );
}
