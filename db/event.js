const ObjectId = require('mongodb').ObjectId;

module.exports = (db) => ({
    create : (event) => {
        return db.collection('events').insertOne(event);
    },

    addVote : async(votes) => {
        const newVote = votes.field;
        if(votes.field == 'gs'){
            return await db.collection('events').updateOne({Round:votes.Round},{$inc:{GS_Votes:1}});
        }
        if(votes.field == 'lr'){
            return await db.collection('events').updateOne({Round:votes.Round},{$inc:{LR_Votes:1}});
        }
    }
});