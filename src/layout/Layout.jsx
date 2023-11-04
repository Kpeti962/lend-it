
import { Outlet } from 'react-router';
import Nav from '../components/Nav';

const Layout = () => {
  return (
    <div>
        <Nav />
        <Outlet />
    </div>
  )
}

export default Layout;