import React,{useState,useContext,useEffect}from 'react'
import Table from 'react-bootstrap/Table'
import { AuthContext } from '../../context/authContext'
import Sigertable from '../View/Sigertable'
import ModalUdate from '../View/ModalUdate'
import Image from 'react-bootstrap/Image'
import './Home.css'
const Home = () => {
    const {authState:{user,alluser}, getalluser}= useContext(AuthContext)
  console.log(alluser);
    useEffect(()=>{
        getalluser();
    },[])
    
    const [datauser, setdatauser] = useState(alluser)
  
    return (
        <div>
           
            <Table striped bordered hover>
  <thead>
    <tr>
      <th>#</th>
      <th>emoji</th>
      <th>username</th>
      <th>phonenumber</th>
      <th>email</th>
      <th>adress</th>
      <th>createdat</th>
      <th>control</th>
    </tr>
    
  </thead>
  <tbody>
      {
          alluser.map((el)=>{
              return(
                 <tr key={el._id}>
      <td>1</td>
      <td>
      <Image src={el.emoji} roundedCircle className='img' />
      </td>
      <td>{el.username}</td>
      <td>{el.email}</td>
      <td>{el.phonenumber}</td>
      <td>{el.adress}</td>
      <td>{el.createdAt}</td>
      <td><Sigertable el={el}  /></td>
    </tr> 
              )
          })
      }
    
    
    
  </tbody>
</Table>
        </div>
    )
}

export default Home
