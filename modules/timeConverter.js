function getTimeConverter(uptime) {
    return ((uptime / 3600).toFixed(0))  + ' godzin '  + ((Math.floor((uptime % 3600) / 60)).toFixed(0)) +  ' min. ' +  ((Math.floor(uptime % 60))) +  ' sek. ';
}

exports.uptimeSystem = getTimeConverter;