export const CreateLinks = async () => {
    
    //const test = {"hunter":"30cce1c44dd8f4a72d70c1634deafa0de16fd1f7eb6b766b05","prey":"88be7ed24a7d1ce87d7d6cf1f98900bdde10fe956ff62eb046","action":""};
    
    alert('Educational propose only');
    await fetch('/generate', /*{mode : 'no-cors'}*/ )
    .then(response => response.json())
    .then(data => { console.log("data", data)})
    
    //SE NECESITA VER POR QUÉ LA RESPONSE TIENE EL FORMATO QUE TIENE
};

