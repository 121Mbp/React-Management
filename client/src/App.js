import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import Customer from './components/Customer';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('/api/customers')
    .then(res => res.json())
    .then(
      (result) => {
        setData(result);
        console.log(result);
      },
      (error) => {
        
      }
    )
  }, []);
  
  return (
    <div>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>번호</TableCell>
            <TableCell>이미지</TableCell>
            <TableCell>이름</TableCell>
            <TableCell>생년월일</TableCell>
            <TableCell>성별</TableCell>
            <TableCell>직업</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
            data.map(item => {
              return (
                <Customer
                  key={item.id}
                  id={item.id}
                  image={item.image}
                  name={item.name}
                  birthday={item.birthday}
                  gender={item.gender}
                  job={item.job}
                />
              )
            })
          }
        </TableBody>
      </Table>
    </div>
  );
}

export default App;
