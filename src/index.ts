// Interface

interface Author {
    name: string,
    age: number
}

let author : Author = { name: 'John', age: 30 };

interface Post {
    title: string,
    readingTime: number,
    author: Author
}

let post : Post = { title: 'Work Balance', readingTime: 2, author: author };

// return interface
function createPost(post: Post): Post {
    console.log(`${post.title} is created by ${post.author.name}`);
    return post;
}

let newPost = createPost(post);

// array with interface
let posts: Post[] = [];

posts.push(newPost);

console.log(posts);
