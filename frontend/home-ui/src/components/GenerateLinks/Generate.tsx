import React from 'react'

interface Link {
    prey: string,
    hunter: string
}

const generateLinks = async () => {
    const requestOptions = {
      method: 'GET',
      cache: 'no-cache',
      credentials: 'same-origin', 
      headers: {
          'Content-Type': 'application/json'
          },
      referrerPolicy: 'no-referrer'
    }
  
  
    const fetchData = await fetch('http://localhost:8000/api/generate', requestOptions)
    .then((response) => response.json())
    .catch(error => {
        console.error(error)
    })
  
    const prey = fetchData.newLink.prey;
    const hunter = fetchData.newLink.hunter;

    const links: Link = {
        prey, 
        hunter
    }
    
    return links
}

export default generateLinks