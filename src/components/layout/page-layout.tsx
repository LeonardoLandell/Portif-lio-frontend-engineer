"use client";

import { Navbar } from "../layout/Navbar";

type Props = {
  children: React.ReactNode;
};

export function PageLayout({ children }: Props) {
  return (
    <>
      <Navbar />

      <main
        style={{
          paddingTop: "120px",
        }}
      >
        {children}
      </main>
    </>
  );
}
