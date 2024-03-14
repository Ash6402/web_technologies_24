import { Link } from "react-router-dom"

export default function LoginPage(){


    return (
        <>
            <div className="h-100 grid justify-center align-center">
                <form className="wrapper pad-l grid">
                    <h1 className="text-center">Log in</h1>
                    <div className="form-field">
                        <label htmlFor="username">Username</label>
                        <input type="text" id="username" name="username" />
                    </div>
                    <div className="form-field">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" name="password"/>
                    </div>
                    <button type="button" className="btn-primary">Login</button>
                    <Link className="link" to="/auth/signup">Not a user? SignUp here!</Link>
                </form>
            </div>
        </>
    )
}