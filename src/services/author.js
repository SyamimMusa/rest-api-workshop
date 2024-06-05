import mongoose from "mongoose";

import Author from '../models/Author.js'
import { error } from "console";


    const getAuthor = async (id) => {
        const response = await Author.findById(id);

        if (!response) throw new Error (`No author with this id : ${id}`)

        return {
            data: response
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
