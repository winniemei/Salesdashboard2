import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useDemoData } from '@mui/x-data-grid-generator';
import { mockTransactions } from '../mockData';

export default function SingleRowSelectionGrid() {


//   const { data } = useDemoData({
//     dataSet: 'Commodity',
//     rowLength: 10,
//     maxColumns: 6,
//   });

  return (
    <div style={{ height: 400, width: '100%' }}>
      {/* <DataGrid {...data} /> */}
      {<DataGrid{...mockTransactions.map((ele) => {
                    return (
                    <ul>
                    <li>{ele.user}</li>
                    <li>{ele.txId},</li> 
                    <li>{ele.date}</li> 
                    <li>{ele.cost}</li>
                    </ul>)
                })}/>}
    </div>
  );
}