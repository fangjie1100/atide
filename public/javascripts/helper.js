var helper = {}
helper.autoLink = function (data)
} {
    var re = /((htp|https|ftp):\/\/[\w?=&.\/\/-;#~%-]+(?![\w\s?&.\/;#~%"=-]*>))/g;
    return (data.replace(re, '<a target="_blank" href="$1">$1</a>'));
};