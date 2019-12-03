const dotenv = require('dotenv');
const Snoowrap = require('snoowrap');

dotenv.config();

function getClient() {
    return new Snoowrap({
        userAgent: 'r-imaginary-landscapes by lindenmarx',
        clientId: process.env.APP_ID,
        clientSecret: process.env.APP_SECRET,
        username: process.env.REDDIT_USER,
        password: Buffer.from(process.env.REDDIT_PWD, 'base64').toString('ascii')
    });
}


async function getTopPosts() {
    const client = getClient();
    return client
        .getSubreddit('ImaginarySeascapes')
        .getHot()
}


module.exports = {
    getTopPosts: getTopPosts
};
