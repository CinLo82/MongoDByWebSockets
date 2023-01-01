
const Model = require('./model')
   
function addMessage(message) {
    const myMessage = new Model(message);
    myMessage.save();
}

async function getMessenges(filterUser) {
    let filter = {};
    if (filterUser !== null) {
        filter = { user: filterUser }
    }
  const message = await Model.find(filter);
  return message;
}

function removeMessage(id) {
    return Model.deleteOne({
        _id: id
    });
}

async function updateText(id, message) {
    const foundessage = await Model.findOne({
        _id: id
    });
    foundessage.message = message; 
    const newMessage = await foundessage.save();
    return newMessage;
}

module.exports = {
    add: addMessage,
    list: getMessenges,
    updateText: updateText,
    remove: removeMessage,
   
}