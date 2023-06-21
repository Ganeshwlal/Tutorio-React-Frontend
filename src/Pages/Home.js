import React from 'react'
import { Col, Container, Row, Tab, Tabs } from 'react-bootstrap'
import Dashboard from './Dashboard'
import Courses from './Courses'
import Discussion from './Discussion'
import Header from '../Components/Header/Header'
import Footer from '../Components/Footer/Footer'
import { useLocation } from 'react-router-dom'


function Home() {



    return (
        <>
            <div className="container-fluid"  style={{backgroundColor:'#e4ebf7'}}>
                <Row>
                    <Header />
                </Row>

                <div style={{width:'100%' }}>
                    <Container >
                        <Tabs
                            defaultActiveKey="home"
                            id="uncontrolled-tab-example"
                            className="mb-3"
                            style={{fontWeight:'700',fontSize:'18px'}}
                            // style={{backgroundColor:'#525CFB'}}
                        >
                            <Tab eventKey="home" title="Dashboard">
                                <Dashboard />
                            </Tab>
                            <Tab eventKey="profile" title="Courses">
                                <Courses />
                            </Tab>
                            <Tab eventKey="contact" title="Discussion" >
                                <Discussion />
                            </Tab>
    
    
                        </Tabs>
                    </Container>
    
                </div>
                <>
                    <Footer />
                </>

            </div>
        </>
    )
}

export default Home