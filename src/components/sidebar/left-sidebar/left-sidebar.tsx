import React from "react";
import styles from "./left-sidebar.module.scss";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useTheme } from "@/components/theme/theme-provider";

const LeftSidebar: React.FC = () => {
  let { theme } = useTheme();
  return (
    <div
      className={
        theme === "dark"
          ? styles.mainLeftSidebarContainerdark
          : styles.mainLeftSidebarContainer
      }
    >
      <div className={styles.sidebar}>
        <div className={styles.userSection}>
          <div className={styles.avatar}>
            <Avatar>
              <AvatarImage
                style={{ borderRadius: "100%" }}
                src="https://github.com/shadcn.png"
                alt="@shadcn"
              />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
          <span className={styles.username}>ByeWind</span>
        </div>
      </div>
    </div>
  );
};

export default LeftSidebar;
