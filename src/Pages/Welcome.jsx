// import React from 'react'
// import { motion, AnimatePresence } from 'framer-motion'
// import './Page.css'
// import { Link } from 'react-router-dom'

// const Welcome = () => {
//   const fadeInUp = {
//     hidden: { opacity: 0, y: 20 },
//     visible: { opacity: 1, y: 0 },
//   }

//   return (
//     <div className="WelcomeBody">
//       <div className="WelWrapper">
//         <AnimatePresence>
//           <motion.div
//             className="WelContainer"
//             initial="hidden"
//             animate="visible"
//             exit="hidden"
//             variants={fadeInUp}
//             transition={{ duration: 2, ease: 'ease' }}
//           >
//             <div className="WelTitle">
//               <h2>WELCOME TO</h2>
//             </div>
//             <div className="WelSubTitle">
//               <h1>TOURHAVEN</h1>
//             </div>
//             <div className="WelContext">
//               <span>Book your stay and enjoy Luxury
//               redefined at the most affordable rates.</span>
//             </div>
//             <div className="WelBtn">
//               <Link to='/home' className='WeLink' >Get Started</Link>
//             </div>
//           </motion.div>
//         </AnimatePresence>
//       </div>
//     </div>
//   )
// }

// export default Welcome