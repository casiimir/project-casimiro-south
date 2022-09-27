import { Outlet } from "react-router-dom";
import "./App.module.scss";
import { Footer } from "./components/footer";
import { Navbar } from "./components/navbar";

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
