import React from 'react'

export default function Projects() {
  return (
    <div>
        <Card src="https://user-images.githubusercontent.com/62937819/84504960-71862780-acef-11ea-9c57-63d755eec333.png"/><br></br>
        <Card/>


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
    <a href="#" className="stretched-link">Project Link</a>
  </div>
</div>
    )
}