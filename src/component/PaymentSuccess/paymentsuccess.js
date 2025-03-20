import React from 'react'
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import { Button, Card } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { green } from '@mui/material/colors';

export default function Paymentsuccess() {
    const navigate = useNavigate();
  return (
    <Card className="min-h-screen px-5 py-10 border-5">
        <Card className="flex flex-col items-center justify-center h-[90vh]">
          <div className="box w-full lg:w-1/4 flex flex-col items-center rounded-md"></div>
<TaskAltIcon sx={{ fontSize:"5rem", color:green[500] }} />
<h1 className="py-5 text=2xl font-semibold">Order Success!</h1>
<p>Thank you for choosing our restaurant! we appricate for your order. </p>
<p className="py-2 text-center text-gray-200 text-lg">Your order is on the way</p>
<Button onClick={()=>navigate("/")} variant="contained" color="primary" className="py-2" sx={{margin:"1rem 0rem"}}>Back to Home</Button>

    </Card>
    </Card>
  )
}
