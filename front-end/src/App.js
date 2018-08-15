import React, { Component } from 'react';
import cosmos from './cosmos.jpg';
import './App.css';


let sampleText = `This is the sample text, just testing out how to use React on a very simple level and I\'m not trying to get complex in the slightest at all, zero, NIP!`;

let title = `Cosmos gazing`;
let author = `Vid Trent`;
let imageSource = cosmos;
let imageAlt = `Visuals of the cosmos`;
let appTitle = 'Reddit Look-alike Thingy';

function Image(props) {
    return (
        <img className="img-fluid rounded p-3" src={props.imageSource} alt={props.imageAlt} />
    );
}

function Author(props) {
    return (
         <span>{props.author}</span>
       
    );
}

function Title(props) {
    return (
       <header className="font-weight-bold">
         <span>{props.title}</span>
       </header>
    );
}

function Comment(props) {
    return (
        <div className="col-12">
          <p>{props.comment}</p>
        </div>
    );
}

function Sample(props) {
    return (
        <p>{props.sampleText}</p>
    );
}





class Post extends Component {

    constructor(props) {
        super(props);
        this.state = {
            numberOfComments: 0,
            numberOfDays: 0,
            date: Date(),
            isHidden: true
        }
    }

    
    

    render() {
        let days = this.state.numberOfDays;
        let comments = this.state.numberOfComments;
        let postedDate = this.state.date.slice(0, 15)

        return (
            <div className="row mt-5 bg-light border rounded">
               <div className="col-xs-12 col-sm-4 col-lg-3">
                 <Image imageSource={imageSource} imagealt={imageAlt} />
               </div>
               <div className="col-xs-12 col-sm-6 col-lg-7 p-3">
                 <title title={title}/>
                 <Sample sampleText={sampleText} />
                 <span>{postedDate} | {comments} comments</span>
                 <Comment comment="This is a comment, stupid!" />
               </div>
               <div className="col-xs-12 col-sm-2 p-3 text-right">
               <Author author={author}/>
               </div>
            </div>
        );
    }
    
}



class App extends Component {
    
    render() { 
        
        return (
          <div>
            <nav className="navbar navbar-light bg-light border-bottom">
              <span className="navbar-brand mb-0 h1 name">{appTitle}</span>
            </nav>
              <div className="container-fluid">
                <div className="row d-flex justify-content-center">
                  <div className="col-11">
                  <Post />
                </div>
              </div>
            </div>
          </div>
        );
    }
}
 
export default App;


