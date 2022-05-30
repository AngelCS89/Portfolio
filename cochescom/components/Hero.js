
import styled from '@emotion/styled'

function Hero() {
    return (
        <HeroStyled>
            <div className="Hero">
               <div className="Texts">
                    <div>
                        <h1>Coches de segunda mano</h1>
                    </div>
                    <div>
                        <p> Dale una segunda vida a los 80000 coches de segunda mano o de ocasion que tenemos para ti.</p>
                    </div>
                </div>
                <div>
                    <img src="/images/hero-img.png" alt="hero" />
                </div>
            </div>
           
        </HeroStyled>
    )
}

const HeroStyled = styled.div`
    background: #336a79;
    padding: 40px;
   
    .Hero {
        display: flex;
        align-items: center;
        flex-direction: row;
        text-align: center;
        color: white;
        family-font: sans-serif;
        justify-content: flex-end;

        h1 {
            margin: 0 0 6px;
        }

        p {

        }



    }
`

export default Hero