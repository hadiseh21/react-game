import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
//import Products from './components/functional/Products.jsx'
import App from './App.jsx'
//import App from './components/functional/App';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Products from './components/Products.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)
