import React from 'react'
import { Alert,Col, Container, Row, Tab, Tabs } from 'react-bootstrap'


 



function Achivement({value}) {

    let achivements = [
        {
            img: "https://i.postimg.cc/pr1sZkWq/2048px-Angular-full-color-logo-svg.png",
            topic: 'Angular fundamentals',
            disc:'Creating and communicating between Anguar component'
        },
        {
            img: "https://i.postimg.cc/BZHth7BR/flinto.png",
            topic: 'Flinto',
            disc:'Introduction to the app Design application'
    
        },
        {
            img: "https://i.postimg.cc/pr1sZkWq/2048px-Angular-full-color-logo-svg.png",
            topic: 'Angular fundamentals',
            disc:'Creating and communicating between Anguar component'
        },
        {
            img: "https://i.postimg.cc/BZHth7BR/flinto.png",
            topic: 'Flinto',
            disc:'Introduction to the app Design application'
    
        }
    
    ]

    if(value){
        achivements=achivements.slice(0,value)
    }
  return (
    <>
        {
            achivements.map((item)=>

            
            <div style={{height:'250px', color:'white'}} className='row ms-4 me-4'>
                <div className='mb-2 ' style={{backgroundColor:'#525CFB', height:'250px', width:'500px'}}>
                <div className="d-flex justify-content-around mt-3 ">
                    <div className="">
                        <h6>ACHIVEMENT</h6>
                        <p>Aug 4, 2023</p>
                    </div>
                    <div>
                    <img  style={{marginLeft:'80px'}} width={'50px'} src={item.img} alt="" />
    
                    </div>
    
                </div>
    
                <div className='d-flex justify-content-around' >
                    <div className='me-5 ms-5'>
                        <img  width={'90px'} src="https://i.postimg.cc/fLpZ8n8t/f376d6bc24d7b0f57e60cfc7048ce942.png" alt="" />
                    </div>
                    <div className='ms-5 me-5'>
                        <h6>{item.topic}</h6>
                        <p>{item.disc}</p>
                    </div>
                </div>
            </div>
            </div>
        )}
    </>
  )
}

export default Achivement