var os = require('os');
var timeConverter = require('./timeConverter');

function getOSinfo() {
    var type = os.type();
    if(type === 'Darwin') {
        type = 'OSX';
    } else if(type === 'Windows_NT') {
        type = 'Windows';
    }
    var release = os.release();
    var cpu = os.cpus()[0].model;

    var userInfo = os.userInfo();
    console.log('System:', type);
    console.log('Release:', release);

    var uptime = os.uptime();
    console.log('Uptime: ~', timeConverter.uptimeSystem(uptime));
    console.log('User name:', userInfo.username);
    console.log('Home dir:', userInfo.homedir);
    console.log('CPU:', cpu);
}

exports.print = getOSinfo;