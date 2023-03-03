import React from 'react'
import { Box } from '@mui/material'
import Header from 'components/Header'
import BreakdownChart from 'components/BreakdownChart';

const Breakdown = () => {
  return (
    <Box m="1.5rem 2.5rem">
        <Header title="BREAKDOWN" subtitle="Breakdown Of Sales By Category"/>
        <Box mt="50px" height="65vh">
            <BreakdownChart/>
        </Box>
    </Box>
  )
}

export default Breakdown