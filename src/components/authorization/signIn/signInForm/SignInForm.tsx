import React, { FC } from 'react'
import Styles from '../../Authorization.module.css'

interface SignInProps {
    handleUserLogin: (e: React.FormEvent) => void;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    toggleForm: () => void;
    emailError: string;
}

const SignInForm: FC<SignInProps> = ({ handleUserLogin, handleChange, toggleForm, emailError }) => {
    return (
        <>
            <div className={`${Styles.form} ${Styles.slideOut} `}>
                <form onSubmit={handleUserLogin}>
                    <h3>Sign In</h3>
                    <div id={Styles.emailBlock}>
                        <input
                            type="email"
                            placeholder='Email'
                            name='username'
                            required
                            onChange={handleChange}
                        />
                        {emailError && <span id={Styles.error}>{emailError}</span>}
                    </div>
                    <input
                        type="password"
                        placeholder='Password'
                        name='password'
                        required
                        onChange={handleChange}
                    />
                    <span>Forgot your password ?</span>
                    <button>Sign in</button>
                </form>
            </div>
            <div className={`${Styles.info} ${Styles.slideOut} `}>
                <h3>Hello, friend!</h3>
                <p>
                    Enter your personal details and start a journey with us
                </p>
                <button onClick={toggleForm}>Sign Up</button>
            </div>
        </>
    )
}

export default SignInForm