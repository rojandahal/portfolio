import React from 'react'
import "./contact.css"
import Button from '../../components/Buttons/Button'
import Menu from '../../components/Menu/Menu'

function Contact() {
  return (
    <>
    <Menu/>
    <div className="container">
        <div className="wrapper">
            <div className="title">
                <h2>Contact Me</h2>
            </div>
            <div className="contact-form">
                <input type="text" name="fullname" id="name" placeholder="Full Name" />
                <input type="text" name="email" id="email" placeholder="Email" />
                <input type="text" name="message" id="message" placeholder="Message" />
                <Button text="Send Message" newClass="button-send"></Button>
            </div>
        </div>
    </div>
    </>
  )
}

export default Contact