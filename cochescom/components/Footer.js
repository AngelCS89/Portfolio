import styled from '@emotion/styled'
import { rem } from 'polished'

import Link from 'next/link'

function Footer({ isDark }) {
    return (
        <FooterStyled isDark={isDark}>


                    <div className="logo">
                        <Link href="/">
                            <a>
                                <img src="/images/logo.svg" alt="Sites logo" />
                                <span className="logo-text">Next Movies</span>
                            </a>
                        </Link>
                    </div>


        </FooterStyled>
    )
}

const FooterStyled = styled.footer`
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

export default Footer
