import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';




function Carditem({value}) {

    let courseList = [
        {
            img: "https://i.postimg.cc/FK5rc6FF/the-seo-guide-to-angular.png",
            topic: 'Leran Angular',
        },
        {
            img: "https://i.postimg.cc/wMDkhFmK/image.png",
            topic: 'Buid an iOS Application in',
        },
        {
            img: "https://i.postimg.cc/wTHXCXNv/wordpress-6-627233df6fbbc-sej.jpg",
            topic: 'Build a WordPress Website ',
        },
        {
            img: "https://i.postimg.cc/V6KwzB68/reactnative.jpg",
            topic: 'Become a React Native',
        }
    
    ]

    if(value){
        courseList=courseList.slice(0,value)
    }


    return (
        <>
            {
                courseList.map((item) =>

                    <Card className='m-3' style={{ width: '15rem' }}>
                        <Card.Img style={{ height: '8rem',width: '14rem' }} variant="top" src={item.img} />
                        <Card.Body>
                            <Card.Title style={{fontSize:'15px'}}>{item.topic}</Card.Title>

                        </Card.Body>
                    </Card>
                )}
        </>
    )
}

export default Carditem