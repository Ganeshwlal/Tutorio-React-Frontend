import { color } from 'highcharts'
import React from 'react'
import { Button, Col, Container, Row, Tab, Tabs } from 'react-bootstrap'
import Carditem from '../Components/Course items/Carditem'
import LearningPath from '../Components/Course items/LearningPath'
import Achivement from '../Components/Course items/Achivement'





function Courses() {


  return (
    <>
      <div>
        <Container>

          <div style={{ height: '250px', flexDirection: 'column', backgroundImage: `url("https://i.postimg.cc/02ptbfx7/nphrgz8yfnjylrwfr0yl.jpg")` }}
            className='border d-flex justify-content-center align-items-center'>
            <div style={{ flexDirection: 'column', color: 'white' }} className=' d-flex justify-content-center align-items-center' >
              <h2 >Introduction to TypeScript</h2>

              <p><i class="fa-solid fa-clock"></i> 50 minutes left &nbsp;&nbsp; <i class="fa-solid fa-circle-play"></i> 12 Lessons</p>


            </div>

            <div>
              <Button className='me-4' variant="primary">Resume</Button>
              <Button style={{ color: 'white' }} variant="outline-primary">Start Over</Button>
            </div>
          </div>

          <section>
            <div className='d-flex justify-content-between mt-4'>
              <h2>Learning Path</h2>
              <a href="">All my learning paths</a>
            </div>
            <div  className='d-flex '>
              {/* <Col className=' mb-3' lg="7"> */}
                <LearningPath />
              {/* </Col> */}
            </div>

          </section>

          <Row>
            <div className='d-flex justify-content-between mt-4'>
              <h3>Courses</h3>
              <a href="">All my courses</a>
            </div>
            {/* <Col  lg={4} sm={12} xl={4} className='d-flex justify-content-space-between '> */}
            <Carditem />

            {/* </Col> */}
          </Row>


          <div>
            <div className='d-flex justify-content-between mt-4'>
              <h3>Achivements</h3>
              <a href="">My achivements</a>
            </div>

            <div >
              <Col className='d-flex ' >
                <Achivement value={2} />

              </Col>
            </div>
          </div>


        </Container>
      </div>
    </>
  )
}

export default Courses