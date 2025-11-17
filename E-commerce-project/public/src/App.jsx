import './App.css'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import Header from './layout/Header.jsx'
import PageContent from './layout/PageContent.jsx'
import Footer from './layout/Footer.jsx'

function App() {
  
  return (
    <>
    <div className="flex flex-col min-h-screen">
      <Header />
      <PageContent />
      <Footer />
    </div>
    <ToastContainer/>
    </>
  )
}

export default App
