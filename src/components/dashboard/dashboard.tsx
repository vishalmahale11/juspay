import React from "react";
import styles from "./dashboard.module.scss";
import { DARK } from "../constants/constants";
import { useTheme } from "../theme/theme-provider";
import { ArrowDownLeft, ArrowUpRight, Dot } from "lucide-react";
import image5 from "../images/image5.png";
import image6 from "../images/image6.png";
import image7 from "../images/image7.png";
import image8 from "../images/image8.png";
import { TableData } from "../table/table";
import { Component } from "../charts/bar-charts";
import { LineComponent } from "../charts/line-chart";

const Dashboard: React.FC = () => {
  let { theme } = useTheme();
  return (
    <div
      className={
        theme === DARK
          ? styles.dashboardMainContaineDark
          : styles.dashboardMainContainer
      }
    >
      <p className={styles.name}>eCommerce</p>

      {/* 1st section */}
      <div className={styles.firstSectiondiv}>
        <div className={styles.leftSectiondiv}>
          <div
            style={{ backgroundColor: "#e3F5FF" }}
            className={styles.gridDiv}
          >
            <p className={styles.gridName}>Customers</p>
            <div className={styles.gridContent}>
              <p
                style={{
                  fontSize: "1.6rem",
                  fontWeight: "600",
                  color: "black",
                }}
              >
                3,781
              </p>
              <p className={styles.stockPrice}>
                +11.01%
                <ArrowUpRight size={10} />
              </p>
            </div>
          </div>
          <div
            style={{
              backgroundColor: theme === DARK ? "#282828" : "#f7F9FB",
            }}
            className={styles.gridDiv}
          >
            <p
              style={{ color: theme === DARK ? "#ffff" : "black" }}
              className={styles.gridName}
            >
              Orders
            </p>
            <div className={styles.gridContent}>
              <p
                style={{
                  fontSize: "1.6rem",
                  fontWeight: "600",
                }}
              >
                1,219
              </p>
              <p className={styles.stockPrice}>
                -0.03%
                <ArrowDownLeft size={10} />
              </p>
            </div>
          </div>
          <div
            style={{
              backgroundColor: theme === DARK ? "#282828" : "#f7F9FB",
            }}
            className={styles.gridDiv}
          >
            <p
              style={{ color: theme === DARK ? "#ffff" : "black" }}
              className={styles.gridName}
            >
              Revenue
            </p>
            <div className={styles.gridContent}>
              <p
                style={{
                  fontSize: "1.6rem",
                  fontWeight: "600",
                }}
              >
                $695
              </p>
              <p className={styles.stockPrice}>
                +15.03%
                <ArrowUpRight size={10} />
              </p>
            </div>
          </div>
          <div
            style={{ backgroundColor: "#e5ECF6" }}
            className={styles.gridDiv}
          >
            <p className={styles.gridName}>Growth</p>
            <div className={styles.gridContent}>
              <p
                style={{
                  fontSize: "1.6rem",
                  fontWeight: "600",
                  color: "black",
                }}
              >
                30.1%
              </p>
              <p className={styles.stockPrice}>
                +6.08%
                <ArrowUpRight size={10} />
              </p>
            </div>
          </div>
        </div>
        <div
          style={{ backgroundColor: theme === DARK ? "#282828" : "#f7f9fb" }}
          className={styles.rightSectionDiv}
        >
          <p style={{ color: theme === DARK ? "#ffff" : "black" }}>
            Projections vs Actuals
          </p>
          <Component />
        </div>
      </div>

      {/* 2nd section */}
      <div className={styles.secondSectionDiv}>
        <div
          style={{ backgroundColor: theme === DARK ? "#282828" : "#f7f9fb" }}
          className={styles.leftDiv}
        >
          <div className={styles.content}>
            <p style={{ fontWeight: 500 }}>Revenue</p>
            <p style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
              |
              <Dot size={30} />
              Current Week <span>$58,211</span>
            </p>
            <p style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <Dot size={30} />
              Previous Week <span>$68,768</span>
            </p>
          </div>
          <LineComponent />
        </div>
        <div
          style={{ backgroundColor: theme === DARK ? "#282828" : "#f7f9fb" }}
          className={styles.rightDiv}
        >
          <p style={{ fontWeight: "500", textAlign: "center" }}>
            Revenue By Location
          </p>
          <div style={{ marginTop: "2%" }}>
            <img src={theme === DARK ? image6 : image5} alt="revenue" />
          </div>
          <div className={styles.progressBar}>
            <div className={styles.preogressContent}>
              <div className={styles.labelName}>
                <p>New York </p>
                <p>72K</p>
              </div>
              <progress value="70" max="100"></progress>
            </div>
            <div className={styles.preogressContent}>
              <div className={styles.labelName}>
                <p>San Fransico</p>
                <p>39K</p>
              </div>
              <progress value="40" max="100"></progress>
            </div>
            <div className={styles.preogressContent}>
              <div className={styles.labelName}>
                <p>Sydney</p> <p>25K</p>
              </div>
              <progress value="20" max="100"></progress>
            </div>
            <div className={styles.preogressContent}>
              <div className={styles.labelName}>
                <p>Singapore</p>
                <p>61K</p>
              </div>
              <progress value="80" max="100"></progress>
            </div>
          </div>
        </div>
      </div>

      {/* 3rd section */}
      <div className={styles.thirdSectionDiv}>
        <div
          style={{ backgroundColor: theme === DARK ? "#282828" : "#f7f9fb" }}
          className={styles.leftDiv}
        >
          <p>Top Selling Products</p>
          <TableData />
        </div>
        <div
          style={{ backgroundColor: theme === DARK ? "#282828" : "#f7f9fb" }}
          className={styles.rightDiv}
        >
          <p style={{ fontWeight: "500", textAlign: "center" }}>Total Sales</p>
          <div>
            <img src={theme === DARK ? image8 : image7} alt="" />
          </div>
          <div className={styles.totalSales}>
            <div className={styles.totalSalesContent}>
              <div className={styles.totalSalesLeftSide}>
                <Dot size={40} color="black" />
                Direct
              </div>
              <p>$300.56</p>
            </div>
            <div>
              <div className={styles.totalSalesContent}>
                <div className={styles.totalSalesLeftSide}>
                  <Dot size={40} color="green" />
                  Affiliate
                </div>
                <p>$300.56</p>
              </div>
            </div>
            <div className={styles.totalSalesContent}>
              <div className={styles.totalSalesLeftSide}>
                <Dot size={40} color="purple" />
                Sponsored
              </div>
              <p>$300.56</p>
            </div>
            <div className={styles.totalSalesContent}>
              <div className={styles.totalSalesLeftSide}>
                <Dot size={40} color="skyblue" />
                Email
              </div>
              <p>$300.56</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
