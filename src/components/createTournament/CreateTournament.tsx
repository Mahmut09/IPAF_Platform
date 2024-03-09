import { FC } from 'react'
import Styles from './CreateTournament.module.css'
import CreateTournamentsRules from './createTournamentsRules/CreateTournamentsRules'
import CreateTournamentForm from './createTournamentForm/CreateTournamentForm'
const CreateTournament: FC = () => {
    return (
        <div className={Styles.container}>
            <CreateTournamentsRules />
            <div className={Styles.form}>
                <CreateTournamentForm />
            </div>
        </div>
    )
}

export default CreateTournament