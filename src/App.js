import React, { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import CreatePost from './pages/create-post/CreatePost'
import PostDetails from './pages/post-details/PostDetails'
import Profile from './pages/Profile'
import Settings from './pages/Settings'
import { Navbar } from './images/layout/navbar/Navbar'
import Rightbar from './components/Rightbar'
import Button from '@mui/material/Button'
import LoginIcon from '@mui/icons-material/Login'
import logo from './images/logo.png'
import { UAuthMoralisConnector } from '@uauth/moralis'
import { useMoralis } from 'react-moralis'
import { uauth } from './connectors'

const App = () => {
  const { isAuthenticated, logout, authenticate } = useMoralis()
  const uauthMoralisConnector = new UAuthMoralisConnector()
  const [udUser, setudUser] = useState('')
  const [wallet, setWallet] = useState('')
  const [userInfo, setUserInfo] = useState('')
  const [currentPost, setCurrentPost] = useState('')

  useEffect(() => {
    const getUdNameLocal = localStorage.getItem('udName')
    setudUser(getUdNameLocal)
  }, [udUser])

  const userLogIn = async () => {
    try {
      let user = await authenticate(uauth)
      let domainDetials = uauthMoralisConnector.uauth.user()
      const udName = (await domainDetials).sub
      const wallet = (await domainDetials).wallet_address

      setudUser(udName)
      setWallet(wallet)
      setUserInfo(user)

      if (udName) {
        localStorage.setItem('udName', udName)
      }
    } catch (error) {
      console.log(error)
    }
  }
  const userLogOut = () => {
    localStorage.removeItem('udName')
    setudUser('')
    logout()
  }

  return (
    <>
      <Navbar udUser={udUser} userLogOut={userLogOut} />
      {isAuthenticated ? (
        <div className="page">
          <div className="mainWindow">
            <Routes>
              <Route
                path="/"
                element={<Home setCurrentPost={setCurrentPost} />}
              />
              <Route path="/create" element={<CreatePost />} />
              <Route
                path="/details"
                element={
                  <PostDetails currentPost={currentPost} udUser={udUser} />
                }
              />
              <Route path="/profile" element={<Profile />} />
              <Route path="/settings" element={<Settings />} />
            </Routes>
          </div>
          <div className="rightBar">
            <Rightbar udUser={udUser} />
          </div>
        </div>
      ) : (
        <div className="loginPage">
          <img src={logo} alt="company" className="logo" />
          <Button
            onClick={userLogIn}
            variant="contained"
            color="secondary"
            endIcon={<LoginIcon />}
          >
            Login
          </Button>
        </div>
      )}
    </>
  )
}
export default App
