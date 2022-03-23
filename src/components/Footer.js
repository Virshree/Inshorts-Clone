import React from 'react'
import './Footer.css';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
function Footer() {
  return (
    <div className='footer'>
            <div className='footer-text'>
                <div>

                    <img className='footer-img' src="data:image/png;base64,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" alt="logo img"/>
                    <span  className="footer-logo"style={{color:"white" ,fontSize:"30px"}}>inshorts</span>
                    <div className='footer-smalltext'>
                       <p style={{display:"inline"}}>Inshorts <span style={{color:"gray"}}> Pte. Ltd <br/>©COPYRIGHT 2022</span></p>
                        
                    </div>
                    
                 </div>
                 <div className='vertical'>
                    <span  className="footer-logo"style={{color:"white" ,fontSize:"30px"}}>Contact us</span>
                    <div className='footer-smalltext'>
                        <p>Terms & conditions</p>
                         <p>Privacy Policies</p>
                    </div>
                    
                 </div>
                 <div className='footer-icons'>
                     
                  <a className='icons' href="https://www.facebook.com/inshortsapp" target='_blank'>  <FacebookIcon/></a>
                   <a className='icons' href="https://twitter.com/inshorts" target='_blank'> <TwitterIcon/></a>
                    <a className='icons' href="https://in.linkedin.com/company/inshorts-group/" target='_blank'>    <LinkedInIcon/></a>
                
                    </div>
                    
            </div>
             
    </div> 

  )
}

export default Footer