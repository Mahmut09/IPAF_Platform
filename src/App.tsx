// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Main from './components/main/Main'
import Tournaments from './components/tournaments/Tournaments'
import Home from './components/home/Home'
import UserProfile from './components/userProfile/UserProfile'
import store from './store/store'
import { Provider } from 'react-redux'

function App() {
    return (
        <Provider store={store}>
            <Router>
                <Routes>
                    <Route path='/' element={<Main />}>
                        <Route index path='/' element={<Home />} />
                        <Route path='/profile' element={<UserProfile />} />
                        <Route path='/tournaments' element={<Tournaments />} />
                    </Route>
                </Routes>
            </Router>
        </Provider>
    )
}

export default App
