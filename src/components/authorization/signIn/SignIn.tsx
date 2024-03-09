import { FC } from 'react'
import Styles from '../Authorization.module.css'

interface SignInProps {
    toggleForm: () => void;
}

const SignIn: FC<SignInProps> = ({ toggleForm }) => {
    return (
        <>
            <div className={`${Styles.form} ${Styles.slideOut}`}>
                <form>
                    <h3>Sign In</h3>
                    <input
                        type="email"
                        placeholder='Email'
                    />
                    <input
                        type="password"
                        placeholder='Password'
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