import { FC, useState } from 'react'
import axios from 'axios';
import SignInForm from './signInForm/SignInForm';
import { MyRootState } from '../../../store/store';
import { useDispatch, useSelector } from 'react-redux';
import { message } from 'antd';
import { setIsAuthenticated } from '../../../slices/authSlice';

interface SignInProps {
    toggleForm: () => void;
}

interface ISignInResponse {
    "access_token": string;
    "token_type": string;
}

const SignIn: FC<SignInProps> = ({ toggleForm }) => {
    const serverURL = useSelector((state: MyRootState) => state.serverURL.value);

    const dispatch = useDispatch();

    const [messageApi, contextHolder] = message.useMessage();

    const [emailError, setEmailError] = useState<string>('');
    const [loginData, setLoginData] = useState({
        username: '',
        password: '',
    });

    const errorMessage = () => {
        messageApi.open({
            type: 'error',
            content: 'Логин или пароль введены не верно!',
        });
    };

    const handleUserLogin = (e: React.FormEvent) => {
        e.preventDefault();
        axios.post<ISignInResponse>(
            `${serverURL}/auth/login`,
            loginData,
            {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                withCredentials: true,
            }
        )
            .then(() => {
                dispatch((setIsAuthenticated(true)));
            })
            .catch((e) => {
                console.error(e);
                errorMessage();
                dispatch((setIsAuthenticated(false)));
            });
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setLoginData({ ...loginData, [name]: value });

        if (name === 'username') {
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(value)) {
                setEmailError('Введите корректный адрес электронной почты');
            } else {
                setEmailError('');
            }
        }
    };


    return (
        <>
            {contextHolder}
            <SignInForm
                handleUserLogin={handleUserLogin}
                handleChange={handleChange}
                toggleForm={toggleForm}
                emailError={emailError}
            />
        </>
    )
}

export default SignIn