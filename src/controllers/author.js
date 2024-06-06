import author from '../services/author.js';

/*
Our controllers, we handle our request and response here

Flow :

1) Destructure our request to get our path / body / query values.
2) Pass those values into our services.
3) Once we get a result from our service, we send those into our response method.
**/

const getAuthor = async (req, res, next) => {
    try {

        // Step 1
        const { id } = req.params;


        // Step 2
        const response = await author.getAuthor(id);

        // Step 3
        res.send(response);
    } catch (err) {
        next(err);
    }
};

const getAuthors = async (req, res, next) => {
    try {
        const { gender, name = '' } = req.query;

        const response = await author.getAuthors(Number(gender), name.toString());

        res.send('OK');
    } catch (err) {
        next(err);
    }
};

const createAuthor = async (req, res, next) => {
    try {
        const { name, gender } = req.body;

        const response = await author.createAuthor(gender, name);

        res.send('OK');
    } catch (err) {
        next(err);
    }
};

const deleteAuthor = async (req, res, next) => {
    try {

        const { id } = req.params;

        const response = await author.deleteAuthor(id);

        res.send('OK');

    } catch (err) {
        next(err);
    }
}

const updateAuthor = async (req, res, next) => {
    try {

        const { id } = req.params;

        const { gender, name } = req.body;

        const response = await author.updateAuthor(id, gender, name);
        
        res.send('OK');
        
    } catch (err) {
        next(err);
    }
}


export default {
    getAuthor,
    createAuthor,
    getAuthors,
    deleteAuthor,
    updateAuthor
};
