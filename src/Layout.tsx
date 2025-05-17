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
          <img id="bg_logo" src="/img/bg_logo.svg" alt="bg_logo"/>
          <img id="bg" src="/img/bg_blank.webp" alt="BG"/>
      </>
  )
}

export default Layout;
