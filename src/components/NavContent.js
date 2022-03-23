import { Container } from '@material-ui/core';
import React from 'react'
import NewsCard  from './NewsCard';
import './NavContent.css';
import Footer from './Footer';
function NavContent({newsArray,newsResult,loadmore,setLoadmore}) {

  return (
    <div>
   <Container maxWidth='md'>
    <div className='contents' >
       {newsArray.map((newsItem) => (
          
          <NewsCard newsItem={newsItem} key={newsItem.name}/>
       ))}
       {loadmore <=newsResult && (
         <>
         <hr/>
          <button onClick={()=>setLoadmore(loadmore+20)}
          className='loadmore'>Load More</button>
         </>
       )}
       
  
     </div>
    
   </Container>
   <Footer/>
   </div>
 
  
  )
   
}

export default NavContent;