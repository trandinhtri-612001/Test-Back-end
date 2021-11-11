import React,{useState,useContext,useEffect}from 'react'
import Table from 'react-bootstrap/Table'
import { AuthContext } from '../../context/authContext'
import Sigertable from '../View/Sigertable'
import ModalUdate from '../View/ModalUdate'
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
      <td>{el.emoji}</td>
      <td>{el.username}</td>
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
