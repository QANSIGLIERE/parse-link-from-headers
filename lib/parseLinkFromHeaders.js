function linkParser(headersObject) {
    let result = null;
    if (headersObject) {
        if (Object.keys(headersObject).includes('link')) {
            result = {};
            headersObject.link.split(',').forEach(x => {
                let value = x.split('; rel=');
                result[value[1].replaceAll('"', '').trim()] = value[0]
                    .replaceAll('"', '')
                    .replaceAll('<', '')
                    .replaceAll('>', '')
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
