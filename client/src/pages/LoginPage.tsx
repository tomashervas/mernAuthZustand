/* Component login page */
import {useNavigate} from "react-router-dom";
import { useAuthStore } from "../store/auth";

const LoginPage = () => {

    const {setToken, setUser} = useAuthStore()
    const navigate = useNavigate()

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);

        //post login request
        const res = await fetch(import.meta.env.VITE_BASE_URL + '/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: data.get('email'),
                password: data.get('password')
            })
        })
        const jsonResponse = await res.json();
        if(jsonResponse.token) {
            setToken(jsonResponse.token)
            console.log(jsonResponse);
        }

        const resProfile = await fetch(import.meta.env.VITE_BASE_URL + '/api/profile', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${jsonResponse.token}`
            }
        })
        const jsonResponseUser = await resProfile.json();
        if(jsonResponseUser.user) {
            setUser(jsonResponseUser.user)
            console.log(jsonResponseUser);
            navigate('/profile');
        }
    }

  return (
    <div>
        <h2>Login</h2>
        {/* Login Form */}
        <form className="form" onSubmit={handleSubmit}>
            <div className="">
                <label>Email</label>
                <input name="email" type="email" placeholder="Email" required/>
            </div>
            <div className="">
                <label>Password</label>
                <input name="password" type="password" placeholder="Password" required/>
            </div>
            <button type="submit" className="button">Submit</button>
        </form>
    </div>
  )
}
export default LoginPage