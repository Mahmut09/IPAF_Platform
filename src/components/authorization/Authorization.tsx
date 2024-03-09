import { FC, useState } from 'react';
import Styles from './Authorization.module.css';
import Face from '../../assets/Face.png';
import FaceDown from '../../assets/FaceDown.png';
import LeftHand from '../../assets/LeftHand.png';
import RightHand from '../../assets/RightHand.png';

const Authorization: FC = () => {
    const [isFaceDown, setIsFaceDown] = useState(false);
    const [isHandsUp, setIsHandsUp] = useState(false);

    const handleFaceUp = () => {
        setIsFaceDown(false);
        setIsHandsUp(false);
    };

    const handleFaceDown = () => {
        setIsFaceDown(true);
        setIsHandsUp(false);
    };

    const handleHandsUp = () => {
        setIsFaceDown(false);
        setIsHandsUp(true);
    };

    return (
        <div className={Styles.container}>
            <div className={Styles.content}>
                <div className={Styles.face}>
                    <img
                        src={Face}
                        alt="face"
                        className={`${Styles.faceUp} ${isFaceDown ? Styles.faceDown : ''}`} />
                    <img
                        src={FaceDown}
                        alt="facedown"
                        className={isFaceDown ? Styles.faceUp : Styles.faceDown}
                    />
                    <img
                        src={LeftHand}
                        alt="LeftHand"
                        className={`${Styles.left} ${isHandsUp ? Styles.handsUp : Styles.handsDown}`} />
                    <img
                        src={RightHand}
                        alt="RightHand"
                        className={`${Styles.right} ${isHandsUp ? Styles.handsUp : Styles.handsDown}`} />
                </div>
                <form className={Styles.login}>
                    <input
                        type="text"
                        onBlur={handleFaceUp}
                        onFocus={handleFaceDown}
                    />
                    <input
                        type="text"
                        onBlur={handleFaceUp}
                        onFocus={handleHandsUp}
                    />

                    <button>Sign in</button>
                </form>
            </div>
        </div>
    );
};

export default Authorization;
