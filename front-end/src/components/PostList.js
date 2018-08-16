import React from 'react';
import Post from './Post';

function PostList(props) {
    return props.posts.map(( (post, index) => <Post className="postCard" key={index} post={post} />));
}

export default PostList;