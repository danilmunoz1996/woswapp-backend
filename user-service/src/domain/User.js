const { v4: uuidv4 } = require('uuid');

    class User {
        constructor({ createdBy, updatedAt, updatedBy, deletedAt, deletedBy, name, email, phone, image }) {
            this.createdAt = Date.now().toString();
           this.createdBy = createdBy || null;
       this.updatedAt = updatedAt || null;
       this.updatedBy = updatedBy || null;
       this.deletedAt = deletedAt || null;
       this.deletedBy = deletedBy || null;
       this.name = name || null;
       this.email = email || null;
       this.phone = phone || null;
       this.image = image || null;

            this.userId = uuidv4() + '_' + this.createdAt;
        }

        toItem() {
            return {
                userId: this.userId,
                createdAt: this.createdAt,
                createdBy: this.createdBy, updatedAt: this.updatedAt, updatedBy: this.updatedBy, deletedAt: this.deletedAt, deletedBy: this.deletedBy, name: this.name, email: this.email, phone: this.phone, image: this.image,
            };
        }

        pk() {
            return this.userId;
        }

        static sortKey(key) {
            return key.split('_')[1];
        }

        static getKeys(pk) {
            return {
                userId: pk,
                createdAt: User.sortKey(pk)
            };
        }
            
    }

    module.exports = User;
    