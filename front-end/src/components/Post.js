import React, { Component } from 'react';

class Post extends Component {
    constructor(props) {
        super(props)
    }
    
    render() {

            return (

            <div  className="row mt-5 bg-light border rounded">
               <div id="post-card" className="col-xs-12 col-sm-4 col-lg-3">
                 <img className="img-fluid rounded p-3" src={this.props.post.image} />
               </div>
               <div className="col-xs-12 col-sm-6 col-lg-7 p-3">
                 <header className="m-2">
                    <span className="bolder">{this.props.post.title} | ^ </span>
                 </header>
                <div className="col-12">
                   <p>{this.props.post.body}</p>
                </div>
                <span className="m-2 bolder">{this.props.post.date.slice(2, 10)} | {this.props.post.comments} comments</span>
                </div>
                <div className="col-xs-12 col-sm-2 p-3 text-right">
                  <span className="bolder">{this.props.post.author}</span>
                </div>
            </div>
        );
    } 
}

export default Post;