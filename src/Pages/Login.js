import React, { useContext } from 'react'
import { useState } from 'react'
import { Button, Col, FloatingLabel, Form, Row } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
// import { login } from '../Services/allApi'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify'
import Navbars from '../Components/Header/Navbars'
import { logStudent } from '../Components/Contexts/ContestProviders'



function Login() {

    const navigate = useNavigate()

    const {logStu,setLogstu} = useContext(logStudent)


    const [phone, setPhone] = useState("")
    const [pswd, setPswd] = useState("")

    const [error, setError] = useState(false);


    const handleSubmit = async (e) => {
        e.preventDefault()

        if (phone.length == 0) {
            setError(true)
        }
        // console.log("Form submited");

        if (phone.length !== 10 && phone.length > 0 ) {
            toast.error('Phone number should be 10 digits ')
        }

        try {
            const response = await axios.post('http://localhost:4000/user/login',{
                phone,
                pswd
            });
            if(response.status===200){
                toast.success('Success')
                setPhone('')
                setPswd('')
                setError(false)
                setLogstu(response.data)

                setTimeout(()=>{
                navigate('/home')
                },2000)
                
            }
            else{
                setError(true)
                toast.error('Invalid username or password. Please try again.');   
                     }
            
        } catch (error) {
            setError(true)
            toast.error('Invalid username or password. Please try again.');   
        }
    }



  return (
//     background-co
// background-color: #FFDEE9;
// background-image: ;



    <>
    <Navbars/>
            <Row style={{backgroundImage:'linear-gradient(0deg, #FFDEE9 0%, #B5FFFC 100%)', height:'88vh'}}>
                <Col></Col>
                <Col >
                    <div style={{backgroundImage:'linear-gradient( 174.2deg,  rgba(255,244,228,1) 7.1%, rgba(240,246,238,1) 67.4% )'}} className='container mt-4 border border-dark ps-5 pe-5'>
                        <h1 className='pt-2'>Moonhive Login</h1>

                        <hr />

                        <Form >
                            
        
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label><b>Phone</b></Form.Label>
                                <Form.Control type="number" placeholder="Enter your number"
                                    required onChange={e => setPhone(e.target.value)} />
                                <div style={{ height: '5px' }}>
                                    {error && phone.length <= 0 ?
                                        <p style={{ color: 'red' }}>Phone Number is Required</p> : ''
                                    }
                                </div>
                            </Form.Group>
        
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput5">
                                <Form.Label><b>Password</b></Form.Label>
                                <Form.Control type="password" placeholder="Enter your number"
                                    required onChange={e => setPswd(e.target.value)} />
                                <div style={{ height: '5px' }}>
                                    {error && pswd.length <= 0 ?
                                        <p style={{ color: 'red' }}>Password is Required</p> : ''
                                    }
                                </div>
                            </Form.Group>
        
                            
        
                            
                            <Button type="submit" onClick={handleSubmit}>Login</Button>
        
        
                        </Form>
        
                   
                            <p>Don't have account?? <Link to={'/'}>Register</Link> </p>
            
                        
                    </div>
                </Col>
                <Col></Col>

            </Row>
            <ToastContainer position='top-center' />

        </>
  )
}

export default Login