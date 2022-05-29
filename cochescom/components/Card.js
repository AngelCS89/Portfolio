import styled from '@emotion/styled'
import Link from 'next/link'

function Card ({ car }) {
    const { API_URL } = process.env
    const carImage = car.makeAndModel.replace(/\s/g, '-').toLowerCase() +'.webp'
    console.log('carImage', carImage)
    return (
        <CardStyled>
            <div className="poster">
                <img src={`/assets/cars/${carImage}`} alt=""/>
            </div>
            <div className="body">
                <div >
                    <h3>{ car.price } Euros</h3>
                </div>
                <div >
                    <h3>{ car.location }</h3>
                </div>
                <div >
                    <h3>{ car.makeAndModel }</h3>
                </div>
            </div>
        </CardStyled>
    )
}

const CardStyled = styled.div`
    width: 100%;
    border: 1px solid #cccccc;
    margin-top: 50px;
    border-radius: 20px;
    overflow: hidden;
    box-shadow: 0 0 10px rgba(0,0,0, 0.2);
    
    .body {
        padding: 20px;
        
        h3 {
            margin-bottom: 20px;
        }
        
        p {
            color: #666666;
            line-height: 1.5;
        }
        
        a {
            display: inline-block;
            margin: 20px 0;
        }
       
    }
`

export default Card
