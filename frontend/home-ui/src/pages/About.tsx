import { useTranslation } from 'react-i18next'

const About = () => {
    
    const { t, i18n } = useTranslation()
    //<h1>{t('welcome_message')}</h1>

    //TODO: fix the BR tag, text hide behind navbar without it
    return(
        <div className="App-header">
            <h1> 
                <br />
                Who is clicking is a simple yet powerful set of tools <br />
            aimed to identify a person with the help of recon scripts <br />
            executed when someone clicks a link. </h1>
        </div>
    )
}

export default About;
