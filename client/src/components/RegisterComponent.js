import React,{useState} from 'react';
import fire from './fire';

import {Card} from 'reactstrap';

import { Button,Form, Label, Input, FormGroup, FormControl } from 'reactstrap';

export default function RegisterComponent() {
    
const [name,newName]=useState('');
const [name2,newName2]=useState('');
const [email,newEmail]=useState('');
const [select,newselect]=useState('');
const [select2,newselect2]=useState('');
const [password,newPassword]=useState('');
const [Cpassword,newCPassword]=useState('');


const db=fire.firestore();
db.settings({timestampInSnapshots:true});

 const handlesubmit=e=>{
     e.preventDefault();
    console.log(name + password + Cpassword + email + select+ select2 + name2);
    fire.auth().createUserWithEmailAndPassword(email,password).then(cred=>{
        console.log(cred);
    db.collection('users').add({
    fname:name,
    lname:name2,
    email:email,
    password:password,
    interest:select,
    occupation:select2
    });

    fire
    .auth()
    .signInWithEmailAndPassword(email,password)
    .then(cred=>{
        console.log(cred);
    })
    })

}

    return (
        <div>
             <div className="text-center container">
                    <h1>Registration Form</h1>
                    <p>Guidance to shape your future</p>
                </div>
                <Card className="card">
                <form onSubmit={handlesubmit}>
                    <label className="mr-2 ml-2 mb-4">First Name</label>
                    <input type="text"
                    placeholder="Enter Full Name"
                    value={name}
                    onChange={e=>newName(e.target.value)}
                    />
                     <br />
                     <label className="mr-2 ml-2 mb-4">Last Name</label>
                    <input type="text"
                    placeholder="Enter Full Name"
                    value={name2}
                    onChange={e=>newName2(e.target.value)}
                    />
                  
                    <Input type="select" value={select}  onChange={e=>newselect(e.target.value)}>
                    <option>Area Of Interest</option>
                    <option>Android Dev</option>
                    <option>Machine Learning</option>
                    <option>web Dev</option>
                    </Input>
                    <br/>
                    <Input type="select" value={select2}  onChange={e=>newselect2(e.target.value)}>
                    <option>what are you registering as ?</option>
                    <option>student</option>
                    <option>teacher</option>
                    <option>other</option>
                    </Input>
                    <br/>
                    <label className="mr-2 ml-2 mb-4">Email</label>
                    <input type="text" placeholder="Email Id"
                     value={email}
                     onChange={e=>newEmail(e.target.value)}/>
                    <br/>
                    <label className="mr-2 ml-2 mb-4">Create Password</label>
                    <input type="password" placeholder="New Password"
                     value={password}
                     onChange={e=>newPassword(e.target.value)}/>
                    <br/>
                    <label className="mr-2 ml-2 mb-4">Confirm Password</label>
                    <input type="password" placeholder="Confirm Password"
                     value={Cpassword}
                     onChange={e=>newCPassword(e.target.value)}/>
                    <br/>
                    <label>upload resume</label>
                    <input type="file" name="upload resume" id="exampleFile" />
                    <br />
                    <input type="submit" value="Submit" />
                </form>
                </Card>
        </div>
    )
}
