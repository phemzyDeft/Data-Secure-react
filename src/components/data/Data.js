import React from 'react';
import './Data.css';
import {Link} from 'react-router-dom';

function Data(props) {
    return (
        <div className='data'>
            <div className="container">
                <div className="content">
                    <h2><span>Data</span> Recovery</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem hic consectetur nulla harum recusandae unde sed quo. Delectus odit, quae, accusantium quo vel autem omnis perferendis enim aliquam voluptate ipsum?</p>
                    <div>
                        <button><Link to='/contact' style={{color: 'white'}}>Sign Up</Link></button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Data;