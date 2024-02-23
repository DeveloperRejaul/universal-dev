
/**
 * @description this function using for generate random id 
 * @returns 
 */
export const randomId = (length = 8) => {
  const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let id = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    id += charset[randomIndex];
  }
  return id;
};
  
  
  
/**
   * @description this function using for generate random color 
   * @returns 
   */
export const randomColor = ()=> {
  const r = ()=> Number(Math.random() * 150);
  return`rgba(${r ()},${r ()},${r ()}, 0.9)`;
};