var os = require('os');

function getConvertTimeMinutes() {
    var time = 125;

    var minutes = Math.floor(time / 60);
    var seconds = time - minutes * 60;

    console.log('Time: ', minutes, 'min ', seconds, 's');
}

exports.print = getConvertTimeMinutes;

