import { FC } from 'react'
import Styles from '../UserProfile.module.css'

interface ProfileInfoProps {
    title: string,
    value: string,
    type: string,
}

const ProfileInfo: FC<ProfileInfoProps> = ({ title, value, type }) => {
    return (
        <div className={`${Styles.block} ${Styles.info}`}>
            <h4>{title}</h4>
            <div>
                <span>{value}</span> {type}
            </div>
        </div>
    )
}

export default ProfileInfo