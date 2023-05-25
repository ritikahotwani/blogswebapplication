import React from 'react'
import { useState,useEffect } from 'react';
import {getDocs, collection, deleteDoc, doc } from 'firebase/firestore';
import {auth,db,storage} from '../firebase-config';
import Comments from './Comments';
import '../imagestyle.css';
const Home = ({isAuth}) => { 
    const[postLists,setPostLists]=useState([]);
    const[loading,setLoading]=useState(false);
    const postCollectionsRef= collection(db,'posts');
    const commentsRef=collection(db,'comments');
    const[commentslist,setCommentsList]=useState([]);

    const getPosts= async()=>{
        setLoading(false);
        const  data=await getDocs(postCollectionsRef);
        setPostLists (data.docs.map((doc) => ({ ...doc.data(), id:doc.id })));
        // getComments({postid:doc.id});
        setLoading(false);
        // window.location.reload();
        getComments();
        
    }
    const getComments=async()=>{
        const data=await getDocs(commentsRef);
        setCommentsList(data.docs.map((doc) => ({ ...doc.data(), commentid:doc.id })));
        // window.location.reload();
        // const postDoc=doc(db, 'posts',id);
        // setLoading(false);
        // getPosts();   
    }

    

    const deletePost= async(id)=>{
       const postDoc= doc(db, 'posts',id);
       await deleteDoc(postDoc);
       localStorage.removeItem('posts');
       window.location.reload();
    //    getPosts();
    }


    useEffect(()=>{getPosts();getComments();},[])
    if(loading){
         return(
            <h3>Loading....</h3>
         )
    }
  return (
    <div className='homepage'>
  
        {postLists.length ===0 ? <h3>No post added yet!</h3> : postLists.map ((posts)=>{
            return(
                <div  key={posts.id}  className='card mb-4 shadow-sm'>
                    <div className='card-body'>
                        <div className='d-flex justify-content-end'>
                        {isAuth && posts.author.id === auth.currentUser.uid &&
                            <button className='btn btn-danger my-3 mx-3' onClick={()=>{deletePost(posts.id)}}>Delete</button>}
                        </div> 
                        <div className='post-img-wrapper'>
                        <img src={posts.image} alt="Post Image" className="img-thumbnail custom-image" />
                        </div>
                        <h5 className='card-title mb-3 fw-bold'>{posts.title}</h5>

                        <p className='card -title mb-3'>{posts.postTitle} </p>
                        <span className='badge bg-dark'>{posts.author.name }</span>
                        <Comments id={posts.id}/>
                        <div  className='container '>
                            {commentslist.map ((comm)=>{
                                return(
                                    <div className='container'>
                                    
                                        {posts.id===comm.id ? 
                                            <div className='card mb-3'>
                                                <div className='card-body'>
                                                    <h6 className=''>{comm.name}</h6>
                                                    <h5 className=''>{comm.comment}</h5>
                                                </div>
                                            </div>
                                        : <h1></h1>}
                                    </div>
                                )
                            })}
                        </div>
                    </div>

                    
                </div>
            )
        })}
    </div>
  )
}

export default Home