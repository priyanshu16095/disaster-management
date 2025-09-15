import { createContext, useContext, useEffect, useState } from "react"

const UserContext = createContext()

const UserContextProvider = ({children}) => {
    const [userData, setUserData] = useState(
        {
            firstName: "",
            lastName: "",
            email: "",
            mobile: "",
            password: ""
        }
    )

    const updateUserData = (field, value) => {
    setUserData((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

    return (
        <UserContext.Provider value={{userData, updateUserData}}>
            {children}
        </UserContext.Provider>
    )
}
export default UserContextProvider

export const UserState = () => {
    return useContext(UserContext)
}