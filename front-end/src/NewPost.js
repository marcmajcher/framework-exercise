import React from 'react';
import './form.css';
import data from './data';

class NewPost extends React.Component {
    
    render() { 
        return (  
                <div>
                  <button className="btn btn-primary right">New Post</button>
                </div>
        );
    }
}
 
export default NewPost;