import React, {useRef} from 'react';
import Map from './Map/Map';
import emailjs from '@emailjs/browser';
import '../skils/Skills.css';
import './CompContact.css';


export default function CompContacts(){
    const form = useRef(null);
    

    const sendEmail = (e:any) => {
      e.preventDefault();
      

      if(form.current ){
        
        emailjs.sendForm('service_4ubx0g1', 'template_fo9favj', form.current, 'bjMDoIOJD-HmviB57')
        .then((result) => {
            console.log(result.text);
            
        }, (error) => {
            console.log(error.text);
        });
      }
    };

    const effects = {
        animation: '1.0s ease-out 0s 1 slideInFromRight forwards'
    }

    
    return(
        <div className='skills-container'>
            <div className='clip-skill' style={effects}/>
            <div className='skills-subcontainer'>
                <h1 className="title-skills contact" >Contact me </h1>
                <div className='back map'>
                    <Map />
                    <div className="contact-subcontainer">
                        <p>If you liked my profile and want to get in touch, send me a message:</p>
                        
                        <form ref={form} onSubmit={sendEmail}>
                            <label>Name</label>
                            <input type="text" name="name" onSubmit={(e:any)=>{e.target.value = ''}} />
                            <label>Email</label>
                            <input type="email" name="email"  onSubmit={(e:any)=>{e.target.value = ''}}/>
                            <label>Message</label>
                            <textarea name="message"  maxLength={200}  onSubmit={(e:any)=>{e.target.value = ''}}/>
                            <input type="submit" value="Send" />
                        </form>
                        
                    </div>
                </div>
                
                
            </div>
        </div>
    )
}