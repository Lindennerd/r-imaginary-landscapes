const reddit = require('./redditWrapper');

reddit.getTopPosts()
    .then(posts => console.log(posts.map(p => {return {
        author: p.author,
        url: p.url
    } })))
    .catch(err => console.log(err))
