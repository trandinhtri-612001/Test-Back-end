import React,{useState,useContext} from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { AuthContext } from '../../context/authContext'
import AlertMessage from './Alertmessage'
const ModalUdate = (props) => { 

 
const {updateuser} =useContext(AuthContext)

const uploadimg= async(e)=>{
  const file = e.target.files[0];
  const base64 = await convserBase64(file)
  setdata({...data,emoji:base64})
console.log( base64);

}
const convserBase64 = (file)=>{
  return new Promise((res,rej)=>{
    const fileRender=new FileReader();
    fileRender.readAsDataURL(file);
    fileRender.onload=()=>{
      res(fileRender.result);
    };
    fileRender.onerror = (err)=>{
      rej(err);
    };
  });
};
const [data, setdata] = useState({
    username: "",
    password:'',
    email:'',
    phonenumber:'',
    adress:'',
    emoji:'',
    oldpassword:''
  })
  const [alert ,setalert] = useState(null)
  const onchangeregister = (event) => {
    setdata({...data, [event.target.name]: event.target.value})
 console.log(data)
  }
  
    const { username, password,email,phonenumber,adress,emoji,oldpassword} = data;
    
     const onsybmitud=async(e)=>{
         console.log(data)
        e.preventDefault();
        try{
         const res =await updateuser(data,props.el._id)
         console.log(res)
        if(res){
        setalert({show:true, message:res.message})
        setTimeout(()=>{
setalert(null)
        },3000)

        }
        if(res.success){
           props.setshowmodal(false)
        }

        }catch{

        }


     }
       
 

    return (
        <div>
            <AlertMessage info={alert}/>
            <Modal show = {props.showmodal} onHide ={()=>props.setshowmodal(false)}>
			<Modal.Header >
            <Modal.Title>What do you want to learn?</Modal.Title>
            <Button
                variant="danger"
                onClick={()=>props.setshowmodal(false)}
            >close</Button>
			</Modal.Header>
			
				<Modal.Body>
                <Form className='my-4' onSubmit={onsybmitud}>
                 
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>username </Form.Label>
    <Form.Control type="text" name="username" 
    placeholder="Enter username" 
    onChange={onchangeregister}
    value={username}
    />
    <Form.Text className="text-muted">
     
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" 
    name="password" 
    placeholder="Password"
    onChange={onchangeregister}
    value={password}
    />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>email</Form.Label>
    <Form.Control type="email" 
    name="email" 
    placeholder="email"
    onChange={onchangeregister}
    value={email}
    />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>phonenumber</Form.Label>
    <Form.Control type="text" 
    name="phonenumber" 
    placeholder="phonenumber"
    onChange={onchangeregister}
    value={phonenumber}
    />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>adress</Form.Label>
    <Form.Control type="text" 
    name="adress" 
    placeholder="adress"
    onChange={onchangeregister}
    value={adress}
    />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>emoji</Form.Label>
    <Form.Control type="file" 
    name="emoji" 
    placeholder="emoji"
    onChange={uploadimg}
  
    />
    
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>oldpassword</Form.Label>
    <Form.Control type="text" 
    name="oldpassword" 
    placeholder="oldpassword"
    onChange={onchangeregister}
    value={oldpassword}
    />
    
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  
  
  <Button variant="primary" type="submit">
    Submit
  </Button>

</Form>
				</Modal.Body>
				<Modal.Footer>
					<Button variant='secondary'
                     onClick={()=>props.setshowmodal(false)}
                    >
						Cancel
					</Button>
					
				</Modal.Footer>
			
		</Modal>
        </div>
    )
}

export default ModalUdate
