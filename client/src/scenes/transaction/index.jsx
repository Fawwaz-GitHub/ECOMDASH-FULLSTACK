import React, { useState } from 'react'
import { DataGrid } from '@mui/x-data-grid';
import { useGetTransactionsQuery } from 'state/api';
import Header from 'components/Header';
import { Box, useTheme } from '@mui/material';
import DataGridCustomToolbar from 'components/DataGridCustomToolbar';

const Transaction = () => {

    const theme = useTheme();

    // values to be send to backend
    const [ page, setPage ] = useState(0)
    const [ pageSize, setPageSize ] = useState(20)
    const [ sort, setSort ] = useState({})
    const [ search, setSearch ] = useState("")
    const [ searchInput, setSearchInput ] = useState("")

    const { data, isLoading } = useGetTransactionsQuery({
        page,
        pageSize,
        sort: JSON.stringify(sort),
        search,
    })
    console.log("🚀 ~ file: index.jsx:23 ~ Transaction ~ data", data)
    
    const columns = [
        {
            field: "_id",
            headerName: "ID",
            flex: 1
        },
        {
            field: "userId",
            headerName: "User ID",
            flex: 1
        },
        {
            field: "createdAt",
            headerName: "CreatedAt",
            flex: 1,
            renderCell: (params) => params.value.substring(0,10)
        },
        {
            field: "products",
            headerName: "# of Products",
            flex: 0.5,
            sortable: false,
            renderCell: (params) => params.value.length
        },
        {
            field: "cost",
            headerName: "Cost",
            flex: 1,
            renderCell: (params) => `$${Number(params.value).toFixed(2)}`
        },
    ]
  return (
    <Box m="1.5rem 2.5rem">
        <Header title="TRANSACTIONS" subtitle="Entire List Of Transactions"/>
        <Box 
            height="75vh"
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
                getRowId={(row)=>row._id}
                rows={(data && data.transactions) || {}}
                columns={columns}
                rowsPerPageOptions={[20,50,100]}
                rowCount={500}
                pagination
                page={page}
                pageSize={pageSize}
                paginationMode="server"
                sortingMode="server"
                onPageChange={(newPage)=>setPage(newPage)}
                onPageSizeChange={(newPageSize)=>setPageSize(newPageSize)}
                onSortModelChange={(newSortModel)=>setSort(...newSortModel)}
                components={{ Toolbar: DataGridCustomToolbar }}
                componentsProps={{ toolbar: {searchInput, setSearchInput, setSearch}}}
            />
        </Box>
    </Box>
  )
}

export default Transaction;