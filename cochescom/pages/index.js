import fetch from 'isomorphic-unfetch'
import Card from 'components/Card'
import { Box } from '@mui/system';



const Home = ({ cars }) => {
    return (
        <Box variant="container" >
        <Box marginTop={1} marginBottom={0} as="h2">coches que te pueden interesar</Box>
            <Box sx={{
                display: 'flex',
                justifyContent: 'flex-start',
                flexDirection: { xs: 'column', md: 'row' },
                alignItems: 'flex-start',
                overflow: 'hidden',
                borderRadius: '12px',
                boxShadow: 1,
                fontWeight: 'bold',
            }}>
                {cars.map(car => (
                <Box key={car.id}  >
                        <Card car={car} />
                </Box >
                ))}
            </Box>
        </Box>
    )
}

export async function getServerSideProps() {
    const { API_URL } = process.env
    const res = await fetch(`${API_URL}`)
    const data = await res.json()
    return {
        props: {
            cars: data
        }
    }
}

export default Home
