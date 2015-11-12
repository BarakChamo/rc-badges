import ReactDOM    				from 'react-dom'
import React, {Component} from 'react'

// const React = window.React || window.react

const svgLogo 			= require('../logo.svg'),
			svgLogoStroke = require('../logo-stroke.svg')

export default class Ribbon extends React.Component {
	render() {
		const position = this.props.position.split(' ') || ['top', 'left']

		const color 	   = this.props.color  || 'green',
					horizontal = 'left' in position ? 'left' : 'right',
					vertical   = 'top'  in position ? 'top'  : 'bottom'

		return (
			<div className={`rc-ribbon-${ color }-${ vertical }-${ horizontal }`}>
				<style dangerouslySetInnerHTML={{ __html: require('../../resources/styles/components/ribbons/ribbons.tag.less').toString() }} />
				<a href='http://www.recurse.com'>
					<SvgIcon src={ color === 'black' ? svgLogoStroke : svgLogo }/>
					<span>Made at the <strong>Recurse Center</strong></span>
				</a>
			</div>
		)
	}
}