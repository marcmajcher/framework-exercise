import React from 'react';
import './form.css';
import data from './data';

class NewPost extends React.Component {
    
    render() { 
        return (  
                <div className="flex-container">
                    <input type="text" className="form-control filter" placeholder="Filter" />
                    <span className="m-2">Sort By Votes</span>
                  <button className="btn btn-primary right">New Post</button>
                </div>
        );
    }
}
 
export default NewPost;