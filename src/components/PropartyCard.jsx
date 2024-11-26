import { Card, Image, Rate } from "antd";
import React from "react";
import { HeartFilled, HeartOutlined } from "@ant-design/icons";

import guest from "../assets/images/user.png";

import userimg from "../assets/images/user.png";

const PropartyCard = ({ item }) => {
  
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
