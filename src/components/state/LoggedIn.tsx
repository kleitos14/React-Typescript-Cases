import { useState } from "react"

export const LoggedIn = () => {

    const [isLogedIn, setIsLoggedin] = useState(false)

    const handleLogin = () => {
        setIsLoggedin(true)
    }
    const handleLogout = () => {
        setIsLoggedin(false)
    }
    return (
        <div>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogout}>Logout</button>
            <div>User is {isLogedIn ? 'logged in' : 'logged out'}</div>
        </div>
    )
}