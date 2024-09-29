import Navbar from "./components/navbar/navbar";
import LeftSidebar from "./components/sidebar/left-sidebar/left-sidebar";
import RightSidebar from "./components/sidebar/right-sidebar/right-sidebar";
import styles from "./app.module.scss";
import Dashboard from "./components/dashboard/dashboard";
import Order from "./components/orders/order";
import { useState } from "react";

function App() {
  const [switchTab, setSwitchTab] = useState(false);

  const handleSwitch = () => {
    setSwitchTab(!switchTab);
  };

  return (
    <div className={styles.appContainer}>
      <LeftSidebar />
      <div className={styles.middleContent}>
        <Navbar handleSwitch={handleSwitch} switchTab={switchTab} />
        {!switchTab ? <Dashboard /> : <Order />}
      </div>
      <RightSidebar />
    </div>
  );
}

export default App;
