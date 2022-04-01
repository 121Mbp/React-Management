import './App.css';
import Customer from './components/Customer';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';

const customers = [
  {
    id: 1,
    image: 'https://placeimg.com/64/64/1',
    name: '홍길동',
    birthday: '1986.02.18',
    gender: '남자',
    job: '대학생'
  },
  {
    id: 2,
    image: 'https://placeimg.com/64/64/2',
    name: '마우개',
    birthday: '1988.11.20',
    gender: '남자',
    job: '프로그래머'
  },
  {
    id: 3,
    image: 'https://placeimg.com/64/64/3',
    name: '강백호',
    birthday: '1990.04.04',
    gender: '남자',
    job: '디자이너'
  }
]

function App() {
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
            customers.map(item => {
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
