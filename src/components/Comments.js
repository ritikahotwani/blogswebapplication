import React, { useEffect, useState } from 'react'
import firebase from 'firebase/app';
import { addDoc,collection } from 'firebase/firestore';
import {auth,db } from '../firebase-config';

const commentsRef = collection(db, 'comments');

const Comments=({id})=>{
const [comment, setComment] = useState('');
const[name,setName]=useState('');
  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
        await addDoc(commentsRef,
            {   name,
                comment,
                id
            }) 
            console.log(name ,comment,id);
            alert("commented");
            setComment("");
            setName("");

    }
    catch(error){
        console.log(error);
    }
    
  };

  return ( 

    <form className='form-control mt-2' onSubmit={handleSubmit}>
    <input className='form-control' type="text" placeholder='Name' onChange={(e)=>setName(e.target.value)}/>
    <textarea className='form-control mt-2'
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder="Write a comment..."
    />
    <button className='btn btn-dark mt-2' type="submit">Post</button>
</form>

  )
  
  }

export default Comments