const store = require('./store');

function addMessage(user, message) {
return new Promise((resolve, reject) => {
    if(!user | !message) {
        console.error('[messageController] no hay usuario o mensaje');
        reject('Los datos son incorrectos');
        return false;
    }
     const fullMessage = {
        user: user,
        message: message,
        date: new Date(),
        }

       store.add(fullMessage);
       resolve(fullMessage);
    })
}

function getMessenges(filterUser) {
    return new Promise((resolve, reject) => {
        resolve(store.list(filterUser));
<<<<<<< HEAD
    });
=======
    })
>>>>>>> a491d949ed398a83fe7ee08a3a452ee45d692164
}

function updateMessage(id, message) {
    return new Promise(async (resolve, reject) => {
        if (!id || !message) {
            reject('Invalid data');
            return false;
        }
       const result = await  store.updateText(id, message);
       resolve(result);
    });

}

function deleteMessage(id) {
    return new Promise((resolve, reject) => {
      if (!id) {
          reject('Id invalido');
            return false;
     }
       store.remove(id)
           .then(()=> {
               resolve()})
           .catch(e => {
               reject(e);
             })
     });
}

module.exports = {
    addMessage,
    getMessenges,
    updateMessage,
    deleteMessage,
};