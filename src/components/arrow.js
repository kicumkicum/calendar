import React from 'react';


/**
 * @param {{
 *      type: ArrowType
 * }} props
 */
let Arrow = (props) => {
	if (props.type === ArrowType.NEXT) {
		return (
			<span class='right button' id='next'> &rang; </span>
		);
	} else {
		return (
			<span class='left button' id='prev'> &lang; </span>
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
