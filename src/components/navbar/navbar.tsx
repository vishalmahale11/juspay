import React from "react";
import { Bell, History, Notebook, Search, Star } from "lucide-react";
import styles from "./navbar.module.scss";
import { ModeToggle } from "../theme/mode-toggle";
import { useTheme } from "../theme/theme-provider";

const Navbar: React.FC = () => {
  const { theme } = useTheme();

  return (
    <div className={styles.navbarMainContainer}>
      <div className={styles.leftSideContainer}>
        <div className={styles.iconContainer}>
          <Notebook size={20} />
          <Star size={20} />
        </div>
        <div className={styles.namContainer}>
          <div style={{ color: "gray" }}>Dashboard</div>/<div>Default</div>
        </div>
      </div>
      <div className={styles.rightSideContainer}>
        <div
          style={{
            backgroundColor: theme === "dark" ? "#474747" : "#f5f5f5",
          }}
          className={styles.searchBar}
        >
          <span className={styles.inputIcon}>
            <Search />
          </span>
          <input
            className={theme === "dark" ? styles.inputBox : styles.darkInputBox}
            type="text"
            placeholder="Search"
          />
          <span className={styles.shortcut}>⌘/</span>
        </div>
        <div className={styles.buttonKeys}>
          <div>
            <ModeToggle />
          </div>
          <div className={styles.iconHistory}>
            <History size={20} />
            <Bell size={20} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
