import React from 'react'

export default function Projects() {
  return (
    <div>
        <Card/>
        <Card/>


    </div>
  )
}
function Card(props){
    return(
        <div style={{width:"1000px",marginLeft:"250px"}} class="row no-gutters bg-light position-relative">
  <div class="col-md-6 mb-md-0 p-md-4">
    <img src="https://www.webauthor.com/vault/2595/web/img_36879-2F726121-B232-D429-CE9D9519521ECC32.png" class="w-100" alt="#"/>
  </div>
  <div class="col-md-6 position-static p-4 pl-md-0">
    <h5 class="mt-0">Project Name</h5>
    <p>Another instance of placeholder content for this other custom component. It is intended to mimic what some real-world content would look like, and we're using it here to give the component a bit of body and size.</p>
    <a href="#" class="stretched-link">Project Link</a>
  </div>
</div>
    )
}