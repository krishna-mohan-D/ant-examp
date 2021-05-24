import {useEffect,useState}  from 'react'
import { Table, Tag, Space } from 'antd';
import './App.css';
import 'antd/dist/antd.css';
import axios from 'axios';

function App() {
  const [data, setData] = useState([])
  useEffect( ()=>{
    axios.get(`http://localhost:5000/result`)
         .then(res => {
           console.log('ax',res.data)
            setData(res.data)

          })


} , [])

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: text => <a>{text}</a>,
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'postion',
      key: 'tags',
      dataIndex: 'position',
      render: tags => (
        <>
          {tags.map(tag => {
            let color = tag.length > 5 ? 'geekblue' : 'green';
            if (tag === 'loser') {
              color = 'volcano';
            }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },
    {
      title: 'Action',
      key: 'action',
      render: (text, record) => (
        <Space size="middle">
          <a>Invite {record.name}</a>
          <a>Delete</a>
        </Space>
      ),
    },
  ];
  
 
  return (
    <div className="container">
       <Table columns={columns} dataSource={data} />  
    </div>
  );
}

export default App;
