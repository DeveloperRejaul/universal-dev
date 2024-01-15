import { useState } from 'react';

const BASE_URL = process.env.EXPO_PUBLIC_BASE_URL;


interface IGetParams {
  url: string
}


export const useFetch = () => {
  const [isLoading, setLoading] = useState(true);
  const [isError, setError] = useState(false);
  const [isSuccess, setSuccess] = useState(false);
  const [data, setData] = useState(null);


  const handleGet = (params: IGetParams) => {
    fetch(BASE_URL + params.url)
      .then(res=>{
        setLoading(true);
        
      });

  }; 


  const handlePost = () => {}; 
  const handlePut = () => {}; 
  const handleDelete = () => {}; 


  return {isLoading, isError, isSuccess, data, handlePost, handleGet, handlePut, handleDelete};
};