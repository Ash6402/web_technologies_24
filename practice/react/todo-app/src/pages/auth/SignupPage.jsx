import { useEffect, useRef, useState } from "react";
import { confirmPassErrors, emailErrors, passwordErrors, usernameErrors } from "../../services/error-handling.service";
import { signUp } from "../../services/http-auth.service";
import { Link, useNavigate } from "react-router-dom";

export default function SignUpPage(){
    const btnRef = useRef();
    const emailRef = useRef();
    const usernameRef = useRef();
    const passwordRef = useRef();
    const confirmPassRef = useRef();
    
    const navigate = useNavigate();

    const [invalid, setInvalid] = useState(true);

    useEffect(() => {
        btnRef.current.disabled = invalid;
    }, [invalid])

    function validator(errs, event){
        const field = event.target;
        if(!field.checkValidity()){
            field.classList.add('error');
            field.nextElementSibling.innerText = errs.invalid || errs.min;
        }else{
            field.classList.remove('error');
            field.nextElementSibling.innerText = null;
        }
        setInvalid(() => checkForm());
    }

    function checkForm(){
        if( passwordRef.current.checkValidity() && 
            emailRef.current.checkValidity() &&
            usernameRef.current.checkValidity() &&
            confirmPassRef.current.value == passwordRef.current.value
        ) return false;
        return true;
    }

    function confirmPassValidator(event){
        const field = event.target;
        if(event.target.value != passwordRef.current.value){
            field.classList.add('error');
            field.nextElementSibling.innerText = confirmPassErrors.missMatch;
        }else{
          field.classList.remove('error');
          field.nextElementSibling.innerText = null;
        }
        setInvalid(() => checkForm());
    }

    async function submitForm(){
        const formData = {
            username: usernameRef.current.value,
            email: emailRef.current.value,
            password: passwordRef.current.value,
        }
        
        const res = await signUp(formData);
        const json = await res.json(); 
        if(res.status == 409){
            usernameRef.current.classList.add('error')
            usernameRef.current.nextElementSibling.innerText = json.error;
        }else if(res.status === 201){
            navigate("/auth/login");
        }
    }

    return (
        <div className="h-100 grid justify-center align-center">
            <form className="wrapper pad-l grid">
                <h1 className="text-center">Sign up</h1>
                <div className="form-field">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" 
                        pattern="^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/" 
                        ref={emailRef}
                        required
                        onChange={(e) => validator(emailErrors, e)}    
                    />
                    <span className="err-msg"></span>
                </div>
                <div className="form-field">
                    <label htmlFor="username">Username</label>
                    <input type="text" name="username" id="username"
                        ref={usernameRef}
                        required
                        minLength={3}
                        onChange={(e) => validator(usernameErrors, e)
                        } 
                        />
                        <span className="err-msg"></span>
                </div>
                <div className="form-field">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password"
                        ref={passwordRef}
                        required
                        minLength={8}
                        onChange={(e) =>  validator(passwordErrors, e)} 
                    />
                    <span className="err-msg"></span>
                </div>
                <div className="form-field">
                    <label htmlFor="confirm-pass">Confirm Password</label>
                    <input type="password" id="confrim-pass"
                        ref={confirmPassRef}
                        required
                        onChange={(e) => confirmPassValidator(e)}
                    />
                    <span className="err-msg"></span>
                </div>
                <button ref={btnRef} type="button" 
                    onClick={submitForm} 
                    className="btn-primary">
                    Signup
                </button>
                <Link to="/auth/login">Already a user? LogIn in here!</Link>
            </form>
        </div>
    )
}