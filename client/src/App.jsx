import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col items-center">
        <Outlet />
      </main>
    </>
  );
}

export default App;
