"use client";
import 'bootstrap/dist/css/bootstrap.css'

import { ToastContainer, toast } from  'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import React, { useState } from   'react';
import Axios from 'axios';
import cookie from   'js-cookie'
import Link from 'next/link';
import  {useRouter} from 'next/navigation'
const  Signin = ()=>{
 
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const router = useRouter()

  const userSignin = async(e)=>{
    e.preventDefault()
    const res = await fetch(`http://localhost:3000/api/dossier`,{
      method:"POST",
      headers: {
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
         email,
        password
      })
    })
     const res2 = await res.json();
    if(res2.error){
      toast.error(res2.error);
    }else{
       toast.success("signup sucess");
       cookie.set('token',res2.token)
       router.push('/recherche');
    }
  }
return (
  // We pass the event to the handleSubmit() function on submit. 
<section class="vh-100"  style={{backgroundcolor: '#9A616D'}}>
  <div class="container py-5 h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col col-xl-10">
        <div class="card" style={{borderradius: '1rem'}}>
          <div class="row g-0">
            <div class="col-md-6 col-lg-5 d-none d-md-block">
              <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp"
                alt="login form" class="img-fluid" style={{borderradius: '1rem 0 0 1rem'}} />
            </div>
            <div class="col-md-6 col-lg-7 d-flex align-items-center">
              <div class="card-body p-4 p-lg-5 text-black">

                <form >

                  <div class="d-flex align-items-center mb-3 pb-1">
                    <i class="fas fa-cubes fa-2x me-3" style={{color: "#ff6219"}}></i>
                    <span class="h1 fw-bold mb-0">Logo</span>
                  </div>

                  <h5 class="fw-normal mb-3 pb-3" style={{letterspacing: "1px"}}>Sign into your account</h5>
                  <div class="form-outline mb-4">
                    <input type="email"   id="form2Example17"   placeholder="Email"
          value={email}
          onChange={(e)=>setEmail(e.target.value)} class="form-control form-control-lg" />
                    <label class="form-label" for="form2Example17">Email address</label>
                  </div>

                  <div class="form-outline mb-4">
                    <input type="password"   id="form2Example27" class="form-control form-control-lg"  placeholder="Password"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}/>
                    <label class="form-label" for="form2Example27">Password</label>
                  </div>

                  <div class="pt-1 mb-4">
                    <button onClick={userSignin}  class="btn btn-dark btn-lg btn-block" type="button">Login</button>
                  </div>

                  
                  <p class="mb-5 pb-lg-2" style={{color: "#393f81"}}>Don't have an account? <a href="/sign/signup"
                      style={{color: "#393f81"}}>Register here</a></p>
                   
                </form>
                <ToastContainer  />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
  
)
}

export default Signin