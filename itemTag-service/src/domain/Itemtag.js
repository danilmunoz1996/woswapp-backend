const { v4: uuidv4 } = require('uuid');

    class Itemtag {
        constructor({ createdBy, updatedAt, updatedBy, deletedAt, deletedBy, name }) {
            this.createdAt = Date.now().toString();
           this.createdBy = createdBy || null;
       this.updatedAt = updatedAt || null;
       this.updatedBy = updatedBy || null;
       this.deletedAt = deletedAt || null;
       this.deletedBy = deletedBy || null;
       this.name = name || null;

            this.itemTagId = uuidv4() + '_' + this.createdAt;
        }

        toItem() {
            return {
                itemTagId: this.itemTagId,
                createdAt: this.createdAt,
                createdBy: this.createdBy, updatedAt: this.updatedAt, updatedBy: this.updatedBy, deletedAt: this.deletedAt, deletedBy: this.deletedBy, name: this.name,
            };
        }

        pk() {
            return this.itemTagId;
        }

        static sortKey(key) {
            return key.split('_')[1];
        }

        static getKeys(pk) {
            return {
                itemTagId: pk,
                createdAt: Itemtag.sortKey(pk)
            };
        }
            
    }

    module.exports = Itemtag;
    