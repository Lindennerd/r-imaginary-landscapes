const rq = require('request-promise');
const snoowrap = require('snoowrap');
const redditApi = require('reddit-oauth');

function getClient() {
    return new snoowrap({
        userAgent: 'r-imaginary-landscapes by ' + process.env.REDDIT_USER,
        clientId: process.env.APP_ID,
        clientSecret:process.env.APP_SECRET,
        refreshToken: true
    });
}

async function auth() {
    return new Promise((resolve, reject) => {
        const reddit = new redditApi({
            app_id: process.env.APP_ID,
            app_secret: process.env.APP_SECRET,
            redirect_uri: 'https://github.com/Lindennerd/r-imaginary-landscapes',
            user_agent: 'r-imaginary-landscapes by ' + process.env.REDDIT_USER
        });
    
        reddit.passAuth(
            process.env.REDDIT_USER,
            process.env.REDDIT_PWD,
            success => {
                if(success) {
                    resolve(reddit.access_token);
                } else {
                    reject(success);
                }
            }
        )
    })
    
}

module.exports = {
    auth: auth
}