import fetch from 'isomorphic-unfetch'
import Card from 'components/Card'


const Home = ({ cars }) => {

    return (

                        <Card car={car} />
    )
}

export async function getServerSideProps() {
    const { API_URL } = process.env

    const res = await fetch(`https://dummy.restapiexample.com/api/v1/cars`)
    const data = await res.json()

    return {
        props: {
            cars: data
        }
    }
}

export default Home
