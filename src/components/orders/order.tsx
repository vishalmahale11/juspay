import React from "react";
import styles from "./order.module.scss";
import { DataTableDemo } from "../table/order-table";

const Order: React.FC = () => {
  return (
    <div className={styles.orderMainContainer}>
      <p className={styles.orderName}>Orders List</p>
      <div>
        {/* <TableData /> */}
        <DataTableDemo />
      </div>
    </div>
  );
};

export default Order;
