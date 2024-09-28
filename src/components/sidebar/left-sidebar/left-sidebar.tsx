import React from "react";
import styles from "./left-sidebar.module.scss";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useTheme } from "@/components/theme/theme-provider";
import {
  BookOpen,
  BookUser,
  ChartPie,
  ChevronDown,
  ChevronRight,
  Dot,
  Folder,
  MessageSquare,
  Newspaper,
  ShoppingBag,
  SquareUser,
  Users,
} from "lucide-react";
import {
  DARK,
  LUCIDE_FONT_SIZE,
  NAME_COLOR,
  RIGHT_FORWARD_ICON_SIZE,
} from "@/components/constants/constants";

const LeftSidebar: React.FC = () => {
  let { theme } = useTheme();
  return (
    <div
      className={
        theme === DARK
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
      <div className={styles.sidebarContent}>
        <div className={styles.favorites}>
          <div className={styles.Favnames}>
            <div className={styles.favorites}>Favorites</div>
            <div className={styles.recently}>Recently</div>
          </div>
          <div className={styles.overviewdiv}>
            <div className={styles.overview}>
              <Dot
                size={30}
                color={theme === DARK ? "lightgray" : "lightgray"}
              />
              <p>Overview</p>
            </div>
            <div className={styles.overview}>
              <Dot
                size={30}
                color={theme === DARK ? "lightgray" : "lightgray"}
              />
              <p>Projects</p>
            </div>
          </div>
        </div>
        <div className={styles.dashBoarddiv}>
          <div style={{ color: NAME_COLOR }} className={styles.dashBoardName}>
            Dashboards
          </div>
          <div className={styles.dasboardContent}>
            <div className={styles.defaultsContent}>
              <ChevronRight size={RIGHT_FORWARD_ICON_SIZE} color={NAME_COLOR} />
              <ChartPie size={LUCIDE_FONT_SIZE} />
              Defaults
            </div>
            <div className={styles.defaultsContent}>
              <ChevronRight size={RIGHT_FORWARD_ICON_SIZE} color={NAME_COLOR} />
              <ShoppingBag size={LUCIDE_FONT_SIZE} />
              eCommerce
            </div>
            <div className={styles.defaultsContent}>
              <ChevronRight size={RIGHT_FORWARD_ICON_SIZE} color={NAME_COLOR} />
              <Folder size={LUCIDE_FONT_SIZE} />
              Projects
            </div>
            <div className={styles.defaultsContent}>
              <ChevronRight size={RIGHT_FORWARD_ICON_SIZE} color={NAME_COLOR} />
              <BookOpen size={LUCIDE_FONT_SIZE} />
              Online Course
            </div>
          </div>
        </div>
        <div className={styles.pagesdiv}>
          <div style={{ color: NAME_COLOR }}>Pages</div>
          <div className={styles.pagesContent}>
            <ChevronDown size={RIGHT_FORWARD_ICON_SIZE} color={NAME_COLOR} />
            <BookUser size={LUCIDE_FONT_SIZE} />
            User Profiles
          </div>
          <div className={styles.useProfiles}>
            <p>Overview</p>
            <p>Projects</p>
            <p>Campaigns</p>
            <p>Documents</p>
            <p>Followers</p>
          </div>
          <div className={styles.pagesContent}>
            <ChevronRight size={RIGHT_FORWARD_ICON_SIZE} color={NAME_COLOR} />
            <SquareUser size={LUCIDE_FONT_SIZE} />
            Account
          </div>
          <div className={styles.pagesContent}>
            <ChevronRight size={RIGHT_FORWARD_ICON_SIZE} color={NAME_COLOR} />
            <Users size={LUCIDE_FONT_SIZE} />
            Corporate
          </div>{" "}
          <div className={styles.pagesContent}>
            <ChevronRight size={RIGHT_FORWARD_ICON_SIZE} color={NAME_COLOR} />
            <Newspaper size={LUCIDE_FONT_SIZE} />
            Blog
          </div>{" "}
          <div className={styles.pagesContent}>
            <ChevronRight size={RIGHT_FORWARD_ICON_SIZE} color={NAME_COLOR} />
            <MessageSquare size={LUCIDE_FONT_SIZE} />
            Social
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftSidebar;
