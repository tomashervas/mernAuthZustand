/* Component login page */
import { useAuthStore } from "../store/auth";

const LoginPage = () => {

    const {setToken} = useAuthStore()

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
        setToken(jsonResponse.token);
        console.log(jsonResponse);
    }

  return (
    <div>
        <h2>Login</h2>
        {/* Login Form */}
        <form className="form" onSubmit={handleSubmit}>
            <div className="">
                <label>Email</label>
                <input name="email" type="email" placeholder="Email" />
            </div>
            <div className="">
                <label>Password</label>
                <input name="password" type="password" placeholder="Password" />
            </div>
            <button type="submit" className="button">Submit</button>
        </form>
    </div>
  )
}
export default LoginPage