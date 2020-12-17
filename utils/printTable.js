const printTable = (arr) => {

    let data = arr.map(doc => {doc.toObject()});
    return console.table(data);
}

module.exports = printTable;