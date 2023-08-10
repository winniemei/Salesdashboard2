import { useState } from 'react'
import './App.css'
import { mockTransactions } from './mockData' 
// import MockTransactions from './components/Transactions';
import * as React from 'react';
import { red } from '@mui/material/colors';
import Dashboard from './components/Dashboard';
import Drawer from './components/Drawer';
import SingleRowSelectionGrid from './components/Datagrid';
import ScrollPlayground from './components/Scrollbar';
// import Heading from './components/Heading';

function App() {


  return (
    <>
      {/* <MockTransactions /> */}
      <Dashboard />
      <Drawer />
      {/* <SingleRowSelectionGrid /> */}
      <ScrollPlayground />

    </>
  )
}

export default App
