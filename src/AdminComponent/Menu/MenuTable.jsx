import { Box, Card, CardHeader, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React from 'react'
import CreateIcon from '@mui/icons-material/Create';
import { Delete } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
const orders=[1,1];

export default function MenuTable() {
  const navigate = useNavigate()
  return (
    <Box>
      <Card className='mt-1'>
        <CardHeader  action={
          <IconButton onClick={("./admin/restaurants/add-menu")} aria-label="settings">
            <CreateIcon />
          </IconButton>
        } title={"Menu"} sx={{pt:5,alignItems:"center"}} />
         <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="left"> Image </TableCell>
            <TableCell align="right"> Title </TableCell>
            <TableCell align="right"> Ingredients </TableCell>
            <TableCell align="right"> Price </TableCell>
            <TableCell align="right"> Avaibility </TableCell>
            <TableCell align="right"> Delete </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {orders?.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&: td, &: th': { border: 8 } }}
            >
              <TableCell component="th" scope="row">
                {1}
              </TableCell>
              <TableCell align="right">{"image"}</TableCell>
              <TableCell align="right">{"Shruti@gmail.com"}</TableCell>
              <TableCell align="right">{"price"}</TableCell>
              <TableCell align="right">{"Biriyani"}</TableCell>
              <TableCell align="right"><IconButton>
                <Delete />
                </IconButton></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
      </Card>
    </Box>
  )
}
