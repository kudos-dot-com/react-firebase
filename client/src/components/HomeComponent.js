import React,{useState} from 'react'
import fire from './fire';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button,Modal, ModalHeader, ModalBody, Form, Label, Input, FormGroup
  } from 'reactstrap';

  

export default function HomeComponent() {
    const [display,hide]=useState(false);
    const[todos,setState]=useState([{
       
    }]);
    const[name,mname]=useState();
    const[link,getlink]=useState();
    const[topic,gettopic]=useState();
    const[overview,getoverview]=useState();
    const[open,toggleModal]=useState(false);
  


   React.useEffect(()=>{
       
        const fetch=async()=>{
        const db=fire.firestore();
        db.settings({timestampInSnapshots:true});  
        const data=await db.collection('home').get();
        setState(data.docs.map(doc=>doc.data()))           
       }
       fetch();
   },[])
   
    function user(){
               
        fire.auth().onAuthStateChanged(user=>{
           console.log(user);
           if(user){
           hide(true);
           }else{
               hide(false);
           }
        })
    }

  const handlesubmit=e=>{
      e.preventDefault();
      
      toggleModal(false);
      const db=fire.firestore();
      db.settings({timestampInSnapshots:true});
      db.collection('home').add({
        
        username:name,
        link:link,
        topic:topic,
        overview:overview
      })

    }


   function Todo({docs}){

    return (
        <div>
          
          <Card>
            <div className="landing2"> </div>
            <CardBody>
            <CardTitle className="font-weight-bold">Instructor: {docs.username}<br></br></CardTitle>
           <CardSubtitle>topic : {docs.topic}</CardSubtitle>
              <CardText>overview<br></br>{docs.overview}</CardText>
              <CardText>Platform link<br></br>{docs.link}</CardText>
              <Button>Button</Button>
            </CardBody>
           </Card>
        </div>
      );
    }
const handleclick=e=>{
  e.preventDefault();
  toggleModal(true);
}
    return (
       
       <div>
          <Button outline onClick={handleclick} className="event">
            <span className="fa fa-sign-in fs-lg"></span> Start An Event
           </Button>
           <div>
              { 
                  todos.map(docs=>(
                      
                      <Todo docs={docs}/>
                  ))
              } 
           </div>
         
       
        <div className="">
                <div style={{display:display?'none':'block'}} className="title text-center">
                    <h1>HackYuva</h1>
                    <p><em>Learn to code, Code to Learn</em></p>
                   
                </div>
                
            </div>
              <Modal  isOpen={open}>
                    <ModalHeader >Login</ModalHeader>
                    <ModalBody>
            <Form onSubmit={handlesubmit}>
                            <FormGroup>
                                <Label htmlFor="username">Mentor name</Label>
                                <Input type="text" 
                                placeholder=""
                                value={name}
                                onChange={e=>mname(e.target.value)} 
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="username">platform link</Label>
                                <Input type="text" 
                                placeholder=""
                                value={link}
                                onChange={e=>getlink(e.target.value)} 
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="username">topic</Label>
                                <Input type="text" 
                                placeholder=""
                                value={topic}
                                onChange={e=>gettopic(e.target.value)} 
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="username">SomeThing About Your Session</Label>
                                <Input type="text" 
                                placeholder=""
                                value={overview}
                                onChange={e=>getoverview(e.target.value)} 
                                />
                            </FormGroup>
                        
                           
                            <Button type="submit" value="Submit" color="primary">Login</Button>
                        </Form>
                        </ModalBody>
                </Modal>
            </div>
    )
}
