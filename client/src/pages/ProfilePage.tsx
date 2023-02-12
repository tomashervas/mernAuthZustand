import { useNavigate } from "react-router-dom"
import { useAuthStore } from "../store/auth"

const ProfilePage = () => {
  const {user, logout } = useAuthStore()
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate('/login')
  }
  return (
    <div>
      <h2>Profile</h2> 
      <p>{user.email}</p>
      <button onClick={handleLogout} >Logout</button>
    </div>

  )
}
export default ProfilePage