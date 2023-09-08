import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../pages/images/logo.jpeg";
import axios from "axios";
import { toast } from "react-toastify";
import Header from "../components/header";
import Footer from "../components/footer";
import "./Notification.css";

const Notification = () => {
  const navigate = useNavigate();
  let goTologin = () => {
    toast.warning("Please Login");
    setTimeout(() => {
      navigate("/login");
    }, 1000);
    return { _id: null };
  };

  const user = localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : NaN;

  let uid = user._id;

  const [notificationList, setNotificationList] = useState([]);
  const getNotificationList = async () => {
    let userid = uid ? uid : goTologin();
    let res = await axios.get(
      `https://app.fuelfree.in/notification/notifications/${userid}`,
      {
        headers: {
          Accept: "application/json",
        },
      }
    );
    let result = await res.data;
    let notificationList = result.data;
    setNotificationList(notificationList);
  };

  useEffect(() => {
    getNotificationList();
  }, []);
  const handleReadNotification = async (notificationId) => {
    try {
      await axios.put(
        `https://app.fuelfree.in/notification/notifications/mark-read/${notificationId}`
      );
      const updatedNotificationList = notificationList.map((notification) =>
        notification._id === notificationId
          ? { ...notification, isRead: true }
          : notification
      );
      setNotificationList(updatedNotificationList);
    } catch (error) {
      console.error("Error marking notification as read:", error);
    }
  };
  const unreadCount = notificationList.filter(notification => !notification.isRead).length;

  return (
    
    <div className="notification-container">
    <Header unreadCount={unreadCount} />
      <div className="notification-content">
        {notificationList.length === 0 ? (
          <p className="no-notification-message">No notifications available</p>
        ) : (
          <div className="notification-list">
            {notificationList.map((data) => (
              <div
                key={data._id}
                className={`notification-item ${
                  data.isRead ? "read" : "unread"
                }`}
                onClick={() => handleReadNotification(data._id)}
              >
                <img
                  src={logo}
                  alt="notification-img"
                  className="notification-image"
                />
                <p className="notification-text">{data.message}</p>
              </div>
            ))}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Notification;
