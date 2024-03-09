import { FC, useState } from 'react';
import SignIn from './signIn/SignIn';
import SignUp from './signUp/SignUp';
import Styles from './Authorization.module.css';

const Authorization: FC = () => {
    const [isSigningUp, setIsSigningUp] = useState(false);
    const toggleView = () => setIsSigningUp(!isSigningUp);

    return (
        <div className={Styles.container}>
            {isSigningUp ?
                <SignIn toggleForm={toggleView} />
                :
                <SignUp toggleForm={toggleView} />
            }
        </div>
    );
};

export default Authorization;
