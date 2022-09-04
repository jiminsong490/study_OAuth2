import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import MainPage from './page/MainPage/MainPage'
import LoginPage from './page/LoginPage/LoginPage'
import RedirectPage from './page/RedirectPage/RedirectPage'
function App() {
    return (
        <>
            <Router>
                <Routes>
                    <Route path='/' element={<MainPage />}></Route>
                    <Route path='/login' element={<LoginPage />}></Route>
                    <Route
                        path='/google/callback'
                        element={<RedirectPage />}
                    ></Route>
                </Routes>
            </Router>
        </>
    )
}

export default App
