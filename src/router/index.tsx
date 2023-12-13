import {Route, Routes, Navigate } from 'react-router-dom'
import SignIn from '../pages/auth/signin'
import ResetPassword from '../pages/auth/reset-password'
import NewPassword from '../pages/auth/new-password'
import OverView from '../pages/overview'

const Router = () => {
    return (
        <Routes>
            <Route path='/' element={<Navigate to={'/overview'} />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/reset-password" element={<ResetPassword />} />
            <Route path="/new-password" element={<NewPassword />} />
            <Route path="/overview" element={<OverView />} />
        </Routes>
    )
}

export default Router