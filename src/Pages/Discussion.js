import React from 'react'
import { Button, Card, Col, Container, Row, Tab, Tabs } from 'react-bootstrap'
// import Discussionlist from '../Components/Course items/Discussionlist'



function Discussion(vlue) {

    let discussion = [
        {
            img:"https://i.postimg.cc/rpv3mdTK/gray-user-profile-icon-png-f-P8-Q1-P.png",
            fname:'Ganesh W Lal',
            topic:'Using Angular HttpClientModule instead of HttpModule ',
            days:'2'
        },
        {
            img:"https://i.postimg.cc/rpv3mdTK/gray-user-profile-icon-png-f-P8-Q1-P.png",
            fname:'Vighnesh',
            topic:'why am i getting errors when trying to install angular ',
            days:'3'
        },
    
        {
            img:"https://i.postimg.cc/rpv3mdTK/gray-user-profile-icon-png-f-P8-Q1-P.png",
            fname:'Gayathri R Lal',
            topic:'Using Angular HttpClientModule instead of HttpModule ',
            days:'4'
        },
        {
            img:"https://i.postimg.cc/rpv3mdTK/gray-user-profile-icon-png-f-P8-Q1-P.png",
            fname:'Karthik',
            topic:'why am i getting errors when trying to install angular ',
            days:'5'
        }
    
    ]


    // if(value){
    //     discussion=discussion.slice(0,value)
    // }


    return (
        <>
            <Container className='border ' >
                <div>
                    <div>
                        <h4>Discussion</h4>
                    </div>
                   
                    <div className='p-3' style={{backgroundColor:'white'}}>
                        <div className='mb-3 d-flex justify-content-between'>
                           <div className=''>
                             <input style={{width:'300px',backgroundColor:'#dadde3'}} className='form-control' type="text" placeholder='Search Disscussion'/>
                           </div>
                            <p  className='ms-5 '>All Topics <i class="fa-sharp fa-solid fa-caret-down"></i></p>
                            <p className='ms-5'>Newest <i class="fa-sharp fa-solid fa-caret-down"></i></p>
                            <Button variant="danger">Ask a question</Button>

                        </div>
                        <Card></Card>
                        {
                            discussion.map((item)=>
                            
                            <div  className='d-flex mt-2 mb-2'>
                            <div style={{width:'200px'}} className='d-flex align-items-center me-5'>
                                <img src="https://i.postimg.cc/rpv3mdTK/gray-user-profile-icon-png-f-P8-Q1-P.png" width={'50px'} className='rounded' alt="" />
                                <div>
                                    <p style={{height:'10px'}}>{item.days} days ago</p>
                                    <p>{item.fname}</p>
                                </div>
                            </div>

                            <div className='ms-5'>
                                <h6>{item.topic}</h6>
                            
                            </div>

                            <div style={{marginLeft:'380px'}} className=''>
                                <h5>1</h5>
                                <p>answer</p>
                            </div>
                            
                        </div>
                        
                        
                        )}
                        <Card></Card>

                    </div>
                </div>
            </Container>
        </>
    )
}

export default Discussion