import ReactDOM    				from 'react-dom'
import React, {Component} from 'react'
import Tags               from 'tags'
import SvgIcon 						from 'svg-inline-loader/lib/component'

const svgLogo = require('logo.svg')

export default class App extends Component {
	constructor() {
		super()
	}

	render() {
		return (
			<div className='container-fluid'>
				<div className='row'>
					<div className='col-xs-12 col-sm-10 col-sm-offset-1 col-md-10 col-md-offset-1 col-lg-8 col-lg-offset-2 col-xl-6 col-xl-offset-3'>
							<div className='text-center'>
								<div className='main-logo'>
									<SvgIcon src={ svgLogo }/>
								</div>
								
								<h2>
									<strong>RC </strong>
									<span>TAGS</span>
								</h2>
								
								<p className='lead'>
									<strong>Recurse Center </strong>
									<span>bling for your awesome projects!</span>
								</p>
								
								<div>
									<kbd className='hash-tag'>#RC</kbd>
									<kbd className='hash-tag'>#SWAG</kbd>
									<kbd className='hash-tag'>#WOW</kbd>
								</div>
								<br/>
							</div>
							
							<Tags/>
					</div>
				</div>
			</div>
		)
	}
}