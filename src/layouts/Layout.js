import Navigation from "../components/Navigation";
import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <div>
      <Navigation />
      <Outlet />
    </div>
  )
}

export default Layout