import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Counter from './components/Counter.jsx'
import NameInput from './components/NameInput.jsx'
import CounterApp from './components/CounterApp.jsx'
import BasicList from './components/BasicList.jsx'
import Dashboard from './components/Dashboard.jsx'
import StudentReportCard from './components/StudentReportCard.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Counter />
    <NameInput />
    <CounterApp /> */}
    {/* <App></App> */}
    {/* <BasicList></BasicList> */}
    {/* <Dashboard></Dashboard> // without using props
    <Dashboard status = {true}></Dashboard> // using props */}
    <StudentReportCard></StudentReportCard>
  </StrictMode>,
)
