import React, {useState, useEffect} from 'react'
import axios from 'axios';


function PathApp() {
    const [post, setPost] = useState({})
    const [id, setId] = useState()


    useEffect(() =>{
        async function getdata() {
            try{
            const res = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
            console.log(res.data);
            setPost(res.data);
            }

            catch (error) {
                console.error('Your file is having an error');}
        }
        getdata();
    },[id])

    // for building api - local api
    //  const res = await axios.get(`http://localhost:8080/`)
    //          console.log(res.data.posts);
    //          setPost(res.data);



    // useEffect(() =>{
    //     axios
    //     .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
    //         .then(res =>{
    //             console.log(res)
    //             setPost(res.data)
    //         })
    //         .catch(err =>{
    //             console.log(err)
    //         })
    // },[id])

    return (
        <div>
        <div>{post.title}</div>
        {/* <ul>
           { posts.map(post => (<li key={post.id}>{post.title}</li>))}
           </ul> */}
           <input type="text" value={id} onChange={e => setId(e.target.value)} /> 
        </div>
    )
}

export default PathApp;

