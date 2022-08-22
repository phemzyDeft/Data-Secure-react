import React from 'react';
import './Contact.css';
import {Link} from 'react-router-dom';

function Contact(props) {
    return (
        <div className='contact'>
            <div className="container">
                <div className="form-container">
                    <form action="/" autoSave='on' autoComplete='off'>
                        <h1><span>Contact</span> Us</h1>
                        <div>
                            <label>Name</label>
                            <input type="text" placeholder='input your name' />
                        </div>
                        <div>
                            <label>Email</label>
                            <input type="email" placeholder='@'/>
                        </div>
                        <div>
                            <label>Message</label>
                            <textarea name="textarea" id="text-area" rows="10" placeholder='what do you have for us'></textarea>
                        </div>

                        <Link to='/'>
                        <button>Submit</button>
                        </Link>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Contact;