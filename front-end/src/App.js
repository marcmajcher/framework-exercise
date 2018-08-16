import React, { Component } from 'react';
import './App.css';
import Form from './Form';
import data from './data';
import NewPost from './NewPost';

console.log(data);

let appTitle = 'Reddit Copy Cat';



//class components
class Post extends Component {

    constructor(props) {
        super(props);
        this.state = {
            numberOfComments: 0,
            numberOfDays: 0,
            date: Date(),
            isHidden: true,
            userName: ''
            
        };
    }
    render() {
        
        let days = this.state.numberOfDays;
        let comments = this.state.numberOfComments;
        let postedDate = this.state.date.slice(0, 15)

        
        for(let i = 0; i < data.length; i++) {
            let userData = data[i];
            let title = userData.title;
            let body = userData.body;
            let author = userData.author;
            let image = userData.image;

            return (

            <div className="row mt-5 bg-light border rounded">
               <div className="col-xs-12 col-sm-4 col-lg-3">
                 <img className="img-fluid rounded p-3" src={image} />
               </div>
               <div className="col-xs-12 col-sm-6 col-lg-7 p-3">
                 <header className="m-2">
                    <span className="bolder">{title} | ^ </span>
                 </header>
                <div className="col-12">
                   <p>{body}</p>
                </div>
                <span className="m-2 bolder">{postedDate} | {comments} comments</span>
                </div>
                <div className="col-xs-12 col-sm-2 p-3 text-right">
                  <span className="bolder">{author}</span>
                </div>
            </div>
        );
    } //this is the end bracket to the loop... experimenting with this.
  }
}

class App extends Component {

    onSubmit = (fields) => {
        console.log(`App component got: ` , fields);
    };
    
    render() { 
        
        return (
          <div className="App">
            <nav className="navbar navbar-light bg-light border-bottom">
              <span className="navbar-brand mb-0 h1 name bolder">{appTitle}</span>
            </nav>
                <NewPost />
              <Form onSubmit={fields => this.onSubmit(fields)} />
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


