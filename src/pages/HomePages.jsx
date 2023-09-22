import './style/HomePages.css'
import { useTranslation } from 'react-i18next'

const HomePages = () => {
  const [t, i18n] = useTranslation('global')

  return (
    <div className='portfolio'>
      <div className='portfolio__tit-des'>
        <h1 className='portfolio__title'>Javier_Ospina</h1>
        <h3 className='portfolio__subtitle'>{t('Portfolio.subtitle')}</h3>

        <h3 className='portfolio__description'>{t('Portfolio.description')}</h3>
      </div>
      <img className='portfolio__img' src='/img/iconoprincipal.png' alt='' />
    </div>
  )
}

export default HomePages
