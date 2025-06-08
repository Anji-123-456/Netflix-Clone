import React, { useEffect } from 'react'
import './PLayer.css'
import back_arrow from '../../assets/back_arrow_icon.png'
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
const Player = () => {
   const{id}=useParams();
   const navigate = useNavigate();
  const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZGM1MGU2YWEzZTQ5MTY4ODMwNTk3ZGE0YTcwZGU4MyIsIm5iZiI6MTc0OTMxNzE4Mi44NjIwMDAyLCJzdWIiOiI2ODQ0NzYzZTU3YjcxYTkwMzYzMDEzNzciLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.C3DOBMVJwokSaQIGy3hVHBTQdzIa5dpgLCLd0xgt35M'
  }
};


  const[apidata,setApiData]=useState({
    name:"",
    key:"",
    type:"",
    published_at:""
  })
 
  useEffect(()=>{
fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
  .then(res => res.json())
  .then(res => setApiData(res.results[0]))
  .catch(err => console.error(err));
  },[])
  return (
    <div className='player'>
      <img src={back_arrow} alt=""onClick={()=>{navigate(-2)}}/>
      <iframe src={`https://www.youtube.com/embed/${apidata.key}`} frameborder="0"  width="90%" height="90%"allowFullScreen></iframe>
      <div className="player-info">
        <p>{apidata.published_at.slice(0,10)}</p>
        <p>{apidata.name}</p>
        <p>{apidata.type}</p>
      </div>
    </div>
  )
}

export default Player
