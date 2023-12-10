const { v4: uuidv4 } = require('uuid');

    class Item {
        constructor({ createdBy, updatedAt, updatedBy, deletedAt, deletedBy, userId, name, description, images }) {
            this.createdAt = Date.now().toString();
           this.createdBy = createdBy || null;
       this.updatedAt = updatedAt || null;
       this.updatedBy = updatedBy || null;
       this.deletedAt = deletedAt || null;
       this.deletedBy = deletedBy || null;
       this.userId = userId || null;
       this.name = name || null;
       this.description = description || null;
       this.images = images || null;

            this.itemId = uuidv4() + '_' + this.createdAt;
        }

        toItem() {
            return {
                itemId: this.itemId,
                createdAt: this.createdAt,
                createdBy: this.createdBy, updatedAt: this.updatedAt, updatedBy: this.updatedBy, deletedAt: this.deletedAt, deletedBy: this.deletedBy, userId: this.userId, name: this.name, description: this.description, images: this.images,
            };
        }

        pk() {
            return this.itemId;
        }

        static sortKey(key) {
            return key.split('_')[1];
        }

        static getKeys(pk) {
            return {
                itemId: pk,
                createdAt: Item.sortKey(pk)
            };
        }
            
    }

    module.exports = Item;
    