// import ReactDOM    				from 'react-dom'
// import React, {Component} from 'react'

const React = window.React || window.react

const svgLogo 			= require('../logo.svg'),
			svgLogoStroke = require('../logo-stroke.svg')

export default class Badge extends React.Component {
	render() {
		const color = this.props.color || 'green'

		return (
			<div className={`rc-badge-${ color }`}>
				<style dangerouslySetInnerHTML={{ __html: require('../../resources/styles/components/badges/badges.tag.less').toString() }} />
				<a href='http://www.recurse.com'>
					<SvgIcon src={ color === 'black' ? svgLogoStroke : svgLogo }/>
					<span>Made at the <strong>Recurse Center</strong></span>
				</a>
			</div>
		)
	}
}