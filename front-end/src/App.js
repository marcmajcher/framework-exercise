import React, { Component } from 'react';
import './App.css';
import './form.css';
import Form from './Form';
import postsData from './data';
import Filter from './components/Filter';
import NewPostButton from './components/NewPostButton';
import PostList from './components/PostList';

console.log(postsData);

let appTitle = 'Reddit Copy Cat';

//class components

class App extends Component {

    constructor(props) {
        super(props)
        // Set initial state for our App.
        this.state = {
            currentSearchTerm: '',
            currentSortOption: 'title',
            showPostForm: false,
            posts: postsData
        }
        this.updateCurrentSearchTerm = this.updateCurrentSearchTerm.bind(this);
        this.updateCurrentSortOption = this.updateCurrentSortOption.bind(this);
        this.toggleShowPostForm = this.toggleShowPostForm.bind(this);
        this.updatePostsArray = this.updatePostsArray.bind(this);
    }

    // method to tell children components how to update currentSearchTerm.
    updateCurrentSearchTerm(newSearchTerm) {
        this.setState({
            currentSearchTerm: newSearchTerm
        });
        console.log('Current Search Term', newSearchTerm);
    }

    // method to tell children components how to update currentSortOption.
    updateCurrentSortOption(sortOption) {
        this.setState({
            currentSortOption: sortOption
        });
    }

    updatePostsArray(postObj) {
        this.setState({
            posts: this.state.posts.concat([postObj])
        })
    }

    toggleShowPostForm() {
        this.setState({
            showPostForm: !this.state.showPostForm
        });
        console.log('toggling biatch!');
    }

    onSubmit = (fields) => {
        console.log(`App component got: ` , fields);
    };
    
    render() { 
        
        return (
          <div className="App">
            <nav className="navbar navbar-light bg-light border-bottom">
              <span className="navbar-brand mb-0 h1 name bolder">{appTitle}</span>
            </nav>
            <section className="flexContainer">
                <Filter updateSearchTerm={searchTerm => this.updateCurrentSearchTerm(searchTerm)} updateSortOption={sortOption => this.updateCurrentSortOption(sortOption)}/>
                <NewPostButton toggle={() => this.toggleShowPostForm()} />
            </section>
            
            {/* {this.state.currentSearchTerm}
            <hr />
            {this.state.currentSortOption} */}

            {this.state.showPostForm && <Form addPost={newPost => this.updatePostsArray(newPost)} />}
            <PostList posts={this.state.posts} />
          </div>
        );
    }
}
 
export default App;


