import author from '../services/author.js';

const getAuthor = async (req, res, next) => {
    try {
        const { id } = req.params;

        const response = await author.getAuthor(id);

        res.send(response.data);
    } catch (err) {
        next(err);
    }
};

const getAuthors = async (req, res, next) => {
    try {
        const { gender, name = '' } = req.query;

        const response = await author.getAuthors(Number(gender), name.toString());

        res.send(response.data);
    } catch (err) {
        next(err);
    }
};

const createAuthor = async (req, res, next) => {
    try {
        const { name, gender } = req.body;

        const response = await author.createAuthor(gender, name);

        res.send(response.data);
    } catch (err) {
        next(err);
    }
};

const deleteAuthor = async (req, res, next) => {
    try {

        const { id } = req.params;

        const response = await author.deleteAuthor(id);

        res.send(response.data);

    } catch (err) {
        next(err);
    }
}

const updateAuthor = async (req, res, next) => {
    try {

        const { id } = req.params;

        const { gender, name } = req.body;

        const response = await author.updateAuthor(id, gender, name);
        
        res.send(response.data);
        
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
