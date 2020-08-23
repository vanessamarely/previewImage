import React from 'react';

export const Preview = (props) => (
    <div>
        <img src={props.imageprovider()} alt="Preview Image" />
    </div>
);
