import { qrcode, RouterContext } from 'deps';

const qrGen = async ( {request, response}: RouterContext<"/qrgenerator"> ) => {

  const data = request.body();
  const value= await data.value;

  const qr = await qrcode(value.url, {size: 500})
  
  const _response = {
          success: true,
          body:qr
        }
  response.body = JSON.stringify(_response);
      
}

export default qrGen;