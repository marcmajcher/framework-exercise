'use strict';

/* eslint-env browser */
/* globals Vue */

(() => {
    const postList = [];

    fetch('data.json')
        .then(res => res.json())
        .then(json => postList.push(...json));

    Vue.component('mb-post', {
        props: ['post'],
        template: '<li><b>{{post.title}}:</b> <p>{{post.body}}</p></li>'
    });

    const mbApp = new Vue({ // eslint-disable-line no-unused-vars
        el: '#mb-app',
        data: {
            posts: postList
        }
    });
})();
