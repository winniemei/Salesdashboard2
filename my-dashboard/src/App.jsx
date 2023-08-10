import { useState } from 'react'
import './App.css'
import { mockTransactions } from './mockData' 
import MockTransactions from './components/Transactions';
import * as React from 'react';
import { red } from '@mui/material/colors';
import Dashboard from './components/Dashboard';

function App() {


  return (
    <>
      <MockTransactions />
      <Dashboard />

    </>
  )
}

export default App
