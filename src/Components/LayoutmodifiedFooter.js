import React from 'react'
import { Outlet } from "react-router-dom";
import Headermodified from './Headermodified';

function LayoutmodifiedFooter() {
  return (
    <>
    <Headermodified />
    <Outlet />
   
  </>
  )
}

export default LayoutmodifiedFooter