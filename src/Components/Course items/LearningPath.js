import React from 'react'
import { Alert,Col, Container, Row, Tab, Tabs } from 'react-bootstrap'




function LearningPath({value}) {

    let learningPath = [
        {
            img: "https://i.postimg.cc/pr1sZkWq/2048px-Angular-full-color-logo-svg.png",
            topic: 'Angular',
        },
        {
            img: "https://i.postimg.cc/kMk1B1Hg/Swift-logo.png",
            topic: 'Swift',
        },
        {
            img: "https://i.postimg.cc/sX5BK238/1024px-Word-Press-blue-logo-svg.png",
            topic: ' WordPress',
        },
        {
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdRL1G7Dj71z0ftpj7R41Zatt9I6mbGcZy8Q&usqp=CAU",
            topic: 'React Native',
        }
    
    ]

    if(value){
        learningPath=learningPath.slice(0,value)
    }


    return (
        <>
            <Container>
                <Row>
                {
                      learningPath.map((item)=>

                    // <Col className='mb-3' lg="6">
                       
                            <div style={{height:'60px',backgroundColor:'white'}} className='border mb-3 p-2 d-flex justify-content-between'>
                            <img width={'40px'} height={'40px'} src={item.img} alt="" />
                            <div style={{marginLeft:'-250px'}}>
                                <h6 style={{height:'10px'}}>{item.topic}</h6>
                                <p>24 Courses</p>
                            </div>
                            <p>Resume</p>
                        </div>
                       
                    //  {/* </Col> */}
                    )}

                    {/* <Col>
                        <Alert key="light" variant="light">
                            This is a  alert—check it out!
                        </Alert>
                    </Col> */}
                </Row>
            </Container>
        </>
    )
}

export default LearningPath