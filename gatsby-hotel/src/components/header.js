import React from 'react';
import { css } from '@emotion/react';

const Header = () => {
    return (
        <header
            css={css`
                background-color: #333;
                padding: 1rem;
            `}
        >
            <div
                css={css`
                    max-width: 1200px;
                    margin: 0 auto;

                    @media(min-width:768px) {
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                    }
                `}
            >
                <h1
                    css={css`
                        color: #FFF;
                        text-align: center;
                    `}
                >Gatsby hotel</h1>
                
            </div>
        </header>
    );
}
 
export default Header;