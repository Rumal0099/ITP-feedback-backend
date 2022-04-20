const express =require('express');
const feedback = require('../models/feedback');

const router = express.Router();

//---------create

router.post('/feedback/save', (req,res)=>{
    let newFeedback = new feedback(req.body);
    newFeedback.save((err)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:"Feedback send successfully"
        });
    });
});


//-------------read

router.get('/feedback', (req,res)=>{
    feedback.find().exec((err,feedback)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            existingFeedback:feedback
        });
    });
});


module.exports = router;