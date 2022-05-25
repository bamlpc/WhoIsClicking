//TODO: fix the types
import MongoDatabase from '../helper/mongodb.ts'
import { validateTodo } from '../utils/validation.ts';
import {ITodo} from '../model/todoModel.ts'

const mongoDb = MongoDatabase.getInstance().getDatabase.collection('todo');

const get = async (context: any) => {
    console.log('Getting a todo');
    try {
        const todo = {
            tittle: "My todo",
            description: "Todo description",
            created_at: new Date()
        }
        const response = {
            success: true,
            todo

        }
        context.response.body = JSON.stringify(response);
    } catch (error) {
        const response = {
            success: false,
            error
        }
        context.response.status = 500;
        context.response.body = JSON.stringify(response);
    }
    
}

const post = async(context: any) => {
    console.log('Adding a TODO');

    const body = context.request.body();
    const data = <ITodo> await body.value;
    let response: Object;
    try {
        await validateTodo(data);
        const reqResponse = await mongoDb.insertOne(data);
        response = {
            succes: true,
            data
        }
    } catch (error) {
        response = {
            success: false,
            error
        }
    }
    context.response.body = JSON.stringify(response);
}

export {get, post}