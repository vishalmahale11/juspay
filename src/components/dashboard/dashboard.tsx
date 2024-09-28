import React from "react";
import styles from "./dashboard.module.scss";

const Dashboard: React.FC = () => {
  return (
    <div className={styles.dashboardMainContainer}>
      <p className={styles.name}>eCommerce</p>
    </div>
  );
};

export default Dashboard;
