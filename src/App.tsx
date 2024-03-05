// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Main from './components/main/Main'
import Tournaments from './components/tournaments/Tournaments'
import Home from './components/home/Home'

function App() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Main />}> 
                    <Route index path='/' element={<Home />} />
                    <Route path='/tournaments' element={<Tournaments />} />
                </Route>
            </Routes>
        </Router>
    )
}

export default App
