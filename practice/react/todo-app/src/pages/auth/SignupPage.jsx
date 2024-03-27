import { useEffect, useRef, useState } from "react";
import { confirmPassErrors, emailErrors, passwordErrors, usernameErrors } from "../../services/error-handling.service";
import { signUp } from "../../services/http-auth.service";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

export default function SignUpPage(){
    // const btnRef = useRef();
    // const emailRef = useRef();
    // const usernameRef = useRef();
    // const passwordRef = useRef();
    // const confirmPassRef = useRef();
    
    // const navigate = useNavigate();

    // const [invalid, setInvalid] = useState(true);

    // useEffect(() => {
    //     btnRef.current.disabled = invalid;
    // }, [invalid])

    // function validator(errs, event){
    //     const field = event.target;
    //     if(!field.checkValidity()){
    //         field.classList.add('error');
    //         field.nextElementSibling.innerText = errs.invalid || errs.min;
    //     }else{
    //         field.classList.remove('error');
    //         field.nextElementSibling.innerText = null;
    //     }
    //     setInvalid(() => checkForm());
    // }

    // function checkForm(){
    //     if( passwordRef.current.checkValidity() && 
    //         emailRef.current.checkValidity() &&
    //         usernameRef.current.checkValidity() &&
    //         confirmPassRef.current.value == passwordRef.current.value
    //     ) return false;
    //     return true;
    // }

    // function confirmPassValidator(event){
    //     const field = event.target;
    //     if(event.target.value != passwordRef.current.value){
    //         field.classList.add('error');
    //         field.nextElementSibling.innerText = confirmPassErrors.missMatch;
    //     }else{
    //       field.classList.remove('error');
    //       field.nextElementSibling.innerText = null;
    //     }
    //     setInvalid(() => checkForm());
    // }

    // async function submitForm(){
    //     const formData = {
    //         username: usernameRef.current.value,
    //         email: emailRef.current.value,
    //         password: passwordRef.current.value,
    //     }
        
    //     const res = await signUp(formData);
    //     const json = await res.json(); 
    //     if(res.status == 409){
    //         usernameRef.current.classList.add('error')
    //         usernameRef.current.nextElementSibling.innerText = json.error;
    //     }else if(res.status === 201){
    //         navigate("/auth/login");
    //     }
    // }

    const submit = (data) => {
        console.log(data);
    }
 
    const {register, handleSubmit} = useForm();

    return (
        <div className="h-100 grid justify-center align-center">
            <form className="wrapper pad-l grid" onSubmit={handleSubmit(submit)}>
                <h1 className="text-center">Sign up</h1>
                <div className="form-field">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" 
                        {...register("email", {
                            required: true,
                        })}
                        // pattern="^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/" 
                    />
                    <span className="err-msg"></span>
                </div>
                <div className="form-field">
                    <label htmlFor="username">Username</label>
                    <input type="text" name="username" id="username"
                        {...register("username", {
                            required: true,
                        })}
                        />
                        <span className="err-msg"></span>
                </div>
                <div className="form-field">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password"
                    {...register("password", {
                        required: true,
                    })}
                    />
                    <span className="err-msg"></span>
                </div>
                <div className="form-field">
                    <label htmlFor="confirm-pass">Confirm Password</label>
                    <input type="password" id="confrim-pass"
                    {...register("confirm-pass", {
                        required: true,
                    })}
                    />
                    <span className="err-msg"></span>
                </div>
                <button  type="submit" 
                    className="btn-primary">
                    Signup
                </button>
                <Link to="/auth/login">Already a user? LogIn in here!</Link>
            </form>
        </div>
    )
}