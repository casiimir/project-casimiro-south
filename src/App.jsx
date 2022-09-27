import { Outlet } from "react-router-dom";
import { Footer } from "./components/footer";
import { Navbar } from "./components/navbar";
import styles from "./App.module.scss";

function App() {
  return (
    <div className={styles.Main}>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
