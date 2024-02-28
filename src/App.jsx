import React from 'react'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Signup from './Auth/Signup'
import Login from './Auth/Login'
import ForgetPassword from './Auth/ForgetPassword'
import ResetPassword from './Auth/ResetPassword'
import Layout from './Components/Layout'
import Home from './Pages/Home'
import Team from './Pages/Team'
import About from './Pages/About/About'
import Contact from './Pages/Contact/Contact'
import HotelListing from './Components/HotelListing/HotelListing'
import HotelDescription from './Components/HotelDescription/HotelDescription'
import Verify from './Auth/Verify'
import Bookings from './Components/Bookings/Bookings'
import User from './Components/UserProfile/User'




const router = createBrowserRouter([
  
  
  {
    path: '/signup',
    element: <Signup/>
  },
  {
    path: '/login',
    element: <Login/>
  },
  {
    path: '/forgetpass',
    element: <ForgetPassword/>
  },
  {
    path: '/resetpass/:token',
    element: <ResetPassword/>
  },
  {
    path: '/verify',
    element: <Verify/>
  },
  {
    path: '/',
    element: <Layout/>,
    children: [
      {
        path: '',
        element: <Home/>
      },
      {
        path: 'about',
        element: <About/>
      },
      {
        path: 'contact',
        element: <Contact/>
      },
      {
        path:'team',
        element: <Team/>
      },
      {
        path:'hotelist',
        element: <HotelListing/>
      },
      {
        path:'hoteldes',
        element: <HotelDescription/>
      },
      {
        path: 'bookings',
        element: <Bookings/>
      },
      {
        path:'user',
        element: <User/>
      }
      
    ]
  }
])



const App = () => {
  return (
      <>
      <RouterProvider router={router}/>
      </>
  )
}

export default App



// import React from 'react'

// const App = () => {

//   let Keys = `key${Math.random()}`

//   function payKorapay() {
//     window.Korapay.initialize({
//         key: "pk_test_eR5xsWZRG1XfPVe8JvDJyHQWR1nieyBU2DaE5dBm",
//         reference: Keys,
//         amount: 3000, 
//         currency: "NGN",
//         customer: {
//           name: "John Doe",
//           email: "john@doe.com"
//         },
//         onClose: function () {
//           // Handle when modal is closed
//         },
//         onSuccess: function (data) {
//           console.log(data);
//           // Handle when payment is successful
//         },
//         onFailed: function (data) {
//           console.log(data);
//           // Handle when payment fails
//         }
      
//     });
// }

//   return (
//     <div>
//        <button type="button" onClick={payKorapay}> Pay </button>
//     </div>
//   )
// }

// export default App