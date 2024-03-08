import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

//Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
