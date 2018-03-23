const router = require('express').Router();

module.exports = (db) => {
    const Event = require('../db/event')(db);
    router.post('/event',async (request, response)=>{
        try{
            const newEvent = request.body;
            const result = await Event.create(newEvent);
            response.status(200).json({message:"Event Created"});
        }catch (e){
            console.log(e);
            response.status(400).json({message:"Error!"});
        }
    });
    router.post('/vote', async(request, response) => {
        try{
            const newVotes = request.body;
            const result = await Event.addVote(newVotes);
            response.status(200).json({message:"Voted"})
        }catch (e){
            response.status(400).json({message:e.message});
        }
    });
    return router;
};