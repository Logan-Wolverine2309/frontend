import { CssBaseline, ThemeProvider } from '@mui/material';
import './App.css';
import { darkTheme } from './component/Theme/DarkTheme';
import Routers from './component/Routers/Routers';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from './component/State/Authentication/Action';
import { findCart } from './component/State/Cart/Action';
import { getRestaurantById } from './component/State/Restaurant/Action';
import { join } from "path-browserify";

import process from "process";
window.process = process;



function App() {
  const dispatch=useDispatch()
  const jwt=localStorage.getItem("jwt")
  const {auth}=useSelector(store=>store)

  useEffect(()=>{
    dispatch(getUser(auth.jwt || jwt));
    dispatch(findCart(jwt));
  },[auth.jwt]);

  useDispatch(() => {
    dispatch(getRestaurantById(auth.jwt || jwt));

  }, [auth.user])

  return (
  <ThemeProvider theme={darkTheme}>
    <CssBaseline/>
    
     <Routers/>

</ThemeProvider>
  );
}

export default App;