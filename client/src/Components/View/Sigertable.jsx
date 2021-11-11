import React ,{useContext,useState} from 'react'
import Button from 'react-bootstrap/Button'
import { AuthContext } from '../../context/authContext'
import ModalUdate from './ModalUdate'
import AlertMessage from './Alertmessage'
const Sigertable = ({el}) => {
    const {updateuser,findone,deleteuser} =useContext(AuthContext)

    const [alert ,setalert] = useState(null)
    const [showmodal,setshowmodal]=useState(false)
    const ondelete=async()=>{
        try {
            const res=await deleteuser(el._id)
            console.log(res);
            if(res){
                setalert({show:true, message:res.message})
                setTimeout(()=>{
        setalert(null)
                },3000)
        
                }
               
        } catch (error) {
            
        }

    }
    return (
        <div>
            <AlertMessage info={alert}/>
             <ModalUdate el={el} showmodal={showmodal} setshowmodal={setshowmodal}/>
    <Button variant="primary"
    onClick={()=>{ 
       
        setshowmodal(true)}}

    >update</Button>{' '}
  <Button variant="secondary"
onClick={ondelete}
  >delate</Button>{' '}
        </div>
    )
}

export default Sigertable
