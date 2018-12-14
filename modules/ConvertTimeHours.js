function getTimeConverterHours() {
    var time = 3700;
    var hours = Math.floor(time / 3600);
    var minutes = Math.floor(time / 60);
    var seconds = time - minutes * 60;

    console.log('Time: ', hours, 'hours ', minutes, 'min ', seconds, 's');
}

exports.print = getTimeConverterHours;