//var os = require('os');
var OSinfo = require('../modules/OSInfo');
var timeConverter = require('../modules/timeConverter');
//var timeConverterHours = require('../modules/timeConverterHours');

process.stdin.setEncoding('utf-8');
process.stdin.on('readable', function() {
    var input = process.stdin.read();
    if(input !== null) {
        var instruction = input.trim();
        switch(instruction) {
            case '/exit':
                process.stdout.write('Quitting app!\n');
                process.exit();
                break;
            case '/sayhello':
                process.stdout.write('hello!\n');
                break;
            case '/getOSinfo':
                OSinfo.print();
                break;
            case '/getTimeConverter':
                timeConverter.print();
                break;
            // case '/getTimeConverterHours':
            //     timeConverterHours.print();
            //     break;
            default:
                process.stderr.write('Wrong instruction!\n');
        };
    }
});