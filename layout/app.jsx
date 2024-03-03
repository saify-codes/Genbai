import Header from "./partials/header";
import Sidebar from "./partials/sidebar";

export default function ({ children }) {
  return <>

    <div id="app">
      <Header />
      <Sidebar />
      <main className="p-2">
        {children}
      </main>
    </div>
  </>
}
