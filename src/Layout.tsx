import './App.css'
import Navbar from "./components/Navbar.tsx";
import { Suspense } from 'react'
import { Outlet } from 'react-router-dom'

function Layout() {

  return (
      <>
          <Navbar />
          <div id="bodyDiv">
              <Suspense>
                  <Outlet />
              </Suspense>
          </div>
      </>
  )
}

export default Layout;
