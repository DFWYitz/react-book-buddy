import {useState} from 'react'
import { useNavigate } from 'react-router-dom'

const Login = ({setToken}) => {
  const[emailInput, setEmailInput] = useState('');
  const[passwordInput, setPasswordInput] = useState('');

  const navigate = useNavigate();

  const [isLoggingIn, setIsLoggingIn] = useState(true)

  const login = async()=> {
    try {
      const response = await fetch('https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/users/login',{
        method: 'POST',
        headers:{
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email: emailInput,
          password: passwordInput
        })
      });
      const data =await response.json();
      console.log(data)
      setToken(data.token);
  
      localStorage.setItem('token', data.token);
      if(data.token){
        navigate('/');
      }
    } catch (error) {
      console.log(error)
    }
    
  }
  return (
    <form onSubmit={login}>
      <input
      placeholder='email'
      onChange={(event)=>{setEmailInput(event.target.value)}}
      />
      <input 
      placeholder='password'
      onChange={(event)=>{setPasswordInput(event.target.value)}}
      />
      <button type = "submit">Log In</button>

    </form>
  )

}
export default Login