import { Card, Dropdown, Image, Menu, Rate } from "antd";
import React from "react";
import { HeartFilled, HeartOutlined } from "@ant-design/icons";

import guest from "../assets/images/user.png";

import userimg from "../assets/images/user.png";
import { Link } from "react-router-dom";

const PropartyCard = ({ item }) => {
    const handleMenuClick = (e) => {
        if (e.key === "edit") {
            console.log("Edit clicked");
            // Add your edit logic here
        } else if (e.key === "delete") {
            console.log("Delete clicked");
            // Add your delete logic here
        }
    };

    const menu = (
        <Menu onClick={handleMenuClick}>
            <Menu.Item key="edit"><Link to={`/edit-property/${item?.id}`} >Edit </Link>  </Menu.Item>
            <Menu.Item key="delete">Delete</Menu.Item>
        </Menu>
    );
    return (

        <Card
            key={item?.id}
            hoverable
            className="rounded-lg overflow-hidden shadow-lg"
            cover={
                <Image
                    preview={false}
                    alt={item?.name}
                    src={item?.propertyImage}
                    className="h-48 w-full object-cover"
                />
            }
        //   bodyStyle={{ padding: "16px", backgroundColor: "#3B3B3B", color: "white" }}
        >
            <div className="flex justify-between items-center mb-2">
                <div>
                    <div className="flex items-center justify-between space-x-1 mb-2">
                        <div className="flex items-center space-x-2 py-4">
                            <Image
                                alt={item.ownerName}
                                src={item.image}
                                className="h-8 w-8 object-cover rounded-full"
                            />
                            <div className="absolute top-4 right-4">

                            <Dropdown overlay={menu} trigger={["click"]}>
                                    <button>
                                        <svg
                                            width="40"
                                            height="40"
                                            viewBox="0 0 40 40"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <rect width="40" height="40" rx="20" fill="white" />
                                            <path
                                                d="M22.25 27.5C22.25 28.0967 22.0129 28.669 21.591 29.091C21.169 29.5129 20.5967 29.75 20 29.75C19.4033 29.75 18.831 29.5129 18.409 29.091C17.9871 28.669 17.75 28.0967 17.75 27.5C17.75 26.9033 17.9871 26.331 18.409 25.909C18.831 25.4871 19.4033 25.25 20 25.25C20.5967 25.25 21.169 25.4871 21.591 25.909C22.0129 26.331 22.25 26.9033 22.25 27.5ZM22.25 20C22.25 20.5967 22.0129 21.169 21.591 21.591C21.169 22.0129 20.5967 22.25 20 22.25C19.4033 22.25 18.831 22.0129 18.409 21.591C17.9871 21.169 17.75 20.5967 17.75 20C17.75 19.4033 17.9871 18.831 18.409 18.409C18.831 17.9871 19.4033 17.75 20 17.75C20.5967 17.75 21.169 17.9871 21.591 18.409C22.0129 18.831 22.25 19.4033 22.25 20ZM22.25 12.5C22.25 13.0967 22.0129 13.669 21.591 14.091C21.169 14.5129 20.5967 14.75 20 14.75C19.4033 14.75 18.831 14.5129 18.409 14.091C17.9871 13.669 17.75 13.0967 17.75 12.5C17.75 11.9033 17.9871 11.331 18.409 10.909C18.831 10.4871 19.4033 10.25 20 10.25C20.5967 10.25 21.169 10.4871 21.591 10.909C22.0129 11.331 22.25 11.9033 22.25 12.5Z"
                                                fill="#EBCA7E"
                                            />
                                        </svg>
                                    </button>
                                </Dropdown>

                            </div>
                            <h2 className="text-lg font-medium">{item.name}</h2>
                        </div>
                        <div>
                            <div className="flex items-center space-x-1">
                                <Rate
                                    disabled
                                    count={1}
                                    value={item.rating}
                                    className="text-[#FDB022] text-lg"
                                />
                                <span className="text-xl font-medium">{item.rating}</span>
                            </div>
                        </div>
                    </div>
                    <p className="text-[16px] font-medium text-[#000000] pl-6">
                        {item.review}
                    </p>

                </div>
            </div>
        </Card>

    );
};

export default PropartyCard;
