import { createContext, useState } from "react"; 
import axios from "axios";
import { useRouter } from "next/router";



//set global context to be able to use or call anywhere 
const AuthenticationContext = createContext();

export const AuthenticationProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [accessToken, setAccessToken] = useState(null);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null)


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
			// if (accessResponse && accessResponse.user) {
			// 	setUser(accessResponse.user)
            //     console.log(user, 'user now');
			// }

			if (accessResponse && accessResponse.token.access) {
                console.log(accessResponse.token.access, 'looopwew');
				setAccessToken(accessResponse.token.access)
			}

			router.push('/add-user/')
		} catch(error) {
		  if (error.response && error.response.data) {
		  	setError(error.response.data.message)
		  	return      
	      } else if (error.request) {
		    setError({message:"something went wrong"})
		    return  
	      } else {
		    setError({message:"something went wrong"})
			return
	      }
	
        }

        
        // const {data} = await axios.post('https://nest-srm.up.railway.app/auth/user/login/', body, config)
        
    }
    const register = async({
              
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
    }) => {
        const config = {
            headers : {
                'Accept': 'application/json',
                'Content-Type':'application/json'
            }
        }

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
        }


        try {
			// register
            await axios.post('https://nest-srm.up.railway.app/auth/registration/', body, config)
            //add login 
            // login({admin_username, password})
            router.push('/login/')
			
		} catch(error) {
            console.log(error);
		  if (error.response && error.response.data) {
            const first_key = Object.keys(error.response.data)[0]
            const messages = { message: first_key.charAt(0).toUpperCase() + first_key.slice(1) + ': ' + error.response.data[first_key][0] }
		  	setError(messages.message)
		  	return      
	      } else if (error.request) {
		    setError("something went wrong")
		    return  
	      } else {
			setError("something went wrong")
			return
	      }
        //   console.error('error');
	
        }

    }

    const forgotPassword = async({usernameoremail}) => {
        console.log('hiii', usernameoremail);
        const config = {
            headers : {
                'Accept': 'application/json',
                'Content-Type':'application/json'
            }
        }

        const body = {
            usernameoremail,
        }


        try {
			const {data} = await axios.post('https://nest-srm.up.railway.app/auth/user/password-reset/', body, config)
            console.log('hiiiierhjfdjhdnsf', data);
            setSuccess(data)
			// console.log(accessResponse, 'opopopopo');
			// if (accessResponse && accessResponse.user) {
			// 	setUser(accessResponse.user)
            //     console.log(user, 'user now');
			// }

			// if (accessResponse && accessResponse.access) {
			// 	setAccessToken(accessResponse.access)
			// }

			// router.push('/')
		} catch(error) {
            console.log(error);
		  if (error.response && error.response.data) {
		  	setError(error.response.data.message)
		  	return      
	      } else if (error.request) {
		    setError({message:"something went wrong"})
		    return  
	      } else {
		    setError({message:"something went wrong"})
			return
	      }
	
        }

        
        // const {data} = await axios.post('https://nest-srm.up.railway.app/auth/user/login/', body, config)
        
    }

    const addUser = async({first_name, last_name, email, gender}) => {

        if (accessToken){
            const config = {

                    headers : {
                        'Accept': 'application/json',
                        'Content-Type':'application/json',
                        'Authorization' : 'Bearer ' + accessToken
                    }
                }
                const body = {
                    first_name,
                    last_name,
                    email,
                    gender
                }
        
        
                try {
                    const { data:accessResponse } = await axios.post('https://nest-srm.up.railway.app/auth/user/create/', body, config)
                    console.log(accessResponse, 'opopopopo');
                    setSuccess(accessResponse.message)
                   
        
                    router.push('/')
                } catch(error) {
                  if (error.response && error.response.data) {
                      setError(error.response.data.message)
                      return      
                  } else if (error.request) {
                    setError({message:"something went wrong"})
                    return  
                  } else {
                    setError({message:"something went wrong"})
                    return
                  }
            
                }
        }

        

        
        // const {data} = await axios.post('https://nest-srm.up.railway.app/auth/user/login/', body, config)
        
    }
    


    const clearError = () => {
        setError(null)
    }
    return (
        <AuthenticationContext.Provider value={{ user, accessToken, error,  login, register, clearError, forgotPassword, success, addUser }}>
            {children}
        </AuthenticationContext.Provider>
    )
}

export default AuthenticationContext