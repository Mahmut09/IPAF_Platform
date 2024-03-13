import { FC, useState } from 'react'
import Styles from '../Authorization.module.css'
import axios from 'axios';
import { MyRootState } from '../../../store/store';
import { useSelector } from 'react-redux';

interface SignInProps {
    toggleForm: () => void;
}

const SignIn: FC<SignInProps> = ({ toggleForm }) => {
    const serverURL = useSelector((state: MyRootState) => state.serverURL.value)
    const [loginData, setLoginData] = useState({
        username: '',
        password: '',
    });

    const handleUserLogin = (e: React.FormEvent) => {
        e.preventDefault();
        axios.post(
            `${serverURL}/auth/login`,
            loginData,
            {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            }
        )
            .then(res => {
                console.log(res);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLoginData({ ...loginData, [e.target.name]: e.target.value });
    }

    return (
        <>
            <div className={`${Styles.form} ${Styles.slideOut}`}>
                <form onSubmit={handleUserLogin}>
                    <h3>Sign In</h3>
                    <input
                        type="email"
                        placeholder='Email'
                        name='username'
                        onChange={handleChange}
                    />
                    <input
                        type="password"
                        placeholder='Password'
                        name='password'
                        onChange={handleChange}
                    />
                    <span>Forgot your password ?</span>
                    <button>Sign in</button>
                </form>
            </div>
            <div className={`${Styles.info} ${Styles.slideOut}`}>
                <h3>Hello, friend!</h3>
                <p>
                    Enter your personal details and start a journey with us
                </p>
                <button onClick={toggleForm}>Sign Up</button>
            </div>
        </>
    )
}

export default SignIn