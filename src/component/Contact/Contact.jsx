import React from 'react';
import { Container } from 'react-bootstrap';

const Contact = () => {
    return (
        <Container className='mt-5' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <div className="mockup-phone">
          <div className="camera"></div>
          <div className="display">
            <div className="artboard artboard-demo phone-1">
              


                <div class="col-md-9 mb-md-0 mb-5">
            <form id="contact-form" name="contact-form" action="mail.php" method="POST">

                <div class="row">

                    <div class="col-md-6">
                        <div class="md-form mb-0">
                            <input type="text" id="name" name="name" class="form-control"/>
                            <label for="name" class="">Your name</label>
                        </div>
                    </div>
                
                    <div class="col-md-6">
                        <div class="md-form mb-0">
                            <input type="text" id="email" name="email" class="form-control"/>
                            <label for="email" class="">Your email</label>
                        </div>
                    </div>
                  

                </div>
              
                <div class="row">
                    <div class="col-md-12">
                        <div class="md-form mb-0">
                            <input type="text" id="subject" name="subject" class="form-control"/>
                            <label for="subject" class="">Subject</label>
                        </div>
                    </div>
                </div>
         
                <div class="row">

                    <div class="col-md-12">

                        <div class="md-form">
                            <textarea type="text" id="message" name="message" rows="2" class="form-control md-textarea"></textarea>
                            <label for="message">Your message</label>
                        </div>

                    </div>
                </div>
           

            </form>

            <div className='mt-1' class="text-center text-md-left">
                <a class="btn btn-primary" onclick="document.getElementById('contact-form').submit();">Send</a>
            </div>

            <h1 className='mt-5'>Email : rifatrahman47@gmail.com</h1>
                <h1 className='mt-2'>Mobile : 01776450470</h1>

            </div>
          </div>

          
  </div>


  </div>




      </Container>
      
    );
};

export default Contact;