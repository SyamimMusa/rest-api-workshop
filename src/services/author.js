export default class AuthorService {
    async getAuthor(id) {
        try {
            return {
                status: 'OK',
                data: id,
            };
        } catch (err) {
            return {
                status: 'Not OK',
                message: err,
            };
        }
    }

    async getAuthors(gender, name) {
        try {
            console.log(gender, name);
            return {
                status: 'OK',
                data: [],
            };
        } catch (err) {
            return {
                status: 'Not OK',
                message: err,
            };
        }
    }

    async createAuthor(gender, name) {
        try {
            console.log(gender, name);
            return {
                status: 'OK',
                data: [],
            };
        } catch (err) {
            return {
                status: 'Not OK',
                message: err,
            };
        }
    }
}
