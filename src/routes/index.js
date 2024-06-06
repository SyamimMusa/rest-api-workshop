import express from 'express';

const router = express.Router();

/**
 * HTTP METHODS
 * 1) GET
 * 2) POST
 * 3) DELETE
 * 4) PUT
 * 
 * Reference link https://restfulapi.net/http-methods/ 
 */

// Hello World
router.get('/helloworld', (req, res) => {
    res.send('Hello Human');
})


export default router;