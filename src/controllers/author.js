import authorService from '../services/author.js';

const getAuthor = async (req, res) => {
        const { id } = req.params;

        // const response = await author.getAuthor(id);

        res.send(`You sent me ${id} through the get author API`);
};

const getAuthors = async (req, res) => {

    const { gender, name = '' } = req.query;

    // const response = await author.getAuthors(Number(gender), name.toString());

    res.send(`You sent me ${gender} AND ${name} through the get authors API`);
};

const createAuthor = async (req, res) => {
    const { gender, name = '' } = req.body;

    res.send(`You sent me ${gender} AND ${name} through the create author API`);
};

const deleteAuthor = async (req, res) => {
    const { id } = req.params;

    // const response = await author.deleteAuthor(id);
    res.send(`You sent me ${id} through the delete author API`);

}

const updateAuthor = async (req, res) => {
    const { id } = req.params;

    const { gender, name } = req.body;

    res.send(`You sent me ${id}, ${gender} AND ${name} through the update author API`);
}


export default {
    getAuthor,
    createAuthor,
    getAuthors,
    deleteAuthor,
    updateAuthor
};
