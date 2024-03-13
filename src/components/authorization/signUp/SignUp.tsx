import { FC, useState } from 'react'
import Styles from '../Authorization.module.css'
import axios from 'axios';
import { useSelector } from 'react-redux';
import { MyRootState } from '../../../store/store';

interface SignUpProps {
    toggleForm: () => void;
}

const SignUp: FC<SignUpProps> = ({ toggleForm }) => {
    const serverURL = useSelector((state: MyRootState) => state.serverURL.value)
    const [registerData, setRegisterData] = useState({
        email: '',
        first_name: '',
        second_name: '',
        father_name: '',
        username: '',
        password: '',
        born_date: '',
    });

    const handleUserRegister = (e: React.FormEvent) => {
        e.preventDefault();
        axios.post(
            `${serverURL}/auth/register`,
            registerData,
            {
                headers: {
                    'Content-Type': 'application/json',
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
        setRegisterData({ ...registerData, [e.target.name]: e.target.value });
    }

    return (
        <>
            <div className={`${Styles.info} ${Styles.slideIn}`}>
                <h3>Welcome Back!</h3>
                <p>
                    To keep connected with us please login with your personal info
                </p>
                <button onClick={toggleForm}>Sign In</button>
            </div>
            <div className={`${Styles.form} ${Styles.slideIn}`}>
                <form onSubmit={handleUserRegister}>
                    <h3>Create account</h3>
                    <input
                        type="email"
                        placeholder='Email'
                        name='email'
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        placeholder='First name'
                        name='first_name'
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        placeholder='Last name'
                        name='second_name'
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        placeholder='Father name *'
                        name='father_name'
                        onChange={handleChange}
                    />
                    <input
                        type="tel"
                        placeholder='Phone'
                        name='username'
                        onChange={handleChange}
                    />
                    <input
                        type="password"
                        placeholder='Password'
                        name='password'
                        autoComplete=''
                        onChange={handleChange}
                    />
                    <input
                        type="date"
                        name='born_date'
                        onChange={handleChange}
                    />
                    {/* <input
                        type="text"
                        placeholder='About yourself *'
                        name='about'
                        onChange={handleChange}
                    /> */}
                    <span>* optional areas</span>
                    <button>Sign up</button>
                </form>
            </div>
        </>
    )
}

export default SignUp