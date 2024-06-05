import express from 'express';

import author from '../controllers/author.js';

const router = express.Router();

// Author
router.get('/author/:id', author.getAuthor);
router.get('/author', author.getAuthors);
router.post('/author', author.createAuthor);
router.delete('/author/:id', author.deleteAuthor);
router.put('/author/:id', author.updateAuthor);


// Hello World
router.get('/helloWorld', (req, res) => {
    try {
        res.send('Hello Human');
    } catch (err) {
        res.status(400).send(err);
    }
});

export default router;
