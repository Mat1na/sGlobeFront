import React from 'react'
import { Outlet } from "react-router-dom";
import Footer from './Footer';
import Headermodified from './Headermodified';

function Layoutmodified() {
  return (
    <>
      <Headermodified />
      <Outlet />
      <Footer />
    </>
  )
}

export default Layoutmodified;