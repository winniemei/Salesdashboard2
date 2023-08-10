import { useState } from 'react'
import './App.css'
import { mockTransactions } from './mockData' 
// import MockTransactions from './components/Transactions';
import * as React from 'react';
import { red } from '@mui/material/colors';
import Dashboard from './components/Dashboard';
import Sidebar from './components/Dashboard';
import Heading from './components/Heading';

function App() {


  return (
    <>
      {/* <MockTransactions /> */}
      <Dashboard />
      <Sidebar />
      <Heading />

    </>
  )
}

export default App
