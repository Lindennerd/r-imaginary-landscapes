const dotenv = require('dotenv');
const reddit = require('./redditWrapper');

dotenv.config();

reddit.auth()
    .then(subreddit => console.log(subreddit))
    .catch(err => console.log(err))
