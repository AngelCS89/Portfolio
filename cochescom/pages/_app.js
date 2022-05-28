import Header from 'components/Header'

import GlobalStyles from 'components/GlobalStyles/GlobalStyles'
import theme from '../theme/theme.js'
import getConfig from 'next/config'
import fetch from 'isomorphic-unfetch'

function MyApp({ Component, pageProps }) {
    return (
        <>

                <GlobalStyles />
                <Header/>
                <Component {...pageProps} />

        </>
    )
}

const { publicRuntimeConfig } = getConfig()

MyApp.getInitialProps = async () => {
    const res = await fetch(`https://dummy.restapiexample.com/api/v1//employee/1`)
    console.log(res)
    const navigation = await res.json()

    return { navigation }
}

export default MyApp
