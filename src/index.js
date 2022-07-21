import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import { BrowserRouter as Router, Route } from 'react-router-dom'
import { AuthProviderWrapper } from './contexts/auth.context'


const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
    <Router>
        <AuthProviderWrapper>
        <App />
        </AuthProviderWrapper>
    </Router>
)