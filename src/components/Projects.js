import React from 'react'

export default function Projects() {
  return (
    <div>
        <Card src="https://user-images.githubusercontent.com/62937819/84504960-71862780-acef-11ea-9c57-63d755eec333.png" link="https://relaxed-trifle-d3bb8b.netlify.app/"/><br></br>
        <Card  src="https://user-images.githubusercontent.com/62937819/84504960-71862780-acef-11ea-9c57-63d755eec333.png" link="https://deluxe-unicorn-58374e.netlify.app/"/>
        <Card  src="https://user-images.githubusercontent.com/62937819/84504960-71862780-acef-11ea-9c57-63d755eec333.png" link="https://melodious-truffle-5e7a89.netlify.app/"/>
        <Card  src="https://user-images.githubusercontent.com/62937819/84504960-71862780-acef-11ea-9c57-63d755eec333.png" link="https://stalwart-tulumba-134967.netlify.app/"/>


    </div>
  )
}
function Card(props){
    return(
        <div style={{width:"1000px",marginLeft:"250px"}} className="row no-gutters bg-light position-relative">
  <div className="col-md-6 mb-md-0 p-md-4">
    <img src={props.src} className="w-100" alt="#"/>
  </div>
  <div className="col-md-6 position-static p-4 pl-md-0">
    <h5 className="mt-0">Project Name</h5>
    <p>Another instance of placeholder content for this other custom component. It is intended to mimic what some real-world content would look like, and we're using it here to give the component a bit of body and size.</p>
    <span>Link-</span><a href={props.link} target="_blank" className="stretched-link">{props.link}</a>
  </div>
</div>
    )
}