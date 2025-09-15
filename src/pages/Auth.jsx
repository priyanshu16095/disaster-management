import React, { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import { AuthState } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom';
import Logo from '../components/Logo';
import { motion } from 'framer-motion'
import { UserState } from '../context/UserContext';

function Register({ handleRegister }) {
    const [data, setData] = useState([
        { placeholder: "First Name", value: "" },
        { placeholder: "Last Name", value: "" },
        { placeholder: "Email", value: "" },
        { placeholder: "Mobile", value: "" },
        { placeholder: "Password", value: "" }
    ])

    const handleChange = (index, newValue) => {
        setData((prev) =>
            prev.map((item, i) =>
                i === index ? { ...item, value: newValue } : item
            )
        );
    };

    const { updateUserData } = UserState();

    const handleSubmit = () => {
        updateUserData("firstName", data[0].value)
        updateUserData("lastName", data[1].value)
        updateUserData("email", data[2].value)
        updateUserData("mobile", data[3].value)
        updateUserData("password", data[4].value)

        handleRegister()
    }

    return (
        <div className='flex-v gap'>
            <p className="title">Register</p>
            <p>What's your username, email and password?</p>
            <div className="flex-v gap-sm">
                {data &&
                    data.map((item, index) => (
                        <input type='text' key={index} placeholder={item.placeholder} value={item.value} onChange={(e) => handleChange(index, e.target.value)} />
                    ))}
            </div>
            <div className="flex-h gap">
                <DropDown title={"Choose Role"} data={["Admin", "User"]} />
                <DropDown title={"Allow Location"} data={["Yes", "No"]} />
            </div>
            <button onClick={handleSubmit}>Continue</button>
            <p className="font-xsm">By proceeding, you consent to get calls, Whatsapp or SMS messages, including by automated means, from us and it affilates to the number provided.</p>
        </div>
    )
}

function Login({ handleLogin }) {
    const [data, setData] = useState([
        { placeholder: "Email", value: "" },
        { placeholder: "Mobile", value: "" },
        { placeholder: "Password", value: "" }
    ])

    const { updateUserData } = UserState();

    const handleSubmit = () => {
        updateUserData("email", data[0].value)
        updateUserData("mobile", data[1].value)
        updateUserData("password", data[2].value)

        handleLogin()
    }

    const handleChange = (index, newValue) => {
        setData((prev) =>
            prev.map((item, i) =>
                i === index ? { ...item, value: newValue } : item
            )
        );
    };

    return (
        <div className='flex-v gap'>
            <p className="title">Login</p>
            <p>What's your email and password?</p>
            <div className="flex-v gap-sm">
                {data &&
                    data.map((item, index) => (
                        <input type='text' key={index} placeholder={item.placeholder} value={item.value} onChange={(e) => handleChange(index, e.target.value)} />
                    ))}
            </div>
            <div className="flex-h gap">
                <DropDown title={"Choose Role"} data={["Admin", "User"]} />
                <DropDown title={"Allow Location"} data={["Yes", "No"]} />
            </div>
            <button onClick={handleSubmit}>Continue</button>
            <p className="font-xsm">By proceeding, you consent to get calls, Whatsapp or SMS messages, including by automated means, from us and it affilates to the number provided.</p>
        </div>
    )
}
function DropDown({ title, data }) {
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
                {data ? data.map((item, index) => (
                    <p className='dropdown__item' key={index} onClick={() => handleSelectValue(item)}>{item}</p>
                )) : <p>Dropdown</p>}
            </div>
        </div>
    )
}
function OtpForm({ hanldeSubmitOtp }) {
    const { userData } = UserState()

    return (
        <div className='flex-v gap'>
            <p className="title">OTP</p>
            <div className="flex-v gap-sm">
                <p>Enter the OTP sent to +91-{userData.mobile}</p>
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
                        {/* style={{ backgroundColor: selected === 0 ? "lightgray" : "white"}} */}
                        <div className="hover border-right padding width-screen cursor overflow-hidden" onClick={() => setSelected(1)} style={{ fontWeight: selected === 1 && "bold"}}>Register</div>
                        <div className="hover padding width-screen cursor" onClick={() => setSelected(0)} style={{ fontWeight: selected === 0 && "bold"}}>Login</div>
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