const CreateLinks = async (password) => {
  let fetchData = { newLink: { hunter: 'pepito', prey: 'bichicha' } };

  console.log(btoa(password));

  setTimeout(
    await fetch('/generate', {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json',
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(btoa(password)), // body data type must match "Content-Type" header
      /*mode : 'no-cors'*/
    })
      .then((response) => response.json())
      .then((data) => (fetchData = data))
      .catch((error) => {
        console.log(error);
      }),
    2000,
  );

  console.log(fetchData);
};
export default CreateLinks;
