import React from 'react'

export default function Experience() {
  return (
    <div>
        <Card exp="My passion and Interest in Astrology started way back in 2015 and since then I consistently studied this subject which got me a job in Astrotalk , this is a freelance job and I get to expand my astology knowledge while reading 20-30 charts per day." src="https://cdn.techjockey.com/web/assets/images/techjockey/products/18006_18006_astrotalk.jpg" name="Astrologer and Tarot Reader"/><br></br>
        <Card exp="I always took art and drawing seriously from childhood and kept practising and hence could get a job as art and colouring instructor in Global art where I taught art and creativity to kids." src="https://media.glassdoor.com/sqll/4098692/global-art-and-creative-squarelogo-1637748777398.png" name="Course Instructor"/>
        <Card exp="This internship was a part of curriculum of Aerospace Engineering , which gave me insight of the corporate world, various departments of a company, I worked in production department where I helped in detecting the problems faced during painting of aircraft components and came up with suitable solutions." src="https://i0.wp.com/www.enggwave.com/wp-content/uploads/2017/10/Mahindra-Aerospace-Logo.png?fit=200%2C200&ssl=1" link="https://melodious-truffle-5e7a89.netlify.app/" name="Product Engineer Intern"/>
           </div>
  )
}
function Card(props){
    return(
        <div style={{width:"850px",marginLeft:"250px"}} className="row no-gutters bg-light position-relative">
  <div className="col-md-6 mb-md-0 p-md-4">
    <img  style={{width:"200px" ,height:"300px"}} src={props.src} className="w-100" alt="#"/>
  </div>
  <div className="col-md-6 position-static p-4 pl-md-0">
    <h5 className="mt-0">{props.name}</h5>
    <p>{props.exp}</p>
   
  </div>
</div>
    )
}