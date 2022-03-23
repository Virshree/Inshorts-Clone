import Nav from './components/Nav';
import './App.css';
import { useState } from 'react';
import axios from 'axios';
import API_KEY from './keys';
import { useEffect } from 'react';
import NavContent from './components/NavContent';
function App() {
  const[category,setcategory]=useState('general');
  const[newsResult,setnewsResult]=useState()
  const[newsArray,setnewsArray]=useState([])
  const[loadmore,setLoadmore]=useState(10);

  const newsApi=async()=>{
    try{
const news=await axios.get(`
https://newsapi.org/v2/top-headlines?country=in&apiKey=${API_KEY}&category=${category}&pageSize=${loadmore}`)
    
    console.log(news);
 
    setnewsArray(news.data.articles);
    setnewsResult(news.data.totalResults);
  
    }
    catch(error){
      console.log(error)
    }
  }
  
  useEffect(()=>{
    newsApi();
  
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[category,loadmore,newsResult])

  return (
    <div className="app">
      <Nav  setcategory={setcategory}/>
    <NavContent newsArray={newsArray} newsResult={newsResult} loadmore={loadmore} setLoadmore={setLoadmore}/>
    </div>
  );
}

export default App;
