const CreateLinks = async () => {
    
    let fetchData;
    alert('Educational propose only');
    await fetch('/generate', /*{mode : 'no-cors'}*/ )
    .then(response => response.json())
    .then(data => fetchData = data)

    console.log(fetchData)
    
};
export default CreateLinks;
