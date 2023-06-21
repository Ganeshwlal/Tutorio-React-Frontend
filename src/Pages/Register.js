import React, { useContext } from 'react'
import { useState } from 'react'
import { Button, Col, FloatingLabel, Form, Row } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { register } from '../Services/allApi'
import Navbars from '../Components/Header/Navbars'
import { regStudent } from '../Components/Contexts/ContestProviders'


function Register() {

    const navigate = useNavigate()

    const {student,setStudent} = useContext(regStudent)

    const [fname, setFname] = useState("")
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")
    const [pswd, setPswd] = useState("")

    //validation state
    const [error, setError] = useState(false);



    const handleSubmit = async (e) => {
        e.preventDefault()

        if (fname.length || phone.length || email.length || pswd.length == 0) {
            setError(true)
        }
        if (!/^[a-zA-Z ]+$/.test(fname) && fname.length > 0) {
            toast.error('Name should only contain letters');
        }
        if (phone.length !== 10 && phone.length > 0) {
            toast.error('Phone number should be 10 digits ')
        }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) && email.length > 0) {
            toast.error('Invalid email address');
        }

        else {

            const data = new FormData()
            data.append("fname", fname)
            data.append("phone", phone)
            data.append("email", email)
            data.append("pswd", pswd)

            const headerConfig = {
                "content-type": "application/json"
            }

            const response = await register(data, headerConfig)
            console.log(response);



            if (response.status === 200) {
                
                setStudent(response.data)
                toast.success("Register success")

                // alert('Register Success')


                setTimeout(()=>{
                    setFname('')
                setPhone('')
                setEmail('')
                setPswd('')
                    navigate('/login')
    
                    },2000)
            }

        }


    }




    // background-image: ;

    return (
        <>
            <Navbars />
            <Row className='' style={{backgroundImage:'linear-gradient(0deg, #FFDEE9 0%, #B5FFFC 100%)', height:'90vh'}}>
                <Col className=''>

                </Col>
                <Col  lg={5}>
                    <div style={{backgroundImage:'linear-gradient( 174.2deg,  rgba(255,244,228,1) 7.1%, rgba(240,246,238,1) 67.4% )'}} className='container mt-4 border border-dark ps-5 pe-5'>
                        <h1 className='pt-2'>Moonhive Register</h1>
                        <hr />


                        <Form>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label><b>Full Name</b></Form.Label>
                                <Form.Control name="fname" type="text" placeholder="Enter your name"
                                    value={fname} required onChange={e => setFname(e.target.value)} />
                                {/* <div style={{ height: '5px' }}>{fnameValidate &&  <p style={{ color: 'red' }}> {fnameValidate} </p>}</div> */}

                                <div style={{ height: '5px' }}>
                                    {error && fname.length <= 0 ?
                                        <p style={{ color: 'red' }}>Name is Required</p> : ''
                                    }
                                </div>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                                <Form.Label><b>Phone</b></Form.Label>
                                <Form.Control type="number" name="phone" placeholder="Enter your number"
                                    value={phone} required onChange={e => setPhone(e.target.value)} />
                                <div style={{ height: '5px' }}>
                                    {error && phone.length <= 0 ?
                                        <p style={{ color: 'red' }}>Phone Number is Required</p> : ''
                                    }
                                </div>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
                                <Form.Label><b>Email</b></Form.Label>
                                <Form.Control type="text" name="email" placeholder="Enter your Email"
                                    value={email} required onChange={e => setEmail(e.target.value)} />
                                <div style={{ height: '5px' }}>
                                    {error && email.length <= 0 ?
                                        <p style={{ color: 'red' }}>Email  is Required</p> : ''
                                    }
                                </div>
                            </Form.Group>


                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput5">
                                <Form.Label><b>Password</b></Form.Label>
                                <Form.Control type="password" name="pswd" placeholder="Enter your number"
                                    value={pswd} required onChange={e => setPswd(e.target.value)} />
                                <div style={{ height: '5px' }}>
                                    {error && pswd.length <= 0 ?
                                        <p style={{ color: 'red' }}>Password is Required</p> : ''
                                    }
                                </div>
                            </Form.Group>

                            <div className='d-flex justify-content-center'>

                                <Button type="submit" onClick={handleSubmit}>Register</Button>

                            </div>

                        </Form>


                        <p>Already Have an account? <Link to={'/login'}>Login</Link> </p>


                    </div>
                </Col>
                <Col></Col>

            </Row>

            <ToastContainer position='top-center' />
        </>
    )
}

export default Register