import React from 'react'
import { Button, Col, Container, Row, Tab, Tabs } from 'react-bootstrap'
import './footer.css'
import { Link } from 'react-router-dom'


function Footer() {
    return (
        <>
            <div className='' style={{width:'100%',backgroundColor:'white',height:'25vh'}}>
                <Container style={{backgroundColor:'white'}} className='mt-5 mb-4 ps-5 pe-5 pt-3'>
                    <div className='d-flex row' style={{backgroundColor:'white'}}>
                        <div style={{ color: '#757472' }} className='col-2 '>
                            <h3>Learn</h3>
                            <p style={{ height: '10px' }} ><a style={{ textDecoration: 'none', color: '#757472' }} href="">Library</a></p>
                            <p style={{ height: '10px' }} ><a style={{ textDecoration: 'none', color: '#757472' }} href="">Featured</a></p>
                            <p style={{ height: '10px' }} ><a style={{ textDecoration: 'none', color: '#757472' }} href="">Explore</a></p>
                            <p style={{ height: '10px' }} ><a style={{ textDecoration: 'none', color: '#757472' }} href="">Learning Paths</a></p>
                        </div>
    
                        <div style={{ color: '#757472' }} className='col-2 ms-5'>
                            <h3 >Join Us</h3>
                            <p style={{ height: '10px' }} ><a style={{ textDecoration: 'none', color: '#757472' }} href="">Pricing</a></p>
                           <Link style={{ textDecoration: 'none' }} to={'/login'}>
                           <p style={{ height: '10px' }} ><a style={{ textDecoration: 'none', color: '#757472' }} href="">Login</a></p>
                           </Link>
                           <Link style={{ textDecoration: 'none' }} to={'/'}>
                           <p style={{ height: '10px' }} ><a style={{ textDecoration: 'none', color: '#757472' }} href="">Signup</a></p>
                           </Link>
                            <p style={{ height: '10px' }} ><a style={{ textDecoration: 'none', color: '#757472' }} href="">Payment</a></p>
                        </div>
    
                        <div style={{ color: '#757472', height: '50px' }} className='col-3 ms-5 '>
                            <h3>Community</h3>
                            <p style={{ height: '10px' }} ><a style={{ textDecoration: 'none', color: '#757472' }} href="">Discussion</a></p>
                            <p style={{ height: '10px' }} ><a style={{ textDecoration: 'none', color: '#757472' }} href="">Ask Question</a></p>
                            <p style={{ height: '10px' }} ><a style={{ textDecoration: 'none', color: '#757472' }} href="">Student Profile</a></p>
                            <p style={{ height: '10px' }} ><a style={{ textDecoration: 'none', color: '#757472' }} href="">Instructor Profile</a></p>
                        </div>
    
                        <div  style={{width:'150px'}} className='col ms-4'>
                        <h3 style={{textAlign:'right', color: '#757472'}}> <i class="fa-solid fa-book-open-cover"></i> &nbsp; Tutorio</h3>
                            <p style={{textAlign:'right', color: '#757472'}}>Tutorio is one of the best platform for study and learning the chapters in smart way  such a  experience.</p>
                        </div>
                    </div>
                </Container >
            </div>

            <div style={{ backgroundColor: '#37444f' }} className='container-fluid'>
                <Container>
                    <div className='d-flex row'>
                        <div className='d-flex align-items-center justify-content-between' style={{height:'140px'}}>
                            <div >
                                <h6 style={{fontSize:'16px',color:'#98b9d6' }}>Follow Us</h6>
                                <a style={{fontSize:'26px',color:'#98b9d6' }} className='me-2' href=""><i  class="fa-brands fa-square-facebook"></i></a>
                                <a style={{fontSize:'26px',color:'#98b9d6' }} className='me-2' href=""><i class="fa-brands fa-square-instagram"></i></a>
                                <a style={{fontSize:'26px',color:'#98b9d6' }} className='me-2' href=""><i class="fa-brands fa-youtube"></i></a>
                                <a style={{fontSize:'26px',color:'#98b9d6' }} className='me-2' href=""><i class="fa-brands fa-square-twitter"></i></a>
                            </div>

                            <div style={{alignItems:'left'}}>
                            <Button variant="outline-light  ">English <i class="fa-sharp fa-solid fa-caret-down"></i></Button>
                            </div>

                            <div style={{flexDirection:'column'}} className='d-flex justify-content-end'>
                                <a href="" style={{textAlign:'right',color:'#98b9d6',textDecoration:'none'}}><span style={{textDecoration:'underline'}}> Terms</span> &nbsp;  <span style={{textDecoration:'underline'}}>Privacy policy</span></a>
                                <p style={{textAlign:'right',color:'#98b9d6'}}>Copyright 2023 &#169; All rights reserved.</p>
                            </div>
                        </div>
                        
                    </div>

                </Container>
            </div>
        </>
    )
}

export default Footer