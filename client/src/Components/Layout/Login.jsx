import React,{useState,useContext,useEffect} from 'react'
import { Link , useHistory} from 'react-router-dom'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import {AuthContext} from '../../context/authContext'
import AlertMessage from '../../Components/View/Alertmessage'
import './Login.css'
const Login = () => {

  
    //context
    const { loginUser} = useContext(AuthContext);
      const history = useHistory();
      
    const [loginFrom, setloginFrom] = useState({
      username: '',
      password:''
    })
    const [alert ,setalert] = useState(null)
    const onchangeloginfrom = (event) => {
      setloginFrom({...loginFrom, [event.target.name]: event.target.value})
      //console.log(loginFrom)
    }
      const { username, password } = loginFrom;
      
    // function login user
    const loginData = async(e) => {
      e.preventDefault()
      console.log(loginFrom);
          try {
      
              const userdata = await loginUser(loginFrom)
             
              if (userdata.success) {
          setalert({ show:true, message:`${ userdata.message} ,please wait 1 second`  })
          setTimeout(() => {
            setalert({ show:false,message:"zero"})
            history.push('/home')
            
          },3000)
                
          
              } else {
                  setalert({ show:true, message: userdata.message })
                  setTimeout(() => {
                      setalert(null)
                  }, 3000)
              }
          } catch (error) {
              console.log(error)
              setalert({ show:true, message: "failure. intnal server error" })
              setTimeout(() => {
                  setalert(null)
              }, 3000)
              return error.messge
            }
      }
  
    return (
        <div className="wp-login">
            <Row xl={3}>
                <Col xs={3}></Col>
                <Col xs={5} className="mt-5 login_form"> 
                <h2>login</h2>
                <Form className='my-4' onSubmit = {loginData}>
                  <AlertMessage info={alert}/>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>username </Form.Label>
    <Form.Control type="text" name="username" 
    placeholder="Enter username" 
    onChange={onchangeloginfrom}
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
    onChange={onchangeloginfrom}
    value={password}
    />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>

</Form>
<p>register in here</p>
<Button variant="primary"
to='/register'
as={Link}
 >
    register
  </Button>
                </Col>
                <Col xs={2}></Col>
            </Row>
        </div>
    )
}

export default Login
