const { WebClient } = require('@slack/client');

module.exports.getUsers = (req, res, next) => {
    const web = new WebClient(process.env.SLACK_ACCESS_TOKEN);
    web.users.list().then(response => {
        req.contentReturn = {
            response,
        }
        return next();
    }).catch(err => console.log(err));
}

module.exports.sendUserDM = (req, res, next) => {
    const web = new WebClient(process.env.SLACK_ACCESS_TOKEN);
    const userId = req.params.id;
    const { message } = req.body;

    web.chat.postMessage({
        channel: userId,
        text: message,
    }).then(response => {
        req.contentReturn = {
            response,
        }
        return next();
    }).catch(err => console.log(err));
}