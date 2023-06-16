import {React , useContext, useState, useEffect} from 'react';
import { AuthContext } from '../../context/authContext'
import { Link } from "react-router-dom"
import { BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs";
import { Space, Spin } from 'antd';
import * as Yup from "yup";

const LoginForm = () => {
    const [isRevealPwd, setIsRevealPwd] = useState(false);
    const [loginForm, setLoginForm] = useState({
        email: '',
        password: ''
    })
    const [error, setError] = useState("");
    const [validationErrors, setValidationErrors] = useState({});
    const {LoginUser} = useContext(AuthContext)
    const {email, password} = loginForm
    const EmailRegExp =
    /^([a-z0-9_+.-]+)(\.[a-z0-9_-]+)*@([a-z0-9_-]+\.)+[a-z]{2,6}$/;
    const loginSchema = Yup.object().shape({
        email: Yup.string()
            .matches(EmailRegExp,'Invalid email address')
            .required('Email is required'),
        password: Yup.string()
            .min(6, 'Password must be at least 6 characters')
            .required('Password is required')
    });

    const [auth, setAuth] = useState();
    useEffect(() => {
      const user = localStorage.getItem("auth") || "";
      if (user)
        setAuth(user);
    }, []);

    const validateLoginForm = async (values) => {
        try {
            await loginSchema.validate(values, {abortEarly: false});
            setValidationErrors({});
            return true;
        } catch (errors) {
            const validationErrors = {};
            errors.inner.forEach(error => {
                validationErrors[error.path] = error.message;
            });
            setValidationErrors(validationErrors);
            return false;
        }
    };
    
    const onChangeLoginForm = event => {
        setLoginForm({...loginForm, [event.target.name]: event.target.value });
        setValidationErrors({});
    };
    
    const handleSubmit = async event => {
        event.preventDefault();
        const isFormValid = await validateLoginForm(loginForm);
        if (isFormValid) {
            try {
                const loginData = await LoginUser(loginForm);
                if(loginData.status === 0) {
                    window.location.replace("/");
                }
                else{
                    setError(loginData.message);
                }
            } catch (error) {
                console.log(error);   
            }
        }
    };
    if (auth) 
        return window.location.replace("/")
    else
    return (
        <section className="bg-gradient-to-tr from-[#BEEBF1] to-[#F3ACCC]">
        <div className="flex items-center justify-center px-6 py-8 mx-auto h-screen lg:py-0">  
        
            <div className="w-full  bg-white rounded-[35px] shadow md:mt-0 sm:max-w-md xl:p-0">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1 className="text-xl font-bold text-gray-900 md:text-2xl">
                        Sign in to your account
                    </h1>
                    <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                        <div>
                            <label for="email" className="block mb-2 text-sm font-medium text-gray-900">Your email</label>
                            <input type="email" 
                             name="email" 
                             id="email" 
                             className={`bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5 focus:outline-none focus:ring  ${validationErrors.email || error ? 'border-red-400 border-[2px]' : 'focus:ring-violet-300'}`} 
                             placeholder="name@company.com" required="" 
                             value={email}
                             onChange= {onChangeLoginForm}
                             />
                          {validationErrors.email && <div className="text-red-500 text-sm mt-1">{validationErrors.email}</div>}
                          {error && <div className="text-red-500 text-sm mt-1">{error}</div>}
                        </div>  
                        <div>
                            <label for="password" className="block mb-2 text-sm font-medium text-gray-900">Password</label>
                            <div className="relative flex justify-end">   
                            <input 
                                type={isRevealPwd ? "text" : "password"}
                                name="password" 
                                id="password" 
                                placeholder="••••••••" 
                                className={`bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:outline-none focus:ring block w-full p-2.5 ${validationErrors.password ? 'border-red-400 border-[2px]' : 'focus:ring-violet-300'}` } 
                                required=""
                                value={password}
                                onChange= {onChangeLoginForm}
                                />

                             <div
                                title={isRevealPwd ? "Hide password" : "Show password"}
                                className="absolute mr-2 mt-2"
                                style={{ fontSize: "25px" }}
                                onClick={() => setIsRevealPwd((prevState) => !prevState)}
                                >
                                {isRevealPwd ? <BsFillEyeFill className='text-slate-600'/> : <BsFillEyeSlashFill className='text-slate-600'/>}
                            </div>

                        </div>
                            {validationErrors.password && <div className="text-red-500 text-sm mt-1">{validationErrors.password}</div>}
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="flex items-start">
                                <div className="flex items-center h-5">
                                  <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3" required=""/>
                                </div>
                                <div className="ml-3 text-sm">
                                  <label for="remember" className="text-gray-500">Remember me</label>
                                </div>
                            </div>
                            <Link href="#" className="text-sm font-medium hover:underline ">Forgot password?</Link>
                        </div>
                        <button type="submit" className="w-full !bg-[#909FEE] hover:!bg-[#F3ACCC] font-medium rounded-lg text-sm px-5 py-2.5 text-center">Sign in</button>
                        <p className="text-sm font-light text-gray-500">
                            Don’t have an account yet? <Link to="/register" className="font-medium hover:underline ">Sign up</Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
      </section>
    )
}

export default LoginForm

