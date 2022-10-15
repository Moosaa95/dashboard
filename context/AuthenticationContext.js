import { createContext, useState } from "react"; 
import axios from "axios";
import { useRouter } from "next/router";



//set global context to be able to use or call anywhere 
const AuthenticationContext = createContext();

export const AuthenticationProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [accessToken, setAccessToken] = useState(null);
    const [error, setError] = useState(null);


    const router = useRouter();


    //login user
    const login = async({username, password}) => {
        console.log('hiii');
        const config = {
            headers : {
                'Accept': 'application/json',
                'Content-Type':'application/json'
            }
        }

        const body = {
            username,
            password
        }


        try {
			const { data:accessResponse } = await axios.post('https://nest-srm.up.railway.app/auth/user/login/', body, config)
			console.log(accessResponse, 'opopopopo');
			if (accessResponse && accessResponse.user) {
				setUser(accessResponse.user)
                console.log(user, 'user now');
			}

			if (accessResponse && accessResponse.access) {
				setAccessToken(accessResponse.access)
			}

			router.push('/')
		} catch(error) {
		  if (error.response & error.response.data) {
		  	setError(error.response.data.message)
		  	return      
	      } else if (error.request) {
		    setError('Something went wrong')
		    return  
	      } else {
			setError('Something went wrong')
			return
	      }
	
        }

        // const {data} = await axios.post('https://nest-srm.up.railway.app/auth/user/login/', body, config)

    }
    return (
        <AuthenticationContext.Provider value={{ user, accessToken, error,  login }}>
            {children}
        </AuthenticationContext.Provider>
    )
}

export default AuthenticationContext