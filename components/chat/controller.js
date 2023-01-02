const store = require('./store');

function addChat(users) {

    return new Promise((resolve, reject) => {
        if(!users) {
            console.error('[messageController] No hay datos de usuarios');
            return reject('Los datos son incorrectos');
        }

        const chat = {
            users: users,
        }
    
        store.add(chat);
        resolve(chat);
    });
  
}

function listChats(userId) {
    return store.list(userId);
}

module.exports = {
     addChat,
     listChats,
}