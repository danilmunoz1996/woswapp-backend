const { v4: uuidv4 } = require('uuid');

    class Itemsitemtags {
        constructor({ createdBy, updatedAt, updatedBy, deletedAt, deletedBy, itemId, itemTagId }) {
            this.createdAt = Date.now().toString();
           this.createdBy = createdBy || null;
       this.updatedAt = updatedAt || null;
       this.updatedBy = updatedBy || null;
       this.deletedAt = deletedAt || null;
       this.deletedBy = deletedBy || null;
       this.itemId = itemId || null;
       this.itemTagId = itemTagId || null;

            this.itemsItemTagsId = uuidv4() + '_' + this.createdAt;
        }

        toItem() {
            return {
                itemsItemTagsId: this.itemsItemTagsId,
                createdAt: this.createdAt,
                createdBy: this.createdBy, updatedAt: this.updatedAt, updatedBy: this.updatedBy, deletedAt: this.deletedAt, deletedBy: this.deletedBy, itemId: this.itemId, itemTagId: this.itemTagId,
            };
        }

        pk() {
            return this.itemsItemTagsId;
        }

        static sortKey(key) {
            return key.split('_')[1];
        }

        static getKeys(pk) {
            return {
                itemsItemTagsId: pk,
                createdAt: Itemsitemtags.sortKey(pk)
            };
        }
            
    }

    module.exports = Itemsitemtags;
    