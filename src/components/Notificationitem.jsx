"use client";

import { useState } from "react";

import { MdOutlineChevronLeft } from "react-icons/md";
import imageone from '../../public/user.png';



import { Image } from "antd";
import { Link } from "react-router-dom";

const Notificationitem = () => {
  const [isOpen, setIsOpen] = useState(true); // Manage the modal open state


  const notifications = [
    {
      image: imageone,
      name: "Mehedi",
      message: "You have received a new message.",
      timestamp: "2 mins ago",
    },
    {
      image: imageone,
      name: "omuk",
      message: "A new update is available for download.",
      timestamp: "1 hour ago",
    },
    {
      image: imageone,
      name: "Mehedi",
      message: "You have received a new message.",
      timestamp: "2 mins ago",
    },
    {
      image: imageone,
      name: "omuk",
      message: "A new update is available for download.",
      timestamp: "1 hour ago",
    },
    {
      image: imageone,
      name: "Mehedi",
      message: "You have received a new message.",
      timestamp: "2 mins ago",
    },
    {
      image: imageone,
      name: "omuk",
      message: "A new update is available for download.",
      timestamp: "1 hour ago",
    },
    {
      image: imageone,
      name: "Mehedi",
      message: "You have received a new message.",
      timestamp: "2 mins ago",
    },
    {
      image: imageone,
      name: "omuk",
      message: "A new update is available for download.",
      timestamp: "1 hour ago",
    },
  ];

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  if (!isOpen) return null;

  return (
    <div className="min-h-screen text-white bg-black p-4 z-50">
      <div className="modal-content w-full ">
        <div className="flex items-center justify-between">
          <h2 className="text-xl flex text-white space-x-2 items-center font-semibold mb-6">
            <Link to={'/'}>
              <button className="focus:outline-none">
                <MdOutlineChevronLeft className="text-4xl cursor-pointer" />
              </button>
            </Link>
            My Profile
          </h2>
        
        </div>
        {notifications.length > 0 ? (
          <ul className="space-y-4">
            {notifications.map((notification, index) => (
              <li
                className="flex items-center space-x-4 border-2 border-[#242424] rounded-lg cursor-pointer p-1"
                key={index}
              >
                <Image
                  className="rounded-full"
                  height={40}
                  width={40}
                  src={notification.image}
                  alt="User avatar"
                />
                <div>
                  <strong className="text-[18px] font-normal">
                    {notification.name}
                  </strong>
                  :{" "}
                  <strong className="text-[#FFFFFFB2]">
                    {notification.message}
                  </strong>
                  <p className="timestamp text-[#FFFFFFB2]">
                    {notification.timestamp}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p>No new notifications</p>
        )}
      </div>
    </div>
  );
};

export default Notificationitem;
