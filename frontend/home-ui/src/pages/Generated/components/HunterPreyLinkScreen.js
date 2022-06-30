import { CopyToClipboard } from "react-copy-to-clipboard";

const Hunter = ( { hunter } ) => {
    const url= "http://localhost:3000/hunter/" + hunter;
    return (
        <div>
            <h2>This is the Hunter link:</h2>
              <CopyToClipboard
              text={url}
              onCopy={() => alert("Hunter link copied, happy hunting")}>
                <span>{url}</span>
              </CopyToClipboard>
        </div>
    )    
}

const Prey = ( { prey } ) => {
    const url= "http://localhost:3000/prey/" + prey;
    return (
        <div>
            <h2>This is the Prey link:</h2>
              <CopyToClipboard
              text={url}
              onCopy={() => alert("Prey link copied, use carefully")}>
                <span>{url}</span>
              </CopyToClipboard>
        </div>
    )    
}

export {Hunter, Prey};