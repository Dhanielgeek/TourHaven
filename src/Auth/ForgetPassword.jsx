import React,{useState} from 'react'
import './Auth.css'
import Loading from '../Components/Loader/Loading'
import axios from 'axios'
import Swal from 'sweetalert2'

const ForgetPassword = () => {

    const [email, setemail] = useState('')
    const [Isloading, setIsloading] = useState(false)
    const [ErrorMessage, setErrorMessage] = useState({
        email : ""
    })


    // Handle Email value
    const HandleEmail = (e)=>{
        setemail(e.target.value)
        setErrorMessage({...ErrorMessage,email: ''})
    }

    //Handle the Forget Password Api

    const Url = 'https://tourhaven.onrender.com/api/v1/users/forgetPassword'
    const data = {email}


    const HandleForgetPassword = async (e)=>{
        if(!email){
            setErrorMessage({
                email : !email ?  "Email is Required" : ''
            })
            return;
        }
        e.preventDefault()
        try{
            setIsloading(true)
            const res = await axios.post(Url,data)
            Swal.fire({
                position: "center",
                icon: "success",
                title: `${res.data.message}`,
                showConfirmButton: false,
                timer: 1500
              });
              console.log(res);
        }
        catch(error){
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: `${error}`,
                // footer: '<a href="#">Why do I have this issue?</a>'
              });
        }
        finally{
            setIsloading(false)
        }
    }


  return (
    <div className="ForgetBody">
        {
            Isloading === true ? <Loading/> : (  <div className="ForgetHolder">
            <div className="ForgetHeader">
                 <h1>Forgot Password</h1>
             </div>
             <div className="ForgetContainer">
                 <div className="ForgetTitle">
                     <h2>Forget Password</h2>
                     <span>Input your emaill address a code will be sent to you!
                     </span>
                 </div>
                 <div className="ForgetForm">
                     <div className="ForgetEmail">
                         <label>Email</label>
                         <input type="email" placeholder='Email' onChange={HandleEmail} />
                         <p className="error">{ErrorMessage.email}</p>
                     </div>
                     <div className="ForgetBtn">
                         <button onClick={HandleForgetPassword}>Submit</button>
                     </div>
                 </div>
             </div>
            </div>)
        }
     
       
    </div>
  )
}

export default ForgetPassword