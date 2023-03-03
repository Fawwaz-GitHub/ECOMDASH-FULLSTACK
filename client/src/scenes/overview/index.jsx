import React, { useState } from 'react'
import { FormControl, MenuItem, InputLabel, Box, Select } from '@mui/material'
import Header from 'components/Header'
import OverviewChart from 'components/overviewChart'

const Overview = () => {
  const [ view, setView ] = useState("units")

  return (
    <Box m="1.5rem 2.5rem">
      <Header title="OVERVIEW" subtitle="Overview of general revenue & profits"/>
      <Box height="65vh">
        <FormControl sx={{ mt: "1rem"}}>
          <InputLabel>View</InputLabel>
          <Select value={view} label="View" onChange={(e)=>{ setView(e.target.value) }}>
            <MenuItem value="units">Units</MenuItem>
            <MenuItem value="sales">Sales</MenuItem>
          </Select>
        </FormControl>
        <OverviewChart view={view}/>
      </Box>
    </Box>
  )
}

export default Overview