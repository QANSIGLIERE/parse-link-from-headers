function linkParser(headersObject) {
    let result = null;
    if (headersObject) {
        if (Object.keys(headersObject).includes('link')) {
            result = {};
            headersObject.link.split(',').forEach(x => {
                let value = x.split('; rel=');
                result[
                    value[1]
                        .trim()
                        .substring(1, value[1].length - 1)
                        .trim()
                ] = value[0]
                    .trim()
                    .substring(1, value[0].length - 2)
                    .trim();
            });
            return result;
        } else {
            return result;
        }
    } else {
        return result;
    }
}

module.exports.linkParser = linkParser;
