"use client";

import React, { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

function Layout(props: LayoutProps) {
  return (
    <div className="page-layout">
      {props.children}
      <style jsx global>{`
        p,
        ul {
          text-align: justify;
        }
        ul {
          padding-left: 1rem;
        }
      `}</style>
    </div>
  );
}

export default Layout;
