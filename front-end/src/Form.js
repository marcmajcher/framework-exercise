import React from 'react';
import './form.css';

class Form extends React.Component {

    state = { 
        postTitle: 'This is the title',
        body: 'This is the body of the post',
        author: 'David Miller is the author',
        imageUrl: 'https://picsum.photos/200'
     }

    render() { 
        return (  

        <form>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input type="text" className="form-control" value={this.state.postTitle} onChange={event => this.setState({ postTitle: event.target.value})}/>
         </div>
        <div className="form-group">
           <label htmlFor="body">Body</label>
           <input type="text" className="form-control"  value={this.state.body} onChange={event => this.setState({body: event.target.value})}/>
          </div>
          <div className="form-group">
            <label htmlFor="Author">Author</label>
            <input type="text" className="form-control" value={this.state.author} onChange={event => this.setState({author: event.target.author})}/>
         </div>
        <div className="form-group">
           <label htmlFor="imgURl">Image URL</label>
           <input type="text" className="form-control"  vlaue={this.state.imageUrl} onClick={event => this.setState({imageUrl: event.target.imageUrl})}/>
          </div>
          <button type="button" className="btn btn-primary">Create Post</button>
        </form>
        );
    }
}
 
export default Form;