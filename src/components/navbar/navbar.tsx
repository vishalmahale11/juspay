import { Bell, History, Notebook, Search, Star } from "lucide-react";
import styles from "./navbar.module.scss";
import { ModeToggle } from "../theme/mode-toggle";
import { useTheme } from "../theme/theme-provider";
import { DARK, NAME_COLOR } from "../constants/constants";

const Navbar = (props: any) => {
  const { theme } = useTheme();

  return (
    <div
      className={
        theme === DARK
          ? styles.navbarMainContainerdark
          : styles.navbarMainContainer
      }
    >
      <div className={styles.leftSideContainer}>
        <div className={styles.iconContainer}>
          <Notebook size={20} />
          <Star size={20} />
        </div>
        <div className={styles.namContainer}>
          <div style={{ color: NAME_COLOR }}>Dashboard</div>/
          <div
            onClick={(e) => props?.handleSwitch(e)}
            style={{ cursor: "pointer" }}
          >
            {props?.switchTab ? "Dashboard" : "Order List"}
          </div>
        </div>
      </div>
      <div className={styles.rightSideContainer}>
        <div
          style={{
            backgroundColor: theme === DARK ? "#474747" : "#f5f5f5",
          }}
          className={styles.searchBar}
        >
          <span className={styles.inputIcon}>
            <Search />
          </span>
          <input
            className={theme === DARK ? styles.inputBox : styles.darkInputBox}
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
