import styled from '@emotion/styled'
import { rem } from 'polished'
import Link from 'next/link'

function Header() {
    return (
        <HeaderStyled>

                    <div className="logo">
                        <Link href="/">
                            <a>
                                <img src="/images/logo-cochescomw.png" alt="coches logo" />
                            </a>
                        </Link>
                    </div>

        </HeaderStyled>
    )
}

const HeaderStyled = styled.header`
    background: #ffff;
    padding: 20px;
    .logo {
        a {
            display: flex;
            align-items: center;
            text-decoration: none;
        }
    }
`

export default Header
