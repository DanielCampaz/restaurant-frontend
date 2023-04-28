import React from 'react'
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <header>
        <h1>Navbar de dashboar</h1>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <h1>Footer de dashboar</h1>
      </footer>
    </>
  )
}