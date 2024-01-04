export const yupValidate = async (schema: object, value: object) =>{
  const validationErrors = {};

  try {
    await schema.validate(value, {abortEarly:false});
    return null;
  } catch (err) {
    if(err?.inner){
      err.inner.forEach(e=>{
        validationErrors[e.path] = e.message;
      });
    }
    return validationErrors;
  }  
};