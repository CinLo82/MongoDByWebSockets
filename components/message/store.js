const list = [];

function addMessage(message) {
    list.push(message);
}

function getMessenges() {
    return list;
}

module.exports = {
    add: addMessage,
    list: getMessenges,
    // get
    // update
    // delete
}