import React from 'react';
import Post from './Post';

function PostList(props) {
    return props.posts.map(( (post, index) => <Post key={index} post={post} />));
}

export default PostList;