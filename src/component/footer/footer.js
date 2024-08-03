import React from 'react';
import './footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin,faFacebook ,faTwitter,faGithub  } from '@fortawesome/free-brands-svg-icons';

function Footer (){
    return(
        < >
            <div className="info" style={{textAlign:'center', }}>
                <div className='L&F' >
                    <div className='icon'>
                        <a href='http://google.com'> 
                          <FontAwesomeIcon icon={faLinkedin} size="2x" />
                        </a>
                        
                    </div>
                    <div className='icon'>
                        <a href='http://google.com'> 
                             <FontAwesomeIcon icon={faFacebook} size="2x" />
                        </a>
                    </div>
                </div>
                <div className=''>
                     <button className='butt'>CONTACT ME</button>
                </div>
            <div className='T&G'>
                <div className='icon'>
                    <a href='http://google.com'> 
                         <FontAwesomeIcon icon={faTwitter} size="2x" />
                    </a>
                </div>
                <div className='icon'>
                     <a href='http://google.com'> 
                          <FontAwesomeIcon icon={faGithub} size="2x" />
                     </a>
                </div>
            </div>
           
            </div>

            <div>
                <h3 style={{textAlign:'center'}}>copy right © 2024</h3>
            </div>
        </>
    );
}
export default Footer;