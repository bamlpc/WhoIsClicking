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

const ResetPasswordValidate = yup.object().shape({
  email: yup
    .string()
    .trim()
    .email('Must be an Email Address')
    .required('Token is required')
});

const RecoveryTokenValidate = yup.object().shape({
  token: yup
    .string()
    .trim()
    .required('Token is required')
    .length(12),
});

export { 
  LoginValidate, 
  RegisterValidate, 
  RecoveryTokenValidate, 
  ResetPasswordValidate,
};
