'use strict';

/* eslint-env browser */
/* globals Vue, Vuex */

(() => {
    const postList = [];
    // Vue.use(Vuex);
    console.log(Vuex)
    const mystore = Vuex.Store({});

    console.log(mystore);
    

    fetch('data.json')
        .then(res => res.json())
        .then(json => postList.push(...json));

    Vue.component('mb-post', {
        props: ['post'],
        template: `
            <li class="mb-post">
                <div class="mb-post-title">{{post.title}}</div>
                <div class="mb-post-info">By {{post.author}} ({{post.votes}})</div>
                <img class="mb-post-thumb" :src="post.image">
                <div class="mb-post-body">{{post.body}}</div>
            </li>
        `
    });

    const mbApp = new Vue({ // eslint-disable-line no-unused-vars
        el: '#mb-app',
        // store,
        data: {
            posts: postList
        }
    });
})();
