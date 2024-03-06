import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ScrollToTop from './Components/ScrollToTop'; // Import ScrollToTop component
import Signup from './Auth/Signup';
import Login from './Auth/Login';
import ForgetPassword from './Auth/ForgetPassword';
import ResetPassword from './Auth/ResetPassword';
import Layout from './Components/Layout';
import Home from './Pages/Home';
import Team from './Pages/Team';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';
import HotelDescription from './Components/HotelDescription/HotelDescription';
import Verify from './Auth/Verify';
import Bookings from './Components/Bookings/Bookings';
import HotelAdmin from './Components/HotelAdmin/HotelAdmin';
import Adminsign from './Components/HotelAdmin/Adminsign';

const router = createBrowserRouter([
  {
    path: '/signup',
    element: <Signup />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/forgetpass',
    element: <ForgetPassword />
  },
  {
    path: '/resetpass/:token',
    element: <ResetPassword />
  },
  {
    path: '/verify',
    element: <Verify />
  },
  {
    path: '/admin',
    element: <HotelAdmin/>,
  },
  {
    path: '/adminsign',
    element: <Adminsign/>
  },
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '',
        element: <Home />
      },
      {
        path: 'about',
        element: <About />
      },
      {
        path: 'contact',
        element: <Contact />
      },
      {
        path: 'team',
        element: <Team />
      },
      {
        path: 'hoteldes/:id',
        element: <HotelDescription />
      },
      {
        path: 'bookings',
        element: <Bookings />
      },
     
    ]
  }
]);

const App = () => {
  return (
    
      <RouterProvider router={router} />
  );
};

export default App;




// import React from 'react'

// const App = () => {

  // let Keys = `key${Math.random()}`

  // function payKorapay() {
  //   window.Korapay.initialize({
  //       key: "pk_test_eR5xsWZRG1XfPVe8JvDJyHQWR1nieyBU2DaE5dBm",
  //       reference: Keys,
  //       amount: 3000, 
  //       currency: "NGN",
  //       customer: {
  //         name: "John Doe",
  //         email: "john@doe.com"
  //       },
  //       onClose: function () {
  //         // Handle when modal is closed
  //       },
  //       onSuccess: function (data) {
  //         console.log(data);
  //         // Handle when payment is successful
  //       },
  //       onFailed: function (data) {
  //         console.log(data);
  //         // Handle when payment fails
  //       }
      
  //   });
// }

//   return (
//     <div>
//        <button type="button" onClick={payKorapay}> Pay </button>
//     </div>
//   )
// }

// export default App



// {
//   "message": "booking successfull",
//   "data": {
//       "bookingId": "65e6901d9603675dc0b0697a",
//       "Name": "Daniel Ben",
//       "NoOfGuest": 1,
//       "checkIn": "2024-03-08T19:22:00.000Z",
//       "checkOut": "2024-03-09T19:22:00.000Z",
//       "checkInTime": "20:22",
//       "checkOutTime": "20:22",
//       "totalDays": 1,
//       "AmountToPay": 81000
//   }
// }