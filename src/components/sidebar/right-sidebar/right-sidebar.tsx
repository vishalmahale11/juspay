import React from "react";
import styles from "./right-sidebar.module.scss";
import { useTheme } from "@/components/theme/theme-provider";

const RightSidebar: React.FC = () => {
  let { theme } = useTheme();

  return (
    <div
      className={
        theme === "dark"
          ? styles.mainRightSidebarContainerdark
          : styles.mainRightSidebarContainer
      }
    >
      RightSidebar
    </div>
  );
};

export default RightSidebar;
