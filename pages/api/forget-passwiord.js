import axios from "axios";
import cookie from "cookie";
// import react, {useState} from "react";

export default async (req, res) => {
  console.log(res, "pppppwetin");

  let accessToken = null;

  if (req.method === "POST") {
    console.log("inner");
    const { username } = req.body;

    const config = {
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
      },
    };

    const body = {
      username,
      
    };

  
    try{
        const { data } = await axios.post("https://nest-srm.up.railway.app/auth/user/password-reset/",body,config)
      console.log(data); 
        // accessToken = accessResponse.access;
        // //change secure to true in production 
        // res.setHeader('Set-Cookie', cookie.serialize('refresh', accessResponse.refresh, {httpOnly:true, secure:false, sameSite:'strict', maxAge:60*60*24, path:'/'}))

    }catch(error) {
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.error(error.response.data);
          console.error(error.response.status);
          console.error(error.response.headers);
          return res.status(401).json({message: error.response.data.detail})
        } else if (error.request) {
          console.error(error.message);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.error('Error', error.message);
        }
        console.error(error.config);
  
        return res.status(500).json(error.message)
      }
    
      // if (accessToken){
      //     const userConfig = {
      //         headers:{

      //             'Authorization' : 'Bearer ' + accessToken
      //         }
      //     }
      //     const { data:userData } = await axios.get('https://nest-srm.up.railway.app/auth/user/create/', userConfig)
      //     console.log(userData, 'oppopp');
      //   res.status(200).json({user: userData, access:accessToken})
      // }
  } else {
    console.log("ji");
    res.setHeader("Allow", ["POST"]);
    res.status(405).json({ message: `MEthod ${req.method} is not allowed` });
  }
};
