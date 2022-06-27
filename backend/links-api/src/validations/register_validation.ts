import {validate, required, isEmail, RouterContext } from 'deps';

const RegisterValidation =async ({request, response}: RouterContext<"/register">, next: Function) => {
    const body = await request.body().value;
    
    const [passes, errors] = await validate(body, {
        username: [required, isEmail],
        password: [required]
    })
    if(!passes){
        response.status = 400;
        response.body = errors;
        return;
    }
    //TODO:need to check for unique email
    // a function that reach mongo with the email
    /*if(!emailCheck){
        response.status = 400;
        response.body = "Invalid e-mail";
        return;
    }
    */
    await next();
}

export default RegisterValidation;