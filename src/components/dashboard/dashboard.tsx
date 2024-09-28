import React from "react";
import styles from "./dashboard.module.scss";
import { DARK } from "../constants/constants";
import { useTheme } from "../theme/theme-provider";
import { ArrowDownLeft, ArrowUpRight, Dot } from "lucide-react";
import image1 from "../images/image1.png";
import image2 from "../images/image2.png";
import image3 from "../images/image3.png";
import image4 from "../images/image4.png";
import image5 from "../images/image5.png";
import image6 from "../images/image6.png";
import image7 from "../images/image7.png";
import image8 from "../images/image8.png";
import { TableData } from "../table/table";

const Dashboard: React.FC = () => {
  let { theme } = useTheme();
  return (
    <div className={styles.dashboardMainContainer}>
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
                  color: theme === DARK ? "#ffff" : "black",
                }}
              >
                1,219
              </p>
              <p
                style={{ color: theme === DARK ? "#ffff" : "black" }}
                className={styles.stockPrice}
              >
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
                  color: theme === DARK ? "#ffff" : "black",
                }}
              >
                $695
              </p>
              <p
                style={{ color: theme === DARK ? "#ffff" : "black" }}
                className={styles.stockPrice}
              >
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
          <img src={theme === DARK ? image2 : image1} alt="img" />
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
          <img src={theme === DARK ? image3 : image4} alt="revenue" />
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
              <p>New York </p>
              <progress value="70" max="100"></progress>
            </div>
            <div className={styles.preogressContent}>
              <p>San Fransico</p>
              <progress value="40" max="100"></progress>
            </div>
            <div className={styles.preogressContent}>
              <p>Sydney</p>
              <progress value="20" max="100"></progress>
            </div>
            <div className={styles.preogressContent}>
              <p>Singapore</p>
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
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
