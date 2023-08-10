import { useState } from 'react'
import './App.css'
import { mockTransactions } from './mockData' 
// import MockTransactions from './components/Transactions';
import * as React from 'react';
import { red } from '@mui/material/colors';
import Dashboard from './components/Dashboard';
import Drawer from './components/Drawer';
// import Heading from './components/Heading';

function App() {


  return (
    <>
      {/* <MockTransactions /> */}
      <Dashboard />
      <Drawer />

    </>
  )
}

export default App
