import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import ReactDom from 'react-dom/client'
import { Provider } from 'react-redux'
import { store } from './store.js'
import { PersistGate } from 'redux-persist/integration/react'
import App from './App.jsx'

ReactDom.createRoot(document.getElementById('root')).render(
  <ReactDom.StrictMode>
    <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
    <App />
    </PersistGate>
    </Provider>
  </ReactDom.StrictMode>
)
