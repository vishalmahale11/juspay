import React from "react";
import styles from "./right-sidebar.module.scss";
import { useTheme } from "@/components/theme/theme-provider";
import { DARK, NAME_COLOR, SYSTEM } from "@/components/constants/constants";
import { Bug, Radio, User } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const notificationData = [
  {
    icon: <Bug />,
    message: "You have a bug that needs to read please login",
    time: "Just Now",
    backgroundColor: "#e5ECF6",
  },
  {
    icon: <User />,
    message: "You have a bug that needs to read please login",
    time: "59 minutes ago",
    backgroundColor: "#e3f5ff",
  },
  {
    icon: <Bug />,
    message: "You have a bug that needs to read please login",
    time: "1 day ago",
    backgroundColor: "#e3f5ff",
  },
  {
    icon: <Radio />,
    message: "You have a bug that needs to read please login",
    time: "3 days ago",
    backgroundColor: "#e5ECF6",
  },
];

const activityData = [
  {
    icon: <Bug />,
    message: "You have a bug that needs to read please login",
    time: "Just Now",
    backgroundColor: "#e5ECF6",
  },
  {
    icon: <User />,
    message: "You have a bug that needs to read please login",
    time: "59 minutes ago",
    backgroundColor: "#e3f5ff",
  },
  {
    icon: <Bug />,
    message: "You have a bug that needs to read please login",
    time: "1 day ago",
    backgroundColor: "#e3f5ff",
  },
  {
    icon: <Radio />,
    message: "You have a bug that needs to read please login",
    time: "3 days ago",
    backgroundColor: "#e5ECF6",
  },
];

const contactsData = [
  {
    icon: <Bug />,
    contactName: "Netali Craig",
    time: "Just Now",
    backgroundColor: "#e5ECF6",
  },
  {
    icon: <User />,
    contactName: "Drew Cano",
    time: "59 minutes ago",
    backgroundColor: "#e3f5ff",
  },
  {
    icon: <Bug />,
    contactName: "Olrlando Cano",
    time: "1 day ago",
    backgroundColor: "#e3f5ff",
  },
  {
    icon: <Radio />,
    contactName: "Andi Lane",
    time: "3 days ago",
    backgroundColor: "#e5ECF6",
  },
];

const RightSidebar: React.FC = () => {
  let { theme } = useTheme();

  return (
    <div
      className={
        theme === DARK
          ? styles.mainRightSidebarContainerdark
          : styles.mainRightSidebarContainer
      }
    >
      {/* NOTIFICATIONS LAYOUT */}
      <div className={styles.notiname}>Notifications</div>
      <div className={styles.notificationmap}>
        {notificationData?.map((item, index) => {
          return (
            <div className={styles.mapDiv} key={index}>
              <div>
                <div
                  style={{
                    backgroundColor: item?.backgroundColor,
                    color: theme === DARK || SYSTEM ? "black" : "",
                  }}
                  className={styles.iconDiv}
                >
                  {item?.icon}
                </div>
              </div>
              <div className={styles.contentofmap}>
                <div className={styles.message}>
                  <p>{item?.message}</p>
                </div>
                <div style={{ color: NAME_COLOR }}>{item?.time}</div>
              </div>
            </div>
          );
        })}
      </div>

      {/* ACTIVITES */}
      <div className={styles.activityContainer}>
        <div className={styles.actiname}>Activites</div>
        <div className={styles.activitymap}>
          {activityData?.map((item, index) => {
            return (
              <div className={styles.mapDiv} key={index}>
                <div>
                  <div
                    style={{
                      backgroundColor: item?.backgroundColor,
                      color: theme === DARK || SYSTEM ? "black" : "",
                    }}
                    className={styles.iconDiv}
                  >
                    <Avatar>
                      <AvatarImage
                        src="https://github.com/shadcn.png"
                        alt="@shadcn"
                      />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                  </div>
                  <div className={styles.dashDiv}></div>
                </div>
                <div className={styles.contentofmap}>
                  <div className={styles.message}>
                    <p>{item?.message}</p>
                  </div>
                  <div style={{ color: NAME_COLOR }}>{item?.time}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {/* CONTACTS */}
      <div className={styles.activityContainer}>
        <div className={styles.actiname}>Contacts</div>
        <div className={styles.activitymap}>
          {contactsData?.map((item, index) => {
            return (
              <div className={styles.mapDiv} key={index}>
                <div>
                  <div
                    style={{
                      backgroundColor: item?.backgroundColor,
                      color: theme === DARK || SYSTEM ? "black" : "",
                    }}
                    className={styles.iconDiv}
                  >
                    <Avatar>
                      <AvatarImage
                        style={{ borderRadius: "100%" }}
                        src="https://github.com/shadcn.png"
                        alt="@shadcn"
                      />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                  </div>
                </div>
                <div className={styles.contentofmap}>
                  <div className={styles.message}>
                    <p>{item?.contactName}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default RightSidebar;
