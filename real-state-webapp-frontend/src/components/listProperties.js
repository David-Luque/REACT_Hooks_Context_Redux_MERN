import React, { useState, useEffect } from 'react';
import { css } from '@emotion/react';
import useProperties from '../hooks/useProperties';
import PropertyPreview from './propertyPreview';
import * as listPropertiesCSS from '../css/listProperties.module.css';
import useFilter from '../hooks/useFilter';

const ListProperties = () => {
    const propertiesData = useProperties();
    const [ properties ] = useState(propertiesData);
    const [ filterProperties, setFilterProperties ] = useState([]);

    //properties filter
    const { category, FilterUI } = useFilter();


    useEffect(()=>{
        if(category) {
            const filteredProperties = properties.filter(property => (
                property.category.name === category
            ));
            setFilterProperties(filteredProperties)
        } else {
            setFilterProperties(properties)
        }

    }, [ category, properties ]);

    return ( 
        <>
            <h2 css={css`
                margin-top: 5rem;
            `}>Our properties</h2>

            {FilterUI()}

            <ul className={listPropertiesCSS.properties}>
                {filterProperties.map(property => (
                    <PropertyPreview
                        key={property.id}
                        propertyData={property}
                    />
                ))}
            </ul>
        </>
     );
}
 
export default ListProperties;