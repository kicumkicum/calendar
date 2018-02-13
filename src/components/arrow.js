import React from 'react';


/**
 * @param {{
 *      type: ArrowType
 * }} props
 */
let Arrow = (props) => {
	if (props.type === ArrowType.NEXT) {
		return (
			<span className='right button' id='next'> &rang; </span>
		);
	} else {
		return (
			<span className='left button' id='prev'> &lang; </span>
		);

	}
};


/**
 * @enum {string}
 */
let ArrowType = {
	NEXT: 'next',
	PREV: 'prev'
};

export { Arrow, ArrowType };
