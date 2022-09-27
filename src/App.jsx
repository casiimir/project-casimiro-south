import { Outlet } from "react-router-dom";
import { Footer } from "./components/footer";
import { Navbar } from "./components/navbar";
import "./App.module.scss";

function App() {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
