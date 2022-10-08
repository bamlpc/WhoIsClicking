//import { useTranslation } from 'react-i18next';
import React, {useState} from 'react'
import Links from '../components/GenerateLinks/Links'
import Welcome from '../components/GenerateLinks/Welcome'
import generateLinks from '../components/GenerateLinks/Generate'

const Link = () => {
  const [links, setLinks] = useState({});

  const generate = async () => {
    const generatedLinks = await generateLinks();
    setData(generatedLinks)
  }

  return (
    <div className="App-header">
        {links.prey == undefined
          ? <Welcome generate={generate}  />
          : <Links links={links}  />
        }
    </div>
  );
};

export default Link;
