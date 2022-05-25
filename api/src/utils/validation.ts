import { validate, firstMessages } from 'deps';
import { todoSchema } from '../model/todoModel.ts';

const validateTodo = async(todo: Object) => {
    const [passes, errors] = await validate(todo, todoSchema);
    if(!passes) {
        throw firstMessages(errors);
    }
    return true;
}

export { validateTodo };