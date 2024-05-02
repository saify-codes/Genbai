// 'use client';
import { ThemeProvider, } from "@/context/ThemeContext";
import Header from "./partials/header";
import Sidebar from "./partials/sidebar";
import AllPageLoading from "@/components/Modal/AllPageLoading";

export default function ({ children, loading=false, }) {

  return (
    <ThemeProvider>
        <div id="app" className="">
          <Header />
          <Sidebar />
          <main className="p-4 overflow-auto">
            {loading ? <AllPageLoading /> : children}
            {/* <AllPageLoading /> */}
          </main>
        </div>
    </ThemeProvider>
  )
}
