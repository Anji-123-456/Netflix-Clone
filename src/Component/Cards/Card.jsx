import './Card.css'
import cards_data from '../../assets/cards/Cards_data'
import { useEffect, useRef, useState } from 'react'
import {Link} from 'react-router-dom'
const Card = ({title,category}) => {
  const [apiData,setApiData] = useState([])
  const cardRef = useRef();
  const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZGM1MGU2YWEzZTQ5MTY4ODMwNTk3ZGE0YTcwZGU4MyIsIm5iZiI6MTc0OTMxNzE4Mi44NjIwMDAyLCJzdWIiOiI2ODQ0NzYzZTU3YjcxYTkwMzYzMDEzNzciLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.C3DOBMVJwokSaQIGy3hVHBTQdzIa5dpgLCLd0xgt35M'
  }
};


 function addWheel(event){
  event.preventDefault();
  cardRef.current.scrollLeft += event.deltaY
 }
  useEffect(()=>{
    fetch(`https://api.themoviedb.org/3/movie/${category?category:"now_playing"}?language=en-US&page=1`, options)
  .then(res => res.json())
  .then(res => setApiData(res.results))
  .catch(err => console.error(err));
    cardRef.current.addEventListener("Wheel",addWheel)},[])
  return (
    <div className='card-data'>
      <h2>{title?title:"Popular on Netflix"}</h2>
      <div className='card-list'ref={cardRef}>
        {apiData.map((card,index)=>{
          return  <Link to={`/player/${card.id}`} key={index} className='card' >
                 <img src={`https://image.tmdb.org/t/p/w500`+card.backdrop_path} alt="" />
                 <p>{card.original_title}</p></Link>
        
        })}
      </div>
    </div>
  )
}

export default Card
