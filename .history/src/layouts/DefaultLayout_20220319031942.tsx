import Footer from "@/components/Footer";
import { Header } from "@/components/Header";
import { ThemeToggle } from "@/components/ThemeToggle";
import React, { FC } from "react";

export default function DefaultLayout({ children }: any) {
  return (
    <div>
      <Header />
      <ThemeToggle />

      <main>{children}</main>
      <Footer />
    </div>
  );
}
