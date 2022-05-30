import Header from 'components/Header'
import Hero from 'components/Hero'
import { ThemeProvider } from '@emotion/react'
import GlobalStyles from 'components/GlobalStyles/GlobalStyles'
import theme from '../theme/theme.js'
import getConfig from 'next/config'
import fetch from 'isomorphic-unfetch'

function MyApp({ Component, pageProps }) {
    return (
        <>

                <GlobalStyles />
                <Header/>
                <Hero/>
                <Component {...pageProps} />

        </>
    )
}

const { publicRuntimeConfig } = getConfig()

MyApp.getInitialProps = async () => {
    const res = await fetch(`${publicRuntimeConfig.API_URL}`)
    const navigation =  await res.json()
    console.log(navigation)

    return { navigation }
}

export default MyApp
