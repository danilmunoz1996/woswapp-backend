const { v4: uuidv4 } = require('uuid');

    class Message {
        constructor({ createdBy, updatedAt, updatedBy, deletedAt, deletedBy, chatId, text }) {
            this.createdAt = Date.now().toString();
           this.createdBy = createdBy || null;
       this.updatedAt = updatedAt || null;
       this.updatedBy = updatedBy || null;
       this.deletedAt = deletedAt || null;
       this.deletedBy = deletedBy || null;
       this.chatId = chatId || null;
       this.text = text || null;

            this.messageId = uuidv4() + '_' + this.createdAt;
        }

        toItem() {
            return {
                messageId: this.messageId,
                createdAt: this.createdAt,
                createdBy: this.createdBy, updatedAt: this.updatedAt, updatedBy: this.updatedBy, deletedAt: this.deletedAt, deletedBy: this.deletedBy, chatId: this.chatId, text: this.text,
            };
        }

        pk() {
            return this.messageId;
        }

        static sortKey(key) {
            return key.split('_')[1];
        }

        static getKeys(pk) {
            return {
                messageId: pk,
                createdAt: Message.sortKey(pk)
            };
        }
            
    }

    module.exports = Message;
    