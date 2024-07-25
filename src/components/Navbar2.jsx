import React, { useState } from "react"

import { TypeAnimation } from "react-type-animation"
import { CiLogout } from "react-icons/ci";
import Logo from "../Pages/img/logo.png"
import { useNavigate } from 'react-router-dom'
import { useAuth } from "../contexts/authContext";
import { doSignOut } from "../firebase/auth";
import { Link } from "react-router-dom";
import { CiLogin } from "react-icons/ci";
import { FaInstagram, FaTwitter } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { CiLinkedin } from "react-icons/ci";


const Navbar2 = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false)

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen)
	}
	const navigate = useNavigate()
	const { userLoggedIn } = useAuth()

	const [user,setUser] = useState(false)
	const handleUser =() => {
		setUser(!user)
	}

	return (
		<>
			{/* Mobile */}
			<div className="flex justify-between relative top-3 lg:hidden">
				<div className="w-10 h-10 rounded-full flex justify-center items-center" id="UserButton">
					<img src="/NavIcon.png" alt="" className="w-6 h-6" onClick={toggleMenu} />
				</div>
				<div className={`text-center text-white  ${isMenuOpen ? "hidden" : ""}`}>
					<h1 className="font-bold text-xs mt-4">
						<TypeAnimation
							sequence={[
								// Same substring at the start will only be typed out once, initially
								'Hi,Everyone!',
								1000, // wait 1s before replacing "Mice" with "Hamsters"
								'Welcome',
								1000
							]}
							wrapper="span"
							speed={20}
							style={{ fontSize: '2em', display: 'inline-block' }}
							repeat={Infinity}
						/>
					</h1>
				</div>

				<div onClick={handleUser} className="block text-black">
					{user ? <div className={`w-10 h-10 flex justify-center items-center  `}
					id="UserButton">
					<img src="/user.svg" alt="" className="" /></div> :  <div className={`w-10 h-10 flex justify-center items-center  `}
					id="UserButton">
					<img src="/user.svg" alt="" className="" /></div>}
				</div>

				<div className={user ? ' fixed top-16 right-2 duration-500 flex items-center bg-white bg-blu text-white px-2 py-1 rounded-md backdrop-blur-2xl  ' : ' flex items-center fixed rounded-md bg-white top-16 right-[-100%] duration-500 backdrop-blur-2xl'}>
							<Link to='/login'><button className="text-black font-semibold">Login</button></Link>
							<CiLogin className="text-black font-semibold"/>
				</div>

			

				{isMenuOpen && (
					<div className="fixed inset-0 bg-black opacity-50 z-auto" onClick={toggleMenu}></div>
				)}

				<div
					className={`fixed top-0 left-0 h-full w-64  shadow-lg transform transition-transform duration-300 ease-in-out ${isMenuOpen ? "translate-x-0" : "-translate-x-full"
						}`}
					id="IsiNavbar">
					<ul className="mt-8">
						<div className="flex items-center justify-between ">
							<h2 className="font-bold  ">X RPL 4</h2>

						</div>
						<div className="border-b-2 " id="user">

						</div>

						<li className="mb-2 item-enter" id="navbar1">
							<a href="#" className="text-white opacity-80 text-lg font-bold">
								Home
							</a>
						</li>
						<li className="mb-2" id="navbar1">
							<a href="#Gallery" className="text-white opacity-80 text-lg font-bold">
								Gallery
							</a>
						</li>
						<li id="navbar1">
							<a href="#Tabs" className="text-white opacity-80 text-lg font-bold">
								Structure & Schedule
							</a>
						</li>
					</ul>
					<div  className="absolute bottom-0 w-[90%] mb-4 border-t-2  ">
						<div className="flex mt-2 gap-2">
						<a href=""><FaInstagram className="w-6 h-6 hover:text-blue-800 duration-500"/></a>
						<a href=""><CiLinkedin className="w-6 h-6 hover:text-blue-400 duration-500"/></a>
						<a href=""><FaXTwitter className="w-6 h-6 hover:text-black duration-500"/></a>
						</div>
						</div>
				</div>

			</div>


			{/* Dekstop */}
			<div className="flex  justify-between relative top-4 hidden lg:flex h-24 item-center">
				<div>
					<img src={Logo} className="w-14 h-14 rounded-full color" alt="" />
				</div>
				<ul className="mt-2 flex gap-6">
					<li className="mt-2 item-center" id="navbar">
						<a href="#" className="text-white opacity-80 text-[1rem] font-semibold">
							Home
						</a>
					</li>
					<li className="mt-2" id="navbar">
						<a href="#Gallery" className="text-white opacity-80 text-[1rem] font-semibold">
							Gallery
						</a>
					</li>
					<li className="mt-2" id="navbar">
						<a href="#Tabs" className="text-white opacity-80 text-[1rem] font-semibold">
							Structure & Schedule
						</a>
					</li>
					<div onClick={handleUser} className="block text-black">
					{user ? <div className={`w-10 h-10 flex justify-center items-center  `}
					id="UserButton">
					<img src="/user.svg" alt="" className="" /></div> :  <div className={`w-10 h-10 flex justify-center items-center  `}
					id="UserButton">
					<img src="/user.svg" alt="" className="" /></div>}
				</div>

				<Link to="/login"><div className={user ? ' fixed top-[80px] right-[50px] flex items-center duration-500 bg-white bg-blu text-white px-2 py-1 rounded-md backdrop-blur-2xl  ' : ' flex items-center fixed rounded-md bg-white top-16 right-[-100%] duration-500 backdrop-blur-2xl'}>
							<button className="text-black font-semibold">Login</button>
							<CiLogin className="text-black font-semibold"/>
				</div>
				</Link>
				</ul>
			</div>
		</>
	)
}

export default Navbar2
