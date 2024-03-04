"use strict";
// Interface
let author = { name: 'John', age: 30 };
let post = { title: 'Work Balance', readingTime: 2, author: author };
// return interface
function createPost(post) {
    console.log(`${post.title} is created by ${post.author.name}`);
    return post;
}
let newPost = createPost(post);
// array with interface
let posts = [];
posts.push(newPost);
console.log(posts);
