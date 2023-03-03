import React from 'react'
import { Box, useTheme } from '@mui/material'
import Header from 'components/Header'
import { DataGrid } from '@mui/x-data-grid'
import { useGetCustomerQuery } from 'state/api'

const Customer = () => {

    const theme = useTheme();
    const { data, isLoading } = useGetCustomerQuery();
    console.log("🚀 ~ file: index.jsx:11 ~ Customer ~ data", data)

    const columns = [
        {
            field: "_id",
            headerName: "ID",
            flex: 1
        },
        {
            field: "name",
            headerName: "Name",
            flex: 0.5
        },
        {
            field: "email",
            headerName: "Email",
            flex: 1
        },
        {
            field: "phoneNumber",
            headerName: "Phone Number",
            flex: 0.5,
            renderCell: (params) => {
                return params.value.replace(/^(\d{3})(\d{3})(\d{4})/, "($1)$2-$3")
            }
        },
        {
            field: "country",
            headerName: "Country",
            flex: 0.4
        },
        {
            field: "occupation",
            headerName: "Occupation",
            flex: 1
        },
        {
            field: "role",
            headerName: "Role",
            flex: 0.5
        },
    ]

  return (
    <Box m='1.5rem 2.5rem'>
        <Header title="CUSTOMERS" subtitle="List Of Customers"/>
        <Box
            mt="40px"
            height="70vh"
            sx={{
                "& .MuiDataGrid-root" : {
                    border: "none"
                },
                "& .MuiDataGrid-cell" : {
                    borderBottom: "none"
                },
                "& .MuiDataGrid-columnHeaders" : {
                    backgroundColor: theme.palette.background.alt,
                    color: theme.palette.secondary[100],
                    borderBottom: "none"
                },
                "& .MuiDataGrid-footerContainer" : {
                    backgroundColor: theme.palette.background.alt,
                    color: theme.palette.secondary[100],
                    borderBottom: "none"
                },
                "& .MuiDataGrid-virtualScroller" : {
                    backgroundColor: theme.palette.primary.light,
                },
                "& .MuiDataGrid-toolbarConatiner .MuiButton-text" : {
                    color : `${theme.palette.secondary[400]} !important`
                }
            }}
        >
            <DataGrid
                loading={isLoading || !data}
                getRowId={(row) => row._id}
                rows={data || []}
                columns={columns}
            />
        </Box>
    </Box>
  )
}

export default Customer