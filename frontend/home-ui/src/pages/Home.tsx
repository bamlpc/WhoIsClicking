import { useTranslation } from 'react-i18next'

const Home = () => {
    
    const { t, i18n } = useTranslation()

    return(
        <div className="App-header">
            <h1>{t('welcome_message')}</h1>
            
        </div>
    )
}

export default Home;