const { v4: uuidv4 } = require('uuid');

    class Match {
        constructor({ createdBy, updatedAt, updatedBy, deletedAt, deletedBy, items, status }) {
            this.createdAt = Date.now().toString();
           this.createdBy = createdBy || null;
       this.updatedAt = updatedAt || null;
       this.updatedBy = updatedBy || null;
       this.deletedAt = deletedAt || null;
       this.deletedBy = deletedBy || null;
       this.items = items || null;
       this.status = status || null;

            this.matchId = uuidv4() + '_' + this.createdAt;
        }

        toItem() {
            return {
                matchId: this.matchId,
                createdAt: this.createdAt,
                createdBy: this.createdBy, updatedAt: this.updatedAt, updatedBy: this.updatedBy, deletedAt: this.deletedAt, deletedBy: this.deletedBy, items: this.items, status: this.status,
            };
        }

        pk() {
            return this.matchId;
        }

        static sortKey(key) {
            return key.split('_')[1];
        }

        static getKeys(pk) {
            return {
                matchId: pk,
                createdAt: Match.sortKey(pk)
            };
        }
            
    }

    module.exports = Match;
    