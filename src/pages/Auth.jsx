import React, { useState } from 'react'
import Modal from '../components/Modal'
import { AnimatePresence } from 'framer-motion'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import { AuthState } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom';
import Logo from '../components/Logo';
import { motion } from 'framer-motion'

function Register({ handleRegister }) {
    return (
        <div className='flex-v gap'>
            <p className="title">Register</p>
            <p>What's your username, email and password?</p>
            <div className="flex-v gap-sm">
                <input type="text" placeholder='Username' />
                <input type="text" placeholder='Email' />
                <input type="text" placeholder='Password' />
            </div>
            <DropDown />
            <button onClick={handleRegister}>Continue</button>
            <p className="font-xsm">By proceeding, you consent to get calls, Whatsapp or SMS messages, including by automated means, from us and it affilates to the number provided.</p>
        </div>
    )
}
function Login({ handleLogin }) {
    return (
        <div className='flex-v gap'>
            <p className="title">Login</p>
            <p>What's your email and password?</p>
            <div className="flex-v gap-sm">
                <input type="text" placeholder='Email' />
                <input type="text" placeholder='Password' />
            </div>
            <DropDown />
            <button onClick={handleLogin}>Continue</button>
            <p className="font-xsm">By proceeding, you consent to get calls, Whatsapp or SMS messages, including by automated means, from us and it affilates to the number provided.</p>
        </div>
    )
}
function DropDown() {
    const title = "Choose Role"
    const data = ['Admin', 'User']
    const [showDropdown, setShowDropDown] = useState(false)
    const [choosenValue, setChoosenValue] = useState('')

    const handleShowDropDown = () => setShowDropDown(!showDropdown)
    const handleSelectValue = (item) => {
        setChoosenValue(item)
        setShowDropDown(false)
    }

    return (
        <div className='dropdown flex-v'>
            <p className='dropdown__title' onClick={handleShowDropDown}>{choosenValue === '' ? title : choosenValue}</p>
            <div className={`dropdown__list flex-v ${showDropdown ? 'show__dropdown' : 'hide__dropdown'}`}>
                {data.map((item, index) => (
                    <p className='dropdown__item' key={index} onClick={() => handleSelectValue(item)}>{item}</p>
                ))}
            </div>
        </div>
    )
}
function OtpForm({ hanldeSubmitOtp }) {
    return (
        <div className='flex-v gap'>
            <p className="title">OTP</p>
            <div className="flex-v gap-sm">
                <p>Enter the OTP sent to +91-9027644034</p>
                <OtpInput length={4} />
                <button onClick={hanldeSubmitOtp}>Continue</button>
            </div>
            <p className="link flex-e">Resend OTP</p>
        </div>
    )
}
function OtpInput({ length = 4 }) {
    const [inputs, setInputs] = useState(new Array(length).fill(" "))
    return (
        <div className='flex-h gap-sm'>
            {inputs && inputs.map((item, index) => (
                <input key={index} className='otp__input' />
            ))}
        </div>
    )
}
function AuthModal({ icon, onClose, children }) {
    return (
        <div className="authmodal">
            <motion.div
                className="authmodal__container"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.5 }}
                transition={{ duration: 0.2 }}
            >
                <div className="fit-content center icon" onClick={onClose}>
                    {icon ? icon : <CloseIcon />}
                </div>
                {children}
            </motion.div>
        </div>
    )
}

function Auth() {
    const authComponents = [
        { title: 'login', Component: () => <Login handleLogin={handleLogin} /> },
        { title: 'register', Component: () => <Register handleRegister={handleRegister} /> },
    ]
    const [selected, setSelected] = useState(0)
    const SelectedComponent = authComponents[selected].Component

    const [showOtpModal, setShowOtpModal] = useState(false)
    const onCloseOtpModal = () => setShowOtpModal(false)

    const { setIsAuthenticated } = AuthState()
    const navigate = useNavigate()

    function handleRegister() {
        setShowOtpModal(true)
    }
    function handleLogin() {
        setShowOtpModal(true)
    }
    function hanldeSubmitOtp() {
        setIsAuthenticated(true)
        navigate('/home')
    }

    return (
        <div className='auth center-both'>
            <div className='auth__container container padding flex-v gap-md'>

                <Logo />

                <div className="auth__container">
                    <div className="auth__choose border width-screen flex-h">
                        <div className="hover border-right padding width-screen cursor" onClick={() => setSelected(1)}>Register</div>
                        <div className="hover padding width-screen cursor" onClick={() => setSelected(0)}>Login</div>
                    </div>
                </div>

                <div className="auth__form">
                    <SelectedComponent />
                    <AnimatePresence>
                        {showOtpModal && <AuthModal icon={<KeyboardArrowLeftIcon />} onClose={onCloseOtpModal}><OtpForm hanldeSubmitOtp={hanldeSubmitOtp} /></AuthModal>}
                    </AnimatePresence>
                </div>

            </div>
        </div>
    )
}

export default Auth