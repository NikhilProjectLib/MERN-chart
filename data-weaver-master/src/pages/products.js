import React, { useEffect, useState } from 'react';


import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import ProductTable from '../components/shared-components/table';
import axios from 'axios';
// import Modal from '../components/shared-components/modal/modal';
// import Editform from '../components/views/Editform';
import Sidebar from '../components/sidebar';
import { Stack } from '@mui/system';
import Paper from '@mui/material/Paper';
import { TextField } from '@mui/material';
import { filterdata } from '../api/api';
import { useParams } from 'react-router';


const Products = () => {
  const [filtertabledata, setfiltertabledata] = useState([]);
  const [value, setvalue] = useState();

  const params = useParams()

  console.log('filtertabledata',filtertabledata)
  const handlefilterdata = () => {
    filterdata({value:value,type:params.type})
    .then((res)=>{
      console.log('res',res)
      setfiltertabledata((res))
      

    })

  
  }

  


  return (
    <>
      <Sidebar />
      <Paper
        sx={{
          p: 2,
          display: 'flex',
          margin: 'auto',
          justifyContent:'center',
          maxWidth: 1500,
          flexGrow: 1,
          marginTop: '10px',
          backgroundColor: (theme) =>
            theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        }}>
        <Grid container spacing={2}>
          <Grid mt={10} container sx={{ justifyContent: 'space-between' }}>
           <Grid item>
              <h1>{params.type}</h1>
            </Grid>
            <Grid item mb={5} sx={{ display: 'flex' }}>
             <Stack>
            <TextField
              size='small'
              placeholder='Enter Value'
              // sx={{ '& .MuiOutlinedInput-root': { borderRadius: 4 } }}
              onChange={(e) => {
                setvalue(e.target.value)
              }}
            />
          </Stack>
          <Stack ml={5}>
            <Button variant='contained' onClick={handlefilterdata}>
              Search Value
            </Button>
          </Stack>
        </Grid>
            <ProductTable tableData={filtertabledata} setfiltertabledata={setfiltertabledata}  />

          </Grid>
        </Grid>
      </Paper>

    </>
  )
}

export default Products;