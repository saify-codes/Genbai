import { ThemeProvider, } from "@/context/ThemeContext";
import Header from "./partials/header";
import Sidebar from "./partials/sidebar";

export default function ({ children }) {
  return (
    <ThemeProvider>
      <div id="app" className="">
        <Header />
        <Sidebar />
        <main className="p-4">
          {children}
        </main>
      </div>
    </ThemeProvider>
  )
}
