import React from 'react';
import { css } from '@emotion/react';
import useProperties from '../hooks/useProperties';

const ListProperties = () => {
    const properties = useProperties();
    return ( 
        <h2 css={css`
            margin-top: 5rem;
        `}>Our properties</h2>
     );
}
 
export default ListProperties;