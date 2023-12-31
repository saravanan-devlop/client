import React, { useState } from "react";
import axios from "axios";
import Loader from "../components/Room";
import Error from "../components/Error";

function Loginscreen () {
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const [loading, setloading] = useState(false);
    const [error, seterror] = useState();

async function Login(){
{

        const user={
            email,
            password
        }
        console.log(user)
        try {

            // setloading(true);
            const result = await axios.post('/api/users/login',user).data
            // setloading(false)

            // localStorage.setItem('currentUser' , JSON.stringify(result));
            window.location.href='/home'

        } catch (error) {
            console.log(error)
            // setloading(false)
            // seterror(true)
            
        }

    }
}

    return (
        <div>
            {loading && (<Loader/>)}
            <div className="row justify-content-center mt-5">
                <div className="col-md-5 mt-5">
                    {error && (<Error message = 'Invalid Credentionals'/>)}
                    <div className="bs p-3">
                        <h2>Login</h2>
                        <input type="text" className="form-control" placeholder="email" value={email} onChange={(e)=>{setemail(e.target.value)}}/>
                        <input type="text" className="form-control" placeholder="password" value={password} onChange={(e)=>{setpassword(e.target.value)}}/>
                        <button className="btn btn-primary mt-3" onClick={Login}>Login</button>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Loginscreen