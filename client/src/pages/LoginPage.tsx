/* Functional component login page */

const LoginPage = () => {

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        
        const data = new FormData(event.currentTarget);
        
        console.log({
            email: data.get('email'),
            password: data.get('password'),
        });
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