function exists(val) {
    return !!(val && val != null && val != undefined && val != 'null' && val != 'NULL' && val != 'undefined');
}
module.exports.exists = exists;

function getValue(args, label, def) {
    return args.hasOwnProperty(label) ? args[label] : def;
}

module.exports.getValue = getValue;

function getFloat(args, label, def) {
    return parseFloat(getValue(args, label, '${def}')) || def;
}

module.exports.getFloat = getFloat;
