import express from 'express';
import { MongoClient } from 'mongodb';
import assert from 'assert';
import config from '../config'

const client = new MongoClient(config.mongodbUrl);

client.connect();

let contestsResult = {};

const db = client.db(config.dbName);
const router = express.Router();
const collection = db.collection('contests');
const findResult = collection.find({}).project({
                        id: 1,
                        categoryName: 1,
                        contestName: 1
                    }).toArray();
findResult.then(function(result) {
    contestsResult = result;
});

router.get('/contests', (req, res) => {
    let contests = {};
    contestsResult.forEach(contest => {
        contests[contest.id] = contest;
    });
    res.send(contests);
});

router.get('/contests/:contestId', (req, res) => {

});

export default router;