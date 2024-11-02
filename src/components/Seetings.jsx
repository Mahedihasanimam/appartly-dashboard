import { Button, Input } from "antd";
import React from "react";
import { FaEdit } from "react-icons/fa";
import { MdLockOutline } from "react-icons/md";
import { TiUserOutline } from "react-icons/ti";

const Seetings = () => {
  return (
    <div className="text-white min-h-screen">
      <div className="bg-[#242424] rounded-lg p-6 ">
        <div className="border border-[#E7E7E7] rounded-md p-4">
          <div className="mx-auto w-fit py-6">
            <svg
              width="160"
              height="160"
              viewBox="0 0 160 160"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="0.5"
                y="0.5"
                width="159"
                height="159"
                rx="23.5"
                fill="#E7E7E7"
              />
              <rect
                x="0.5"
                y="0.5"
                width="159"
                height="159"
                rx="23.5"
                stroke="#5D5D5D"
                stroke-dasharray="6 6"
              />
              <path
                d="M89.3329 65.0667H93.0662M106.133 87.4423L94.9329 76.2496L83.7329 87.4423L68.7995 68.7878L53.8662 87.4667M57.5995 53.8667H102.4C104.461 53.8667 106.133 55.5382 106.133 57.6V102.4C106.133 104.462 104.461 106.133 102.4 106.133H57.5995C55.5377 106.133 53.8662 104.462 53.8662 102.4V57.6C53.8662 55.5382 55.5377 53.8667 57.5995 53.8667Z"
                stroke="#5D5D5D"
              />
            </svg>
            <h3 className="text-xl font-bold mt-4 text-white">
              Upload your photo
            </h3>
          </div>
          <div className="space-y-6">
            <Input
              defaultValue={"Full Name"}
              style={{ backgroundColor: "#383838", height: "44px" }}
              className="p-2  custom-input text-white"
              prefix={<TiUserOutline className="text-xl text-white" />}
              placeholder="Full Name"
            />

            <Input.Password
            
              defaultValue={"6545645"}
              style={{ backgroundColor: "#383838", height: "44px" }}
              className="p-2  custom-input text-white"
              prefix={<MdLockOutline className="text-xl text-white" />}
              placeholder="Full Name"
            />

            <Input.Password
              name="newpassword"
              style={{ backgroundColor: "#383838", height: "44px" }}
              className="p-2  custom-input text-white"
              prefix={<MdLockOutline className="text-xl text-white" />}
              placeholder="new password"
            />

            <Input.Password
              name="confirmnewpassword"
              style={{ backgroundColor: "#383838", height: "44px" }}
              className="p-2  custom-input text-white"
              prefix={<MdLockOutline className="text-xl text-white" />}
              placeholder="confirmnewpassword"
            />

            <Button
              shape="square"
              style={{
                backgroundColor: "#EBCA7E",
                color: "black",
                fontWeight: "bold",
                fontSize: "18px",
                padding: "10px 20px",
                borderRadius: "5px",
              }}
              size="large"
              type="primary"
              className="w-full"
            >
              {" "}
              <FaEdit /> SaveChanges
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Seetings;
