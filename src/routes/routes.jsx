import { createBrowserRouter } from 'react-router-dom';
import Main from '../layouts/Main';

import Dashboardmain from './../pages/Dashboardmain';
import Notification from './../components/Notification';
import PropertyListings from '../components/PropertyListings';
import CategoryManagement from '../components/CategoryManagement';
import ManageUsers from '../components/ManageUsers';
import UserProfile from '../components/UserProfile';
import Transactions from '../components/Transactions';

import ManageBooking from '../components/ManageBooking';
import Login from '../components/LayoutsComponents/Login';
import Forgetpasswrod from '../components/Forgetpasswrod';
import OTPverification from '../components/OTPverification';
import EditContent from './../components/editcontent/EditContent';
import Personalinfo from '../components/personalinfo';
import Security from '../components/Security';
import FAQpage from '../components/editcontent/FAQ';
import TermsAndConDitions from '../components/editcontent/TermsAndConDitions';
import RoomBookingHelp from '../components/editcontent/RoomBookingHelp';



const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Dashboardmain></Dashboardmain>,
      },
      {
        path: "/notification",
        element: <Notification/>,
      },
      {
        path: "/PropertyListing",
        element: <PropertyListings></PropertyListings>,
      },
      {
        path: "/CategoryManagement",
        element: <CategoryManagement></CategoryManagement>,
      },
      {
        path: "/manageusers",
        element: <ManageUsers></ManageUsers>,
      },
      {
        path: "/transactions",
        element: <Transactions/>
      },
      {
        path: "/FAQ",
        element: <FAQpage/>
      },
      {
        path: "/roomBookingHelp",
        element: <RoomBookingHelp/>
      },
      {
        path: "/terms&conditions",
        element: <TermsAndConDitions/>
      },
      {
        path: "/user/:userId",
        element:<UserProfile/>
      },
      {
        path: "/editcontent",
        element:<EditContent/>
      },
      {
        path: "/personalinfo",
        element:<Personalinfo/>
      },
      {
        path: "/personalinfo",
        element:<Personalinfo/>
      },
      {
        path: "/bookingmanagement",
        element:<ManageBooking/>
      },
      {
        path: "/security",
        element:<Security/>
      },
      {
        path: "/login",
        element:<Login/>
      },
      {
        path: "/forgot-password",
        element:<Forgetpasswrod/>
      },
      {
        path: "/otpverification",
        element:<OTPverification/>
      },
    ]
  },

]);

export default router;