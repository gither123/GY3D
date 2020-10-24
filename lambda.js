var url = require('url');
var https = require('https');
var util = require('util');
import commentPost from './src/components/exterier/commentPost';
var POST_OPTIONS = {
    hostname: 'hooks.slack.com',
    path: 'https://hooks.slack.com/services/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',
    method: 'POST',
  };

exports.handler = (event, context, callback) => {
    const message = {
        channel: event.Records[0].Sns.Subject || 'general',
        text: event.Records[0].Sns.Message
    };
    console.log('From SNS:', message);
    var r = https.request(POST_OPTIONS, function(res) {
                        res.setEncoding('utf8');
                        res.on('data', function (data) {
                            context.succeed("Message Sent: " + data);
                     });
    }).on("error", function(e) {context.fail("Failed: " + e);} );
    r.write(util.format("%j", message));
    r.end();
};

Sns = 'Hello';

