import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './Header'
import MainComponent from './MainContent'
import Footer from './Footer'

createRoot(document.getElementById('root')).render(<Page />)

function Page() {
    return (
        <>
            <Header />
            <MainComponent />
            <Footer />
        </>
    )
}
