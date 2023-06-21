import React, { useContext } from 'react'
import { Button, Col, Container, Row, Tab, Tabs } from 'react-bootstrap'
import { useLocation } from 'react-router-dom'
import { logStudent } from '../Contexts/ContestProviders'
// import './Header.css'



function Header() {

    const location = useLocation()
    const{logStu}=useContext(logStudent)

    
    return (
        <>
            <Container className='mb-4'>
                <div className="container-fluid " style={{backgroundColor:'#525CFB'}}>
                    <div className="container d-flex  align-items-center" style={{ height:'150px'}} >
                        {/* <div className="col-1"></div> */}

                        <div className='col-1' style={{ height:'100px'}}>
                            <img style={{ width: '100px', height: '100px' }}src="https://i.postimg.cc/9fHyN77Y/image.png" alt="" />
                        </div>

                        <div className='col-9 ms-5'>
                            <h2 style={{color:'white'}}>Ganesh W Lal</h2>
                            <p style={{color:'#93cca2'}}>Student 2000IQ</p>
                        </div>

                        <div className="col-2">
                        <Button style={{color:'white',backgroundColor:'#525CFB'}}  variant="outline-light">Edit Account</Button>{' '}
                        </div>

                    </div>
                </div>

            </Container>
        </>
    )
}

export default Header