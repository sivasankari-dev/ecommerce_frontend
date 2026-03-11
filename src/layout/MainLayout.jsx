
import NavBar from '../components/ui/NavBar'
import Footer from '../components/ui/Footer'
import { Outlet } from 'react-router-dom'
import { ToastContainer} from 'react-toastify';

const MainLayout = ({numCartitems}) => {
  return (
    <div>
        <NavBar numCartitems={numCartitems}/>
        <ToastContainer />
        <Outlet />
        <Footer />
    </div>
  )
}

export default MainLayout