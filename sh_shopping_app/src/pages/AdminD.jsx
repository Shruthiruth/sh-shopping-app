import { useAuth } from "../app/authProvider"

function AdminD() {
      const {data , isLoading} = useAuth()
    
        const user = data?.data
        if(isLoading){
            return <div>Loading...</div>
        }
    return (
        <div>
              <h1>Admin Dashboard</h1>
            <p>Welcome to the Admin Dashboard. {user?.firstName}</p>
            <br></br>   
        </div>
    )
}
export default AdminD