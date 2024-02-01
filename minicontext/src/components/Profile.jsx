import {useContext} from 'react'
import UserContext from '../Context/UserContext'


function Profile() {
    const {user}=useContext(UserContext)
    if(!user){
        return <div>Please Login</div>
    }
    return (
        <div>
            <h2>Profile</h2>
            <div>Username:{user.username}</div>
            <div>Password:{user.password}</div>
        </div>
    )

}

export default Profile