
import { useAuth } from '../app/authProvider'

function UserD() {

    const {data , isLoading} = useAuth()

    const user = data?.data
    if(isLoading){
        return <div>Loading...</div>
    }

    return (
        <div>
            <h1>User Dashboard</h1>
            <p>Welcome to the User Dashboard. {user?.firstName}</p>
            <br></br> 
        </div>
    )
}
export default UserD