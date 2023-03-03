import React, { useState } from 'react'
import { Box, useMediaQuery } from '@mui/material'
import { useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom'
import Navbar from 'components/Navbar'
import Sidebar from 'components/Sidebar'
import { useGetUserQuery } from 'state/api'

const Layout = () => {

  const isNonMobile = useMediaQuery("(min-width: 600px)")
  const [isSideBarOpen, setIsSideBarOpen] = useState(true)
  const userId = useSelector( (state) => state.global.userId )
  const { data } = useGetUserQuery(userId)
  console.log("🚀 ~ file: index.jsx:15 ~ Layout ~ data", data)

  return (
   <Box display={isNonMobile ? "flex" : "block"} width={isNonMobile ? "100%" : "120%"} height="100%">
    <Sidebar
      user={data || {}}
      isNonMobile={isNonMobile}
      drawerWidth="250px"
      isSideBarOpen={isSideBarOpen}
      setIsSideBarOpen={setIsSideBarOpen}
    />
    <Box flexGrow={1}>
      <Navbar
        user={data || {}}
        isSideBarOpen={isSideBarOpen}
        setIsSideBarOpen={setIsSideBarOpen}
      />
      <Outlet />
    </Box>
  </Box>
  )
}

export default Layout;