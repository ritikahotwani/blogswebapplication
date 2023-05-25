 import React, { useEffect, useState } from 'react'
 import { addDoc,collection } from 'firebase/firestore';
 import {ref, uploadBytes,getDownloadURL} from 'firebase/storage';
 import {auth,db,storage } from '../firebase-config';
 import { Navigate, useNavigate } from 'react-router-dom';

 const CreatePost = ({isAuth}) => {
    const navigate=useNavigate(); 
    const [title,setTitle]=useState("");
    const [postTitle,setPostTitle]=useState("");
    const [image,setImage]=useState("");
    const postCollectionsRef = collection(db, 'posts');
    const createPost=async ()=>{
        if(title=== '' || postTitle=== ''){
             alert("Fill the feilds");
             return false;

        } 
        else{
            try{
                    let imageUrl=null;
                    if(image==null){
                         alert("Uplaod an image");
                    }
                    else{

                         const imageRef=ref(storage,`images/${image.name+auth.currentUser.uid}`);
                         await uploadBytes(imageRef, image);
                         imageUrl = await getDownloadURL(imageRef);
                        //  alert("Image uploaded successfully!");
                    }
                
                await addDoc(postCollectionsRef,
                    {   image: imageUrl,
                        title: title,
                        postTitle,
                        author:{
                            name:  auth.currentUser.displayName ,
                            id:auth.currentUser.uid 
                        }
                    }) 
                    alert("Blog Uploaded!");
                    navigate("/")
                }
            catch(error){
                console.log(error) ;
            }
        }
    }

   

    useEffect(()=>{
          if(!isAuth){
            navigate("/login");
          }
    })
   return (
     <div className='container'>
     <div className='bg-light p-5 rounded mt-3'>
    <h1>Create a Post</h1>
    <div className='mb-3'>
        <label htmlFor='image' className='form-label'>Image</label> 
        <input type='file' className='form-control' onChange={(e) => { setImage(e.target.files[0]) }} />
    {/* <button className='btn btn-dark mt-3'>Upload image!</button> */}
    </div>
    <div className='mb-3'>
        <label htmlFor='title' className='form-label'>Title</label>
        <input  type="text"  placeholder='Title' className='form-control'  onChange={(e)=>{setTitle(e.target.value )}}></input>
    </div>

    <div className='mb-3'>
        <label htmlFor='posts' className='form-label'>Posts</label>
        <textarea  placeholder='post' className='form-control'  onChange={(e)=>{setPostTitle(e.target.value)}}></textarea>

    </div>
    <button className='btn btn-dark' onClick={createPost}>Submit</button>
    </div>
     
     </div>
   )
 }
 
 export default CreatePost