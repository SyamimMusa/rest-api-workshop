import AuthorService from '../services/author.js';

const getAuthor = async (req, res, next) => {
    try {
        const { id } = req.params;

        const response = await new AuthorService().getAuthor(id);

        if (response.status === 'OK') {
            res.send(response.data);
        } else {
            res.status(400).send(response.message);
        }
    } catch (err) {
        next(err);
    }
};

const getAuthors = async (req, res, next) => {
    try {
        const { gender, name = '' } = req.query;

        const response = await new AuthorService().getAuthors(Number(gender), name.toString());

        if (response.status === 'OK') {
            res.send(response.data);
        } else {
            res.status(400).send(response.message);
        }
    } catch (err) {
        next(err);
    }
};

const createAuthor = async (req, res, next) => {
    try {
        const { name, gender } = req.body;

        const response = await new AuthorService().createAuthor(name, gender);

        if (response.status === 'OK') {
            res.send(response.data);
        } else {
            res.status(400).send(response.message);
        }
    } catch (err) {
        next(err);
    }
};

export default {
    getAuthor,
};
