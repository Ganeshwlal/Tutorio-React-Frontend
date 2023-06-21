// import React from 'react'

// function Discussionlist(value) {

    
//     let discussion = [
//         {
//             img:"https://i.postimg.cc/rpv3mdTK/gray-user-profile-icon-png-f-P8-Q1-P.png",
//             fname:'Ganesh W Lal',
//             topic:'Using Angular HttpClientModule instead of HttpModule ',
//             days:'2'
//         },
//         {
//             img:"https://i.postimg.cc/rpv3mdTK/gray-user-profile-icon-png-f-P8-Q1-P.png",
//             fname:'Vighnesh',
//             topic:'why am i getting errors when trying to install angular ',
//             days:'3'
//         },
    
//         {
//             img:"https://i.postimg.cc/rpv3mdTK/gray-user-profile-icon-png-f-P8-Q1-P.png",
//             fname:'Gayathri R Lal',
//             topic:'Using Angular HttpClientModule instead of HttpModule ',
//             days:'4'
//         },
//         {
//             img:"https://i.postimg.cc/rpv3mdTK/gray-user-profile-icon-png-f-P8-Q1-P.png",
//             fname:'Karthik',
//             topic:'why am i getting errors when trying to install angular ',
//             days:'5'
//         }
    
//     ]


//     if(value){
//         discussion=discussion.slice(0,value)
//     }


//   return (
//     <>
//          {
//                             discussion.map((item)=>
//                             <div  className='d-flex mt-2 mb-2'>
//                             <div style={{width:'200px'}} className='d-flex align-items-center me-5'>
//                                 <img src="https://i.postimg.cc/rpv3mdTK/gray-user-profile-icon-png-f-P8-Q1-P.png" width={'50px'} className='rounded' alt="" />
//                                 <div>
//                                     <p style={{height:'10px'}}>{item.days} days ago</p>
//                                     <p>{item.fname}</p>
//                                 </div>
//                             </div>

//                             <div className='ms-5'>
//                                 <h6>{item.topic}</h6>
//                                 {/* <p className='border '>Angular Fundamentals</p> */}
                            
//                             </div>

//                             <div style={{marginLeft:'380px'}} className=''>
//                                 <h5>1</h5>
//                                 <p>answer</p>
//                             </div>
                            
//                         </div>
                        
//                         )}
//     </>
//   )
// }

// export default Discussionlist