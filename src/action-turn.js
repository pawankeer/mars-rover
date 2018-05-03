const mapping = {
    'NL': 'W',
    'NR': 'E',
    'SL': 'E',
    'SR': 'W',
    'WR': 'N',
    'WL': 'S',
    'ER': 'S',
    'EL': 'N'
};

module.exports.actionTurn = function (currentOrrientation, direction) {
    return mapping[`${currentOrrientation}${direction}`];
};