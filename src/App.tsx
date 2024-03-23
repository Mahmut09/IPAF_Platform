// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import store from './store/store'
import { Provider } from 'react-redux'

import Main from './components/main/Main'
import Tournaments from './components/tournaments/Tournaments'
import Home from './components/home/Home'
import UserProfile from './components/userProfile/UserProfile'
import CreateTournament from './components/createTournament/CreateTournament'
import Tournament from './components/tournament/Tournament'


function App() {
    return (
        <Provider store={store}>
            <Router>
                <Routes>
                    <Route path='/' element={<Main />}>
                        <Route index path='/' element={<Home />} />
                        <Route path='/profile' element={<UserProfile />} />
                        <Route path='/tournaments' element={<Tournaments />} />
                        <Route path="/tournaments/:tournamentName" element={<Tournament />} />
                        <Route path='/createTournament' element={<CreateTournament />} />
                        
                    </Route>
                </Routes>
            </Router>
        </Provider>
    )
}

export default App
