import { useTranslation } from 'react-i18next'

const Disclaimer = () => {

    const { t, i18n } = useTranslation()
    //<h1>{t('welcome_message')}</h1>

    return(
        <div className="App-header">
            <h1> This tool is for educational ....</h1>
        </div>
    )
}

export default Disclaimer;