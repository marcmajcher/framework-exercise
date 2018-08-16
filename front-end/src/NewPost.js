import React from 'react';
import './form.css';
import data from './data';

class NewPost extends React.Component {

    // constructor(props) {
    //     super();

    //     this.state = {
    //         showResults: true
    //     }
    //     console.log(this.state.showResults);
    // }
    //  (this.state.showResults === true)

    render() { 
        return (  
                <div className="flex-container">
                    <input type="text" className="form-control filter" placeholder="Filter" />
                    {/* <span className="m-2">Sort By Votes</span> */}

                    <div className="input-group mb-3">
                      <div className="input-group-prepend">
                        <button id="filter-btn" className="btn btn-outline-secondary dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">filter</button>
                       <div className="dropdown-menu">
                          <a className="dropdown-item" href="#">Votes</a>
                          <a className="dropdown-item" href="#">Date</a>
                          <a className="dropdown-item" href="#">Title</a>
                    </div>
                </div>
             </div>

                            
                  <button className="btn btn-primary right">New Post</button>
                </div>
        );
    }
}
 
export default NewPost;