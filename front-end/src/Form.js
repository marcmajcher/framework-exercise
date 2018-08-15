import React from 'react';
import './form.css';
import data from './data';

let userData = data;


class Form extends React.Component {
    
    state = { 
        postTitle: 'Sample Title',
        body: 'This is the sample body of the post',
        author: 'David Miller is the author',
        imageUrl: 'https://picsum.photos/200'
     }

     

     onSubmit = (event) => {
         event.preventDefault();
         this.props.onSubmit();
         console.log(this.state);
     }
     

    render() { 
        return (  

        <form>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input type="text" className="form-control" placeholder="Title" value={this.state.value} onChange={event => this.setState({ postTitle: event.target.value})}/>
         </div>
        <div className="form-group">
           <label htmlFor="body">Body</label>
           <input type="text" className="form-control"  placeholder="Body" value={this.state.value} onChange={event => this.setState({body: event.target.value})}/>
          </div>
          <div className="form-group">
            <label htmlFor="Author">Author</label>
            <input type="text" className="form-control" placeholder="Author" value={this.state.value} onChange={event => this.setState({author: event.target.value})}/>
         </div>
        <div className="form-group">
           <label htmlFor="imgURl">Image URL</label>
           <input type="text" className="form-control"  placeholder="Image URL" vlaue={this.state.value} onChange={event => this.setState({imageUrl: event.target.value})}/>
          </div>
          <button type="button" className="btn btn-primary" onClick={(event) => this.onSubmit(event)}>Create Post</button>
        </form>
        );
    }
}
 
export default Form;