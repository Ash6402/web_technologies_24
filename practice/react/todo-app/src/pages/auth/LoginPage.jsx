import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { login } from "../../services/http-auth.service";

export default function LoginPage(){

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState({username: null, password: null});
    const navigate = useNavigate();

    async function submit(){

        if(!username || !password) return;

        const formData = {
            username,
            password,
        }

        const res = await login(formData)
        if(res.status === 404)
            setErrors({username: res.json.error, password:null})
        if(res.status === 401)
            setErrors({username: null, password: res.json.error})
        if(res.status === 202){
            setErrors({username: null, password: null})
            navigate("/home");
        }
    }

    return (
        <div className="h-100 grid justify-center align-center">
            <form className="wrapper pad-l grid">
                <h1 className="text-center">Log in</h1>
                <div className="form-field">
                    <label htmlFor="username">Username</label>
                    <input 
                        type="text" 
                        id="username" 
                        name="username"
                        className={errors.username ? "error" : ''}
                        required 
                        onChange={e => setUsername(e.target.value)}
                    />
                    <span className="err-msg">{errors.username}</span>
                </div>
                <div className="form-field">
                    <label htmlFor="password">Password</label>
                    <input 
                        type="password" 
                        id="password" 
                        name="password"
                        className={errors.password ? "error" : ''}
                        required
                        onChange={e => setPassword(e.target.value)}
                    />
                    <span className="err-msg">{errors.password}</span>
                </div>
                <button type="button" onClick={submit} className="btn-primary">Login</button>
                <Link className="link" to="/auth/signup">Not a user? SignUp here!</Link>
            </form>
        </div>
    )
}