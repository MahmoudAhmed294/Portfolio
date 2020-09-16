import React, { Component } from 'react';
import {Drop,DropSpan,DropTitle,Form,FromInput,Inputemail,InputSub,Inputsubmit, InputText, TextArea} from'./style';

class Contact extends Component {
  render(){

    return (
        <Drop >
          <div >
            <DropTitle ><DropSpan>Drop </DropSpan>Me A line</DropTitle>
            <Form action="">
              <FromInput >
                  <Inputemail type="email" placeholder="Your Email"/>
                <InputText type="text" placeholder="Your Name"/>
              </FromInput>
              <InputSub type="text"  placeholder="Your Subject"/>
                <TextArea cols="30" rows="10" placeholder="Your Message"></TextArea>
                <Inputsubmit type="submit" value="Send Message"/>
            </Form>
          </div>
        </Drop>
  )
    }
}

export default Contact;
