import React from 'react';

function NewPostButton(props) {
    return (<button className="btn btn-primary right" onClick={event => props.toggle()}>New Post</button>)
}

export default NewPostButton;