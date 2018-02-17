import React, {Component} from 'react';
import {connect} from 'react-redux';


const ArrowComponent = class extends Component {
	/**
	 * @type {{
	 *      type: ArrowType,
	 *      onArrowClick: function(ArrowType)
	 * }}
	 */
	props;

	/**
	 * @return {*}
	 */
	render() {
		if (this.props.type === ArrowType.NEXT) {
			return (
				<span onClick={() => this.onArrowClick()} className='right button' id='next'> &rang; </span>
			);
		} else {
			return (
				<span onClick={() => this.onArrowClick()} className='left button' id='prev'> &lang; </span>
			);

		}
	}

	/**
	 */
	onArrowClick() {
		this.props.onArrowClick(this.props.type);
	}
};


/**
 * @enum {string}
 */
const ArrowType = {
	NEXT: 'next',
	PREV: 'prev'
};

const Arrow = connect(
	(state) => ({}),
	(dispatch) => ({
		/**
		 * @param {ArrowType} type
		 */
		onArrowClick: (type) => {
			dispatch({type: 'PRESS_ARROW', payload: type})
		}
	}))(ArrowComponent);

export { Arrow, ArrowType };
