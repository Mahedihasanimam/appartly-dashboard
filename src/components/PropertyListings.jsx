import React, { useState } from "react";
import { Button, Table, Pagination, DatePicker, Modal, Image, Input } from "antd";

import { MdOutlineChevronLeft } from "react-icons/md";
import { EditOutlined, DeleteOutlined, SearchOutlined } from "@ant-design/icons";
import dayjs from "dayjs";
import imageone from "../../public/user.png"; // Ensure the image path is correct
import Swal from "sweetalert2";

const PropertyListings = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize] = useState(10);
  const [selectedDate, setSelectedDate] = useState(dayjs());
  const [showModal, setShowModal] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState(null);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleDelete = (record) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        // Perform delete logic here
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
      }
    });
  };
  
  const handleEdit = (record) => {
    Swal.fire({
      title: "Edit Confirmation",
      text: "Are you sure you want to edit this record?",
      icon: "info",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, edit it!",
    }).then((result) => {
      if (result.isConfirmed) {
        // Open the edit modal or perform edit logic here
        openModal();
      }
    });
  };
  
  const handleApprove = () => {
    setSelectedStatus("Approved");
    setShowModal(false);
  };


  const handleCancel = () => {
    setShowModal(false);
  };

  const data = [
    {
      key: "1",
      investor: "David Via",
      roomId: "458565",
      contact: "+880-12345687",
      perNightCost: "$560.00",
      status: "Approved",
    },
    {
      key: "2",
      investor: "Lionel Messi",
      roomId: "458565",
      contact: "+880-12345687",
      perNightCost: "$560.00",
      status: "Pending",
    },
    {
      key: "3",
      investor: "Paul Pogba",
      roomId: "458565",
      contact: "+880-12345687",
      perNightCost: "$560.00",
      status: "Canceled",
    },
    {
      key: "4",
      investor: "Kante",
      roomId: "458565",
      contact: "+880-12345687",
      perNightCost: "$560.00",
      status: "Pending",
    },
    {
      key: "5",
      investor: "Neymar Junior",
      roomId: "458565",
      contact: "+880-12345687",
      perNightCost: "$560.00",
      status: "Pending",
    },
    {
      key: "6",
      investor: "Cristiano Ronaldo",
      roomId: "458565",
      contact: "+880-12345687",
      perNightCost: "$560.00",
      status: "Pending",
    },
    {
      key: "7",
      investor: "Lucacu",
      roomId: "458565",
      contact: "+880-12345687",
      perNightCost: "$560.00",
      status: "Pending",
    },
  ];

  const columns = [
    {
      title: "Investor",
      dataIndex: "investor",
      key: "investor",
      render: (text) => (
        <div className="flex items-center space-x-2">
          <Image
            src={imageone}
            alt="Investor"
            width={40}
            height={40}
            className="rounded-full"
          />
          <span className="text-white">{text}</span>
        </div>
      ),
    },
    {
      title: "Room Id",
      dataIndex: "roomId",
      key: "roomId",
      className: "text-white",
    },
    {
      title: "Contact",
      dataIndex: "contact",
      key: "contact",
      className: "text-white",
    },
    {
      title: "Per Night Cost",
      dataIndex: "perNightCost",
      key: "perNightCost",
      className: "text-white",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status) => (
<Button

  className={`text-white capitalize ${
    status === "Approved"
      ? "bg-green-500"
      : status === "Canceled"
      ? "bg-red-500"
      : "bg-gray-500"
  } hover:bg-opacity-80 border-none`}
>
  {status}
</Button>

      ),
    },
    {
        title: "Actions",
        key: "action",
        render: (_, record) => (
          <div className="flex space-x-2">
            <Button
              icon={<EditOutlined className="" size={20} />}
              onClick={() => handleEdit(record)}
            />
            <Button
              className="bg-red-500 hover:bg-red-700 text-white border-none"
              icon={<DeleteOutlined />}
              type="danger"
              onClick={() => handleDelete(record)}
            />
          </div>
        ),
      },
      
  ];

  const paginatedData = data.slice((currentPage - 1) * pageSize, currentPage * pageSize);

  return (
    <div className="container mx-auto my-12 bg-[#1E1E1E] p-4 rounded-lg">
     <div className="my-6">
     <h1 className="text-[34px] text-[#FFFFFF] font-bold">Manage Listing</h1>
     <p className="text-sm font-normal text-[#FFFFFFB2] opacity-70">Admin with access to this workspace can approve, cancel and delete sellers listing</p>
     </div>
        <Input prefix={<SearchOutlined/>} style={{border:"none", backgroundColor:"#2B2B2B", color:"white",height:"40px"}}/>
      <div className="flex items-center justify-between mb-2 mt-6">
        <div>
        </div>
        <div>
        
        </div>
      </div>
      <div className="overflow-x-auto">
        <Table
          columns={columns}
          dataSource={paginatedData}
          pagination={false}
          className="custom-table text-white "
          scroll={{ x: "max-content" }}
        />
      </div>

       {/* Pagination Component */}
       <div className="flex justify-center items-center gap-4 mt-8 border-t-2 border-[#424242] p-6 w-full">
        <div className="flex justify-between items-center gap-4 w-full">
          <div className="text-center text-white mt-2">
            Page {currentPage} of {Math.ceil(data.length / pageSize)}
          </div>
          <Pagination
            current={currentPage}
            total={data.length}
            pageSize={pageSize}
            onChange={handlePageChange}
            showSizeChanger={false}
            className="text-center"
          />
        </div>
        <div className="flex justify-end items-center gap-4 w-full">
          <Button onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}>
            Previous
          </Button>
          <Button onClick={() => setCurrentPage((prev) => Math.min(prev + 1, Math.ceil(data.length / pageSize)))}>
            Next
          </Button>
        </div>
      </div>

      <Modal
        title="Approve Status"
        open={showModal}
        onOk={handleApprove}
        onCancel={handleCancel}
      >
        <p>Are you sure you want to approve this booking?</p>
      </Modal>
    </div>
  );
};

export default PropertyListings;
