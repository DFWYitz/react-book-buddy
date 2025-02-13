import { useEffect, useState } from "react"
// import {link} from "react-router-dom"


const Account = (props) => {
  console.log(props)
  const [accountDetails, setAccountDetails] = useState({});

  useEffect(() => {

    const getUserDetails = async () => {
      const response = await fetch('https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/users/me', {
        headers:{
          "Content-Type":"application/json",
          "Authorization":`Bearer ${props.token}`
        }
      });
      //console.log(response)
      const userInfo = await response.json();
      console.log(userInfo)
      setAccountDetails(userInfo);
    }
    getUserDetails();
    
  },[])


  //api call
  //pass token as prop from appjsx to accountjsx
  return (

    <h1>ACCOUNT</h1>
  )
}

export default Account;