import * as yup from 'yup';

const LoginValidate = yup.object().shape({
  username: yup
    .string()
    .email('Must be an Email Address')
    .trim()
    .required('Email is required'),
  password: yup
    .string()
    .trim()
    .required('Password is required')
    .min(6, 'Password must be at least 6 characters')
    .max(50, 'Password must be at most 50 characters'),
});

// TODO: validacion para el registro
const RegisterValidate = yup.object().shape({
  username: yup
    .string()
    .email('Must be an Email Address')
    .trim()
    .required('Email is required'),
  password1: yup
    .string()
    .trim()
    .required('Password is required')
    .min(6, 'Password must be at least 6 characters')
    .max(50, 'Password must be at most 50 characters'),
  //.matches(/ATLEASTONENUMBER/, 'Password must have at least 1 number')
  //.matches(/ATLEASTONEletter/, 'Password must have at least 1 letter')
  //.matches(/ATLEASTONECAPLETTER/, 'Password must have at least 1 cap letter'),
});

export { LoginValidate, RegisterValidate };
