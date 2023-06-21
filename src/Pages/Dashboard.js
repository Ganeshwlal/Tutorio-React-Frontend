import React, { useState } from 'react';
import { Alert } from 'reactstrap';
import { Card, Col, Container, Row, Tab, Tabs } from 'react-bootstrap'
import Linechart from '../Components/Dashboard Items/Linechart';
import SpiderWeb from '../Components/Dashboard Items/SpiderWeb';
import Achivement from '../Components/Course items/Achivement';
import LearningPath from '../Components/Course items/LearningPath';
import Carditem from '../Components/Course items/Carditem';
import Discussion from './Discussion';




function Dashboard() {

  

  return (
    <>
    <Alert color="info" >
    <i class="fa-solid fa-clock"></i>  &nbsp;&nbsp;
      Your subscription ends on <b>04 August 2023 </b><span style={{marginLeft:'650px'}}>Upgrade</span>
    </Alert>

    <Container >
      <Row>
        <Col>
        <div style={{backgroundColor:'white'}} className='d-flex justify-content-between align-items-center ps-4 pe-5'>
          <h4 style={{color:'#bf0f1b', fontWeight:'700'}}>116</h4>
          <div className='mt-2' style={{marginRight:'200px'}}>
            <h5 style={{height:'12px'}}>Angular</h5>
            <p>Best Score</p>
          </div>
          <p>Popular Topics <i class="fa-solid fa-caret-down"></i></p>
        </div>
        <Card></Card>
        <SpiderWeb/>
        </Col>

        <Col>
        <div style={{backgroundColor:'white'}} className='d-flex justify-content-between align-items-center ps-4 pe-5'>
          <h4 style={{color:'#bf0f1b', fontWeight:'700', marginRight:'-40px'}}>432</h4>
          <div  className='mt-2' style={{marginRight:'200px'}}>
            <h5 style={{height:'12px'}}>Experience IQ</h5>
            <p>4 Day streak</p>
          </div>
          <p><i class="fa-solid fa-caret-down"></i></p>
        </div>
        <Linechart />

        <Achivement value={1}/>
        </Col>


      </Row>

      <Row className='mt-5 '>
        <Col>
        <div className='d-flex justify-content-between mb-3'>
          <h4>Learning Paths</h4>
          <a href="">My learning paths</a>
        </div>

          <div  className='mb-2'>
            <LearningPath   value={3}/>
            
          </div>
        </Col>

        <Col className=''>
        <div className='d-flex justify-content-between mb-3'>
          <h4>Courses</h4>
          <a href="">My courses</a>
        </div>
        <div  className='d-flex'>
          <Carditem  value={2}/>
          </div>
        </Col>
      </Row>

      <Row>
        <Discussion value={2}/>
      </Row>
    </Container>


    
    </>
  )
}

export default Dashboard