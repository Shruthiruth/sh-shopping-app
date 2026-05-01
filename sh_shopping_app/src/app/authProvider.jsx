import { createContext,useContext } from "react"
import { useGetMeQuery } from "./../features/auth/authApi"


const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const {data, error, isLoading , refetch ,isError} = useGetMeQuery()
  const user = error?.status === 401 ? null : data?.data

  return (
    <AuthContext.Provider value={{ user, isLoading, isError, refetch , data,error}}>
      {children}
    </AuthContext.Provider>


  )
}

export const useAuth = () => useContext(AuthContext)
