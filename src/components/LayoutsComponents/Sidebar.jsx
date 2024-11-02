import { Image, Layout, Menu } from "antd";
import { Link } from "react-router-dom";
const { Sider } = Layout;
import logo from "../../../public/logo.png";
import avater from "/public/avater.png";
import Swal from "sweetalert2";
import { EditOutlined } from '@ant-design/icons';
// eslint-disable-next-line react/prop-types
const Sidebar = ({ collapsed }) => {

    const handleLogout=()=>{
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, log out!'
          }).then((result) => {
            if (result.isConfirmed) {
              localStorage.clear();
              window.location.href = "/login";
            }
          })
    }
  return (
    <div className="fixed top-0 left-0 bottom-0 font-popins">
      <Sider
        className=" bg-orange-400 h-[100vh] w-[300px]"
        width={250}
        collapsedWidth={80}
        trigger={null}
        collapsible
        collapsed={collapsed}
      >
        <div
          className={` ${
            collapsed ? "text-lg" : "text-3xl"
          } font-bold my-10 text-white text-center`}
        >
          <Image src={logo} preview={false} className="w-20 h-20 mx-auto" />
        </div>
        <div className="flex-col items-center justify-between">
          <div  className="min-h-[calc(100vh-410px)] overflow-y-auto">
          <Menu
            theme="dark"
            mode="inline"
            className="px-2 font-popins"
            defaultSelectedKeys={["1"]}
            items={[
              {
                key: "1",
                icon: (
                  <svg
                    width="15"
                    height="16"
                    viewBox="0 0 15 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7 0.588623C3.09098 0.845916 0 4.0981 0 8.07222C0 12.2144 3.35786 15.5722 7.5 15.5722C9.39113 15.5722 11.1188 14.8723 12.438 13.7173L7.15045 8.42975C7.05532 8.33674 7 8.20829 7 8.07222V0.588623Z"
                      fill="#EBCA7E"
                    />
                    <path
                      d="M13.1451 13.0102C14.3001 11.691 15 9.96334 15 8.07222C15 7.04401 14.7931 6.06412 14.4186 5.17192L8.3441 8.20919L13.1451 13.0102Z"
                      fill="#EBCA7E"
                    />
                    <path
                      d="M13.9708 4.27783C12.7472 2.19566 10.5473 0.756284 8 0.588623V7.2632L13.9708 4.27783Z"
                      fill="#EBCA7E"
                    />
                  </svg>
                ),
                label: (
                  <Link className="" to={`/`}>
                    {" "}
                    Dashboard
                  </Link>
                ),
              },
              {
                key: "2",
                icon: (
                  <svg
                    width="15"
                    height="16"
                    viewBox="0 0 15 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10 5.07227C10 4.79612 10.2239 4.57227 10.5 4.57227C10.7761 4.57227 11 4.79612 11 5.07227C11 5.34841 10.7761 5.57227 10.5 5.57227C10.2239 5.57227 10 5.34841 10 5.07227Z"
                      fill="white"
                      fill-opacity="0.8"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M7.14645 0.718712C7.24021 0.624944 7.36739 0.572266 7.5 0.572266H13.5C14.3284 0.572266 15 1.24384 15 2.07227V8.07227C15 8.20487 14.9473 8.33205 14.8536 8.42582L7.85355 15.4258C7.65829 15.6211 7.34171 15.6211 7.14645 15.4258L0.146447 8.42582C-0.0488155 8.23056 -0.0488155 7.91397 0.146447 7.71871L7.14645 0.718712ZM10.5 3.57227C9.67157 3.57227 9 4.24384 9 5.07227C9 5.90069 9.67157 6.57227 10.5 6.57227C11.3284 6.57227 12 5.90069 12 5.07227C12 4.24384 11.3284 3.57227 10.5 3.57227Z"
                      fill="white"
                      fill-opacity="0.8"
                    />
                  </svg>
                ),
                label: <Link to={`PropertyListing`}>Property Listing</Link>,
              },
              {
                key: "3",
                icon: (
                  <svg
                    width="15"
                    height="14"
                    viewBox="0 0 15 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.5 0.572266C0.671573 0.572266 0 1.24384 0 2.07227V4.07227C0 4.90069 0.671573 5.57227 1.5 5.57227H3.5C4.32843 5.57227 5 4.90069 5 4.07227V2.07227C5 1.24384 4.32843 0.572266 3.5 0.572266H1.5Z"
                      fill="white"
                      fill-opacity="0.8"
                    />
                    <path
                      d="M7 3.57227H15V2.57227H7V3.57227Z"
                      fill="white"
                      fill-opacity="0.8"
                    />
                    <path
                      d="M1.5 8.57227C0.671573 8.57227 0 9.24384 0 10.0723V12.0723C0 12.9007 0.671573 13.5723 1.5 13.5723H3.5C4.32843 13.5723 5 12.9007 5 12.0723V10.0723C5 9.24384 4.32843 8.57227 3.5 8.57227H1.5Z"
                      fill="white"
                      fill-opacity="0.8"
                    />
                    <path
                      d="M7 11.5723H15V10.5723H7V11.5723Z"
                      fill="white"
                      fill-opacity="0.8"
                    />
                  </svg>
                ),
                label: (
                  <Link to={`CategoryManagement`}>Category Management</Link>
                ),
              },
              {
                key: "4",
                icon: (
                  <svg
                    width="15"
                    height="16"
                    viewBox="0 0 15 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5 6.07227C5 4.69155 6.11929 3.57227 7.5 3.57227C8.88071 3.57227 10 4.69155 10 6.07227C10 7.45298 8.88071 8.57227 7.5 8.57227C6.11929 8.57227 5 7.45298 5 6.07227Z"
                      fill="white"
                      fill-opacity="0.8"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M7.5 0.572266C3.35786 0.572266 0 3.93013 0 8.07227C0 12.2144 3.35786 15.5723 7.5 15.5723C11.6421 15.5723 15 12.2144 15 8.07227C15 3.93013 11.6421 0.572266 7.5 0.572266ZM1 8.07227C1 4.48241 3.91015 1.57227 7.5 1.57227C11.0899 1.57227 14 4.48241 14 8.07227C14 9.92183 13.2275 11.591 11.9875 12.7746C11.8365 10.9809 10.3328 9.57227 8.5 9.57227H6.5C4.66724 9.57227 3.16345 10.9809 3.01247 12.7746C1.77251 11.591 1 9.92183 1 8.07227Z"
                      fill="white"
                      fill-opacity="0.8"
                    />
                  </svg>
                ),
                label: <Link to={`/manageusers`}>Manage Users</Link>,
              },
              {
                key: "5",
                icon: (
                  <svg
                    width="9"
                    height="11"
                    viewBox="0 0 9 11"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M0.49125 0.438516C0.125 0.804766 0.125 1.39352 0.125 2.57227V8.19727C0.125 9.37602 0.125 9.96477 0.49125 10.331C0.8575 10.6973 1.44625 10.6973 2.625 10.6973H6.375C7.55375 10.6973 8.1425 10.6973 8.50875 10.331C8.875 9.96477 8.875 9.37602 8.875 8.19727V2.57227C8.875 1.39352 8.875 0.804766 8.50875 0.438516C8.1425 0.0722656 7.55375 0.0722656 6.375 0.0722656H2.625C1.44625 0.0722656 0.8575 0.0722656 0.49125 0.438516ZM2.625 2.57227C2.45924 2.57227 2.30027 2.63811 2.18306 2.75532C2.06585 2.87253 2 3.03151 2 3.19727C2 3.36303 2.06585 3.522 2.18306 3.63921C2.30027 3.75642 2.45924 3.82227 2.625 3.82227H6.375C6.54076 3.82227 6.69973 3.75642 6.81694 3.63921C6.93415 3.522 7 3.36303 7 3.19727C7 3.03151 6.93415 2.87253 6.81694 2.75532C6.69973 2.63811 6.54076 2.57227 6.375 2.57227H2.625ZM2.625 5.07227C2.45924 5.07227 2.30027 5.13811 2.18306 5.25532C2.06585 5.37253 2 5.53151 2 5.69727C2 5.86303 2.06585 6.022 2.18306 6.13921C2.30027 6.25642 2.45924 6.32227 2.625 6.32227H6.375C6.54076 6.32227 6.69973 6.25642 6.81694 6.13921C6.93415 6.022 7 5.86303 7 5.69727C7 5.53151 6.93415 5.37253 6.81694 5.25532C6.69973 5.13811 6.54076 5.07227 6.375 5.07227H2.625ZM2.625 7.57227C2.45924 7.57227 2.30027 7.63811 2.18306 7.75532C2.06585 7.87253 2 8.03151 2 8.19727C2 8.36303 2.06585 8.522 2.18306 8.63921C2.30027 8.75642 2.45924 8.82227 2.625 8.82227H5.125C5.29076 8.82227 5.44973 8.75642 5.56694 8.63921C5.68415 8.522 5.75 8.36303 5.75 8.19727C5.75 8.03151 5.68415 7.87253 5.56694 7.75532C5.44973 7.63811 5.29076 7.57227 5.125 7.57227H2.625Z"
                      fill="white"
                      fill-opacity="0.8"
                    />
                  </svg>
                ),
                label: (
                  <Link to={`/bookingmanagement`}>Booking Management</Link>
                ),
              },
              {
                key: "6",
                icon: (
                  <svg
                    width="15"
                    height="16"
                    viewBox="0 0 15 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.5 2.57227C14.3284 2.57227 15 3.24384 15 4.07227V5.57227H0V4.07227C0 3.24384 0.671573 2.57227 1.5 2.57227H13.5Z"
                      fill="white"
                      fill-opacity="0.8"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M0 6.57227V12.0723C0 12.9007 0.671573 13.5723 1.5 13.5723L13.5 13.5723C14.3284 13.5723 15 12.9007 15 12.0723V6.57227H0ZM2 10.5723H8V9.57227H2V10.5723ZM13 10.5723H10V9.57227H13V10.5723Z"
                      fill="white"
                      fill-opacity="0.8"
                    />
                  </svg>
                ),
                label: <Link to={`/transactions`}>Transactions</Link>,
              },
              {
                key: "7",
                icon: (
                  <svg
                    width="15"
                    height="16"
                    viewBox="0 0 15 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3 0.572266L3 8.62227C1.85888 8.85391 1 9.86279 1 11.0723C1 12.2817 1.85888 13.2906 3 13.5223V15.5723H4V13.5223C5.14112 13.2906 6 12.2817 6 11.0723C6 9.86279 5.14112 8.85391 4 8.62227L4 0.572266H3Z"
                      fill="white"
                      fill-opacity="0.8"
                    />
                    <path
                      d="M11 0.572266L11 2.62227C9.85888 2.85391 9 3.86279 9 5.07227C9 6.28174 9.85888 7.29062 11 7.52226V15.5723H12V7.52226C13.1411 7.29062 14 6.28174 14 5.07227C14 3.86279 13.1411 2.85391 12 2.62227L12 0.572266H11Z"
                      fill="white"
                      fill-opacity="0.8"
                    />
                  </svg>
                ),
                label: <Link to={`/seetings`}>Settings</Link>,
              },
              {
                key: "8",
                icon: (
                  <EditOutlined />
                ),
                label: <Link to={`/editcontent`}>Edit-Content</Link>,
              },
            ]}
          />
          </div>

          <div className="flex flex-row items-center justify-around mt-44    ">
            <div
              className="flex flex-row items-center gap-2 text-white  "
              role="menuitem"
            >
              <img
                src={avater}
                alt="avatar"
                className="w-10 h-10 rounded-2xl"
              />
              <div>
                <h1 className={`text-secondaryTitle text-sm font-work font-bold ${collapsed ? "hidden" : ""}`}>
                  Jenny
                </h1>
                <span  className={`text-[#FFFFFFB2] text-xs font-nunito font-semibold ${collapsed? "hidden" : ""}`}>
                  jenny@gmail.com
                </span>
              </div>
            </div>
           <button onClick={handleLogout}> <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.5 7L9.5 10.25M12.5 7L9.5 4M12.5 7L3 7M7 13L0.5 13L0.500001 1L7 1"
                stroke="#D34635"
              />
            </svg></button>
          </div>

        </div>
      </Sider>
    </div>
  );
};

export default Sidebar;
