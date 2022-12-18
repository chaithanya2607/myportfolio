import React from 'react'

export default function Projects() {
  return (
    <div>
        <Card exp="This is a parking app based on vehicles in the garage and booking out. The front end is mainly in React js , routes are used to navigate through app.Mongodb is the database used to store the data and backend here is the nodejs." src="https://riseapps.co/wp-content/uploads/2020/03/img_article_blog_how-to-build-an-parking-app-1024x768-min-1024x768.jpg" link="https://relaxed-trifle-d3bb8b.netlify.app/" name="Parking App"/><br></br>
        <Card exp="This project mainly focus on sending of mails through nodemailer, Reactjs is the frontend and node js , express js being backend , Mongodb is used for the data storage." src="https://it.umn.edu/sites/itumn.umn.edu/files/styles/folwell_full/public/images/new%20gmail%20interface.png?itok=EzEqFIGV" link="https://deluxe-unicorn-58374e.netlify.app/" name="Gmail Clone App"/>
        <Card exp="This project is mainly about javascript and DOM manipulation through coding, here the facility booking, table creation, conditions of booking , all are coded using javascript." src="https://assets-global.website-files.com/5fc446238a88f40826c2ce10/602c58bf47dde1a5be998063_calendarhero.svg" link="https://melodious-truffle-5e7a89.netlify.app/" name="Facility booking in apartments"/>
        <Card exp="This is a very basic HTML and CSS front end for the PAN card form showcasing the essential parts of languages HTML and CSS, all input types are included along with proper alignments using CSS." src="https://cdn.ndtv.com/tech/pan_card_form.jpg" link="https://stalwart-tulumba-134967.netlify.app/" name="Front end Pan card form"/>


    </div>
  )
}
function Card(props){
    return(
        <div style={{width:"1000px",marginLeft:"250px"}} className="row no-gutters bg-light position-relative">
  <div className="col-md-6 mb-md-0 p-md-4">
    <img  style={{width:"200px" ,height:"300px"}} src={props.src} className="w-100" alt="#"/>
  </div>
  <div className="col-md-6 position-static p-4 pl-md-0">
    <h5 className="mt-0">{props.name}</h5>
    <p>{props.exp}</p>
    <span>Link-</span><a href={props.link} target="_blank" className="stretched-link">{props.link}</a>
  </div>
</div>
    )
}