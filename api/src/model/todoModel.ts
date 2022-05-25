//MODELO DE USO DE VALIDASAUR PARA NO TENER QUE BUSCAR EN BIBLIOGRAFIA
import { lengthBetween, required, isBool, isString, isDate, nullable } from 'deps'

interface ITodo{
    name: string;
    tittle: string;
    description?: string;
    done: boolean;
    color?: string;
    end_at?: Date;
    created_at: Date;
    updated_at?: Date;
}

const todoSchema = {
    name: [lengthBetween(5,100), isString, required],
    tittle: [lengthBetween(5,100), isString, required],
    description: [isString, nullable],
    done: [isBool, required],
    color: [isString, nullable],
    end_at: [isDate, nullable],
    created_at: [isDate, required],
    updated_at: [isDate, nullable],

}

export { todoSchema };
export type { ITodo };
