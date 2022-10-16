import axios from "axios";

// import react, {useState} from "react";

export default async (req, res) => {
  console.log(res, "pppppwetin");

  let accessToken = null;

  if (req.method === "POST") {
    console.log("inner");
    const { 
        admin_email,
            admin_first_name,
            address,
            password,
            phone_number,
            company_email,
            company_name,
            country,
            state,
            gender,
            admin_username,
            admin_last_name
     } = req.body;

    const config = {
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
      },
    };

    const body = {
        admin_email,
        admin_first_name,
        address,
        password,
        phone_number,
        company_email,
        company_name,
        country,
        state,
        gender,
        admin_username,
        admin_last_name
    };

    try{
        const { data: accessResponse } = await axios.post("https://nest-srm.up.railway.app/auth/user/login/",body,config)
    //   console.log(data); 
        accessToken = accessResponse.access;

    }catch(error) {
        console.log('gat');
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.error(error.response.data);
          console.error(error.response.status);
          console.error(error.response.headers);
          if (error.response.data.detail) {
            return res.status(401).json({message: error.response.data.detail})
          } else if (error.response.data) {
            const first_key = Object.keys(error.response.data)[0]
            return res.status(401).json({ message: first_key.charAt(0).toUpperCase() + first_key.slice(1) + ': ' + error.response.data[first_key][0] })
          }
        } else if (error.request) {
          // The request was made but no response was received
          // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
          // http.ClientRequest in node.js
          console.error(error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.error('Error', error.message);
        }
        console.error(error.config);
  
        return res.status(500).json({message: 'Something went wrong'})
      }
      res.status(200).json({message: "User has been created"})
  } else {
    console.log("ji");
    res.setHeader("Allow", ["POST"]);
    res.status(405).json({ message: `MEthod ${req.method} is not allowed` });
  }
};
