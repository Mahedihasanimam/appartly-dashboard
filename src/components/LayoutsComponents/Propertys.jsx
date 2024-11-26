import { Button, Pagination } from 'antd';
import React, { useState } from 'react';
import ownerImage from "../../assets/images/user.png";
import propartyimage from "../../assets/images/proparty.png";
import PropartyCard from '../PropartyCard';
import { Link } from 'react-router-dom';
const Propertys = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 8; // Number of items per page
    const proparty = [
        {
            id: "1",
            name: "Robert Bruce",
            rating: 4.74,
            review:
                "‘’Feeling grateful for the extra income from my rental. It’s funding my next adventure! ✈️’’",
            satisfiedGuest: 45,
            revenue: "$985.5k",
            image: ownerImage,
            propertyImage: propartyimage,
        },
        {
            id: "2",
            name: "Emma Stone",
            rating: 4.85,
            review:
                "‘’Feeling grateful for the extra income from my rental. It’s funding my next adventure! ✈️’’",
            satisfiedGuest: 58,
            revenue: "$1.2M",
            image: ownerImage,
            propertyImage: propartyimage,
        },
        {
            id: "3",
            name: "Michael Johnson",
            rating: 4.68,
            review:
                "‘’Feeling grateful for the extra income from my rental. It’s funding my next adventure! ✈️’’",
            satisfiedGuest: 37,
            revenue: "$890.7k",
            image: ownerImage,
            propertyImage: propartyimage,
        },
        {
            id: "4",
            name: "Sophia Brown",
            rating: 4.9,
            review:
                "Thanks to my rental, I’ve been able to renovate my home and make it even better!",
            satisfiedGuest: 62,
            revenue: "$1.35M",
            image: ownerImage,
            propertyImage: propartyimage,
        },
        {
            id: "5",
            name: "David Lee",
            rating: 4.72,
            review:
                "Hosting is not just about money; it's about creating memorable experiences.",
            satisfiedGuest: 40,
            revenue: "$930.2k",
            image: ownerImage,
            propertyImage: propartyimage,
        },
        {
            id: "6",
            name: "Emily Clark",
            rating: 4.88,
            review:
                "Hosting has brought new life to my property and given me financial freedom.",
            satisfiedGuest: 68,
            revenue: "$1.5M",
            image: ownerImage,
            propertyImage: propartyimage,
        },
        {
            id: "7",
            name: "Emily Clark",
            rating: 4.88,
            review:
                "Hosting has brought new life to my property and given me financial freedom.",
            satisfiedGuest: 68,
            revenue: "$1.5M",
            image: ownerImage,
            propertyImage: propartyimage,
        },
        {
            id: "8",
            name: "Emily Clark",
            rating: 4.88,
            review:
                "Hosting has brought new life to my property and given me financial freedom.",
            satisfiedGuest: 68,
            revenue: "$1.5M",
            image: ownerImage,
            propertyImage: propartyimage,
        },
        {
            id: "9",
            name: "Robert Bruce",
            rating: 4.74,
            review:
                "‘’Feeling grateful for the extra income from my rental. It’s funding my next adventure! ✈️’’",
            satisfiedGuest: 45,
            revenue: "$985.5k",
            image: ownerImage,
            propertyImage: propartyimage,
        },
        {
            id: "10",
            name: "Emma Stone",
            rating: 4.85,
            review:
                "‘’Feeling grateful for the extra income from my rental. It’s funding my next adventure! ✈️’’",
            satisfiedGuest: 58,
            revenue: "$1.2M",
            image: ownerImage,
            propertyImage: propartyimage,
        },
        {
            id: "11",
            name: "Michael Johnson",
            rating: 4.68,
            review:
                "‘’Feeling grateful for the extra income from my rental. It’s funding my next adventure! ✈️’’",
            satisfiedGuest: 37,
            revenue: "$890.7k",
            image: ownerImage,
            propertyImage: propartyimage,
        },
        {
            id: "12",
            name: "Sophia Brown",
            rating: 4.9,
            review:
                "Thanks to my rental, I’ve been able to renovate my home and make it even better!",
            satisfiedGuest: 62,
            revenue: "$1.35M",
            image: ownerImage,
            propertyImage: propartyimage,
        },
        {
            id: "13",
            name: "David Lee",
            rating: 4.72,
            review:
                "Hosting is not just about money; it's about creating memorable experiences.",
            satisfiedGuest: 40,
            revenue: "$930.2k",
            image: ownerImage,
            propertyImage: propartyimage,
        },
        {
            id: "14",
            name: "Emily Clark",
            rating: 4.88,
            review:
                "Hosting has brought new life to my property and given me financial freedom.",
            satisfiedGuest: 68,
            revenue: "$1.5M",
            image: ownerImage,
            propertyImage: propartyimage,
        },
       
    ];
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const paginatedProperties = proparty.slice(startIndex, endIndex);
    return (
        <div className="container mx-auto text-white min-h-screen bg-[#242424] p-8 rounded-lg">
        <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold">Your Properties</h1>
            <Link to="/addproperty">
                <Button style={{
                    backgroundColor: '#EBCA7E',
                    color: 'black',
                    height: '44px',
                    fontSize: '16px',
                    fontWeight: '600'
                }}>
                    Add Property
                    <svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.875 11.6973V6.69727H0.875V5.44727H5.875V0.447266H7.125V5.44727H12.125V6.69727H7.125V11.6973H5.875Z" fill="#000000" />
                    </svg>
                </Button>
            </Link>
        </div>

        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
                {paginatedProperties.map((item) => (
                    <PropartyCard item={item} key={item.id} />
                ))}
            </div>
        </div>

        {/* Ant Design Pagination */}
        <div className="flex justify-center mt-8">
            <Pagination
                current={currentPage}
                pageSize={pageSize}
                total={proparty.length}
                onChange={(page) => setCurrentPage(page)}
                showSizeChanger={false} // Disable page size changer
            />
        </div>
    </div>
    );
};

export default Propertys;