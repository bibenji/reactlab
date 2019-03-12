import React from 'react';
import PropTypes from 'prop-types';

const Dumb = ({haha}) => (
    <>
        <div>{haha}</div>
    </>
);

Dumb.propTypes = {
    haha: PropTypes.string
};

export default Dumb;