import styled from '@emotion/styled'
import { rem } from 'polished'

import Link from 'next/link'

function Header({ isDark }) {
    return (
        <HeaderStyled isDark={isDark}>


                    <div className="logo">
                        <Link href="/">
                            <a>
                                <img src="/images/logo-cochescom.png" alt="coches logo" />
                                <span className="logo-text">Coches.com</span>
                            </a>
                        </Link>
                    </div>


        </HeaderStyled>
    )
}

const HeaderStyled = styled.header`
    background: ${props => props.isDark ? '#000000' : '#efefef' };
    padding: 20px;

    .logo {
        a {
            display: flex;
            align-items: center;
            text-decoration: none;
        }

        .logo-text {
            color: #333333;
            font-weight: bold;
            font-size: ${rem(20)};
            margin-left: 20px;
        }
    }
`

export default Header
