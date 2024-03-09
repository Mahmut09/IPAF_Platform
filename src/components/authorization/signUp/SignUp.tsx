import { FC } from 'react'
import Styles from '../Authorization.module.css'

interface SignUpProps {
    toggleForm: () => void;
}

const SignUp: FC<SignUpProps> = ({ toggleForm }) => {
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
                <form>
                    <h3>Create account</h3>
                    <input
                        type="email"
                        placeholder='Email'
                    />
                    <input
                        type="text"
                        placeholder='First name'
                    />
                    <input
                        type="text"
                        placeholder='Last name'
                    />
                    <input
                        type="text"
                        placeholder='Father name *'
                    />
                    <input
                        type="tel"
                        placeholder='Phone'
                    />
                    <input
                        type="password"
                        placeholder='Password'
                    />
                    <input
                        type="date"
                    />
                    <input 
                        type="text"
                        placeholder='About yourself *'
                    />
                    <span>* optional areas</span>
                    <button>Sign up</button>
                </form>
            </div>
        </>
    )
}

export default SignUp