import mongoose from "mongoose";

import Author from '../models/Author.js'
import { error } from "console";

/* 
Our services, your app's business logic exists here. 

1) Get the data sent over to you from the controller
2) Do whatever you need to do with it.
3) Return the result
**/


    const getAuthor = async (id) => {

        // Step 1
        console.log(id);

        // Step 2
        

        return {
            status: 'OK',
            data: `You sent me this = ${id}`
        }
    
    }

    const getAuthors = async (gender, name) => {
            const response = await Author.find({
                $and: [
                    { name: new RegExp(name, 'i') },
                    { gender },
                ],
                }, {
                    $match: {
                        test: '11'
                    }
                });

            return {
                data: response,
            }

    }

    const createAuthor = async (gender, name) => {

            const response = await Author.create({
                name,
                gender
            });

            return {
                data: response,
            }
    }

    const deleteAuthor = async (id) => {
    
        const response = await Author.deleteOne({ _id: id})

        if (response.deletedCount < 1) throw new Error('Unable to delete non-existend author');

        return {
            data: response,
        }
    }

    const updateAuthor = async (id, gender, name) => {
            const response = await Author.findByIdAndUpdate(id, {
                gender,
                name,
            }, { new: true });

            return {
                data: response,
            }
        
    }


export default {
    getAuthor,
    getAuthors,
    createAuthor,
    deleteAuthor,
    updateAuthor
}
