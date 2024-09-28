import Navbar from "./components/navbar/navbar";
import LeftSidebar from "./components/sidebar/left-sidebar/left-sidebar";
import RightSidebar from "./components/sidebar/right-sidebar/right-sidebar";
import styles from "./app.module.scss";
import Dashboard from "./components/dashboard/dashboard";

function App() {
  return (
    <div className={styles.appContainer}>
      <LeftSidebar />
      <div className={styles.middleContent}>
        <Navbar />
        <Dashboard />
      </div>
      <RightSidebar />
    </div>
  );
}

export default App;
