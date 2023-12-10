const { v4: uuidv4 } = require('uuid');

    class Chat {
        constructor({ createdBy, updatedAt, updatedBy, deletedAt, deletedBy, matchId }) {
            this.createdAt = Date.now().toString();
           this.createdBy = createdBy || null;
       this.updatedAt = updatedAt || null;
       this.updatedBy = updatedBy || null;
       this.deletedAt = deletedAt || null;
       this.deletedBy = deletedBy || null;
       this.matchId = matchId || null;

            this.chatId = uuidv4() + '_' + this.createdAt;
        }

        toItem() {
            return {
                chatId: this.chatId,
                createdAt: this.createdAt,
                createdBy: this.createdBy, updatedAt: this.updatedAt, updatedBy: this.updatedBy, deletedAt: this.deletedAt, deletedBy: this.deletedBy, matchId: this.matchId,
            };
        }

        pk() {
            return this.chatId;
        }

        static sortKey(key) {
            return key.split('_')[1];
        }

        static getKeys(pk) {
            return {
                chatId: pk,
                createdAt: Chat.sortKey(pk)
            };
        }
            
    }

    module.exports = Chat;
    