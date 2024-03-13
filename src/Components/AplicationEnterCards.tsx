import { useState } from "react"
import LoginCard from "./LoginCard"
import SignInCard from "./SignInCard"

export default function AplicationEnterCards() {
  const [showLogin, SetShowLogin] = useState(true)

  const handleChangeVisibility = () => {
    SetShowLogin(value => !value)
  }

  return <>
    {
      (showLogin) 
        ? <LoginCard handleChangeVisibility={handleChangeVisibility}/>
        : <SignInCard handleChangeVisibility={handleChangeVisibility}/>
    }
  </>
} 