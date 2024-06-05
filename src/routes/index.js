import express from 'express';

import author from '../controllers/author.js';

const router = express.Router();

// Author
router.get('/author/:id', author.getAuthor);
// router.get('/author', author.);
router.post('/author');
router.delete('/author');
router.patch('/author');

// Hello
router.get('/helloworld', (req, res) => {
    try {
        res.send('Hello human');
    } catch (err) {
        res.status(400).send(err);
    }
});

export default router;
