import React from 'react';
import './NewCard.css';

function NewsCard({newsItem}) {
  
    const fullDate=new Date(newsItem.publishedAt)
   var date=fullDate.toString().split(" ")
   const hour=parseInt(date[4].substring(0,2))
   const time= hour>12 ?true:false;
   console.log(date)

    
  return (
    <div className='newscard'>
       
         <img className="newsImage" src={newsItem.urlToImage ? newsItem.urlToImage :'https://source.unsplash.com/random'}
          alt={newsItem.title}/>    
        <div className='newsText'>
            <div>
                <span className='title'>{newsItem.title}</span>
                <br/>
                <span className='author'>
                    <a  className="short-link"href={newsItem.url} target='_blank'>
                       <b>short</b> 
                   </a>{" "}
                   <span className='muted'>
                        {" "}
                        by {newsItem.author ? newsItem.author:'unknown'} /{" "}
                  
                        {
                            time ? `${hour-12}:${date[4].substring(3,5)}pm` //minutes
                            :
                            `${hour}:${date[4].substring(3,5)}am`
                        }
                       {" "} on  {date[2]} {date[1]},{date[0]}
                   </span>
                </span>
            </div>
            <div className='lowernestext'>
                <div className='description'>
                        {newsItem.description}
                </div>
                <br/>
                <span className='readmore'>
                    read more at  {"  "}
                    <a  className="source "href={newsItem.url} target='_blank'>
                        <b>{newsItem.source.name}</b>
                    </a>
                    
                </span>
               
            </div>
            
        </div>
         
</div>
  )
}

export default NewsCard;