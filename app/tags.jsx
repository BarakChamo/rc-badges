import ReactDOM    				from 'react-dom'
import React, {Component} from 'react'
import TagCard            from 'tag-card'
import SvgIcon 						from 'svg-inline-loader/lib/component'

const svgLogo = require('logo.svg')

export default class Tags extends Component {
	constructor() {
		super()
	}

	makeStyle(stylesheet) {
		return (<style dangerouslySetInnerHTML={{ __html: stylesheet.toString() }} />)
	}

	render() {
		return (
			<div>
				<div>
					<h1>Ribbons</h1>
					<br/>
					<p className='text-muted'>Top-left ribbons</p>
					<div className='row'>
						<TagCard type='ribbon-green-top-left'>
							{ this.makeStyle( require('styles/components/ribbons/top-left-green.tag.less') ) }
							<div className='rc-ribbon-green-top-left'>
								<a href='http://www.recurse.com'>
									<SvgIcon src={ svgLogo }/>
									<span>Made at the <strong>Recurse Center</strong></span>
								</a>
							</div>
						</TagCard>
						<TagCard type='ribbon-white-top-left'>
							{ this.makeStyle( require('styles/components/ribbons/top-left-white.tag.less') ) }
							<div className='rc-ribbon-white-top-left'>
								<a href='http://www.recurse.com'>
									<SvgIcon src={ svgLogo }/>
									<span>Made at the <strong>Recurse Center</strong></span>
								</a>
							</div>
						</TagCard>
						<TagCard type='ribbon-black-top-left'>
							{ this.makeStyle( require('styles/components/ribbons/top-left-black.tag.less') ) }
							<div className='rc-ribbon-black-top-left'>
								<a href='http://www.recurse.com'>
									<SvgIcon src={ svgLogo }/>
									<span>Made at the <strong>Recurse Center</strong></span>
								</a>
							</div>
						</TagCard>
					</div>

					<br/>
					<p className='text-muted'>Top-right ribbons</p>
					<div className='row'>
						<TagCard type='ribbon-green-top-right'>
							{ this.makeStyle( require('styles/components/ribbons/top-right-green.tag.less') ) }
							<div className='rc-ribbon-green-top-right'>
								<a href='http://www.recurse.com'>
									<SvgIcon src={ svgLogo }/>
									<span>Made at the <strong>Recurse Center</strong></span>
								</a>
							</div>
						</TagCard>
						<TagCard type='ribbon-white-top-right'>
							{ this.makeStyle( require('styles/components/ribbons/top-right-white.tag.less') ) }
							<div className='rc-ribbon-white-top-right'>
								<a href='http://www.recurse.com'>
									<SvgIcon src={ svgLogo }/>
									<span>Made at the <strong>Recurse Center</strong></span>
								</a>
							</div>
						</TagCard>
						<TagCard type='ribbon-black-top-right'>
							{ this.makeStyle( require('styles/components/ribbons/top-right-black.tag.less') ) }
							<div className='rc-ribbon-black-top-right'>
								<a href='http://www.recurse.com'>
									<SvgIcon src={ svgLogo }/>
									<span>Made at the <strong>Recurse Center</strong></span>
								</a>
							</div>
						</TagCard>
					</div>

					<br/>
					<p className='text-muted'>Bottom-left ribbons</p>
					<div className='row'>
						<TagCard type='ribbon-green-bottom-left'>
							{ this.makeStyle( require('styles/components/ribbons/bottom-left-green.tag.less') ) }
							<div className='rc-ribbon-green-bottom-left'>
								<a href='http://www.recurse.com'>
									<SvgIcon src={ svgLogo }/>
									<span>Made at the <strong>Recurse Center</strong></span>
								</a>
							</div>
						</TagCard>
						<TagCard type='ribbon-white-bottom-left'>
							{ this.makeStyle( require('styles/components/ribbons/bottom-left-white.tag.less') ) }
							<div className='rc-ribbon-white-bottom-left'>
								<a href='http://www.recurse.com'>
									<SvgIcon src={ svgLogo }/>
									<span>Made at the <strong>Recurse Center</strong></span>
								</a>
							</div>
						</TagCard>
						<TagCard type='ribbon-black-bottom-left'>
							{ this.makeStyle( require('styles/components/ribbons/bottom-left-black.tag.less') ) }
							<div className='rc-ribbon-black-bottom-left'>
								<a href='http://www.recurse.com'>
									<SvgIcon src={ svgLogo }/>
									<span>Made at the <strong>Recurse Center</strong></span>
								</a>
							</div>
						</TagCard>
					</div>

					<br/>
					<p className='text-muted'>Bottom-right ribbons</p>
					<div className='row'>
						<TagCard type='ribbon-green-bottom-right'>
							{ this.makeStyle( require('styles/components/ribbons/bottom-right-green.tag.less') ) }
							<div className='rc-ribbon-green-bottom-right'>
								<a href='http://www.recurse.com'>
									<SvgIcon src={ svgLogo }/>
									<span>Made at the <strong>Recurse Center</strong></span>
								</a>
							</div>
						</TagCard>
						<TagCard type='ribbon-white-bottom-right'>
							{ this.makeStyle( require('styles/components/ribbons/bottom-right-white.tag.less') ) }
							<div className='rc-ribbon-white-bottom-right'>
								<a href='http://www.recurse.com'>
									<SvgIcon src={ svgLogo }/>
									<span>Made at the <strong>Recurse Center</strong></span>
								</a>
							</div>
						</TagCard>
						<TagCard type='ribbon-black-bottom-right'>
							{ this.makeStyle( require('styles/components/ribbons/bottom-right-black.tag.less') ) }
							<div className='rc-ribbon-black-bottom-right'>
								<a href='http://www.recurse.com'>
									<SvgIcon src={ svgLogo }/>
									<span>Made at the <strong>Recurse Center</strong></span>
								</a>
							</div>
						</TagCard>
					</div>
				</div>

				<br/>

				<div>
					<h1>Badges</h1>
					<div className='row'>
						<TagCard type='badge'>

						</TagCard>
						<TagCard type='badge'>

						</TagCard>
						<TagCard type='badge'>

						</TagCard>
					</div>
				</div>

				<br/>

				<div>
					<h1>Pills</h1>
					<div className='row'>
						<TagCard type='pill'>

						</TagCard>
						<TagCard type='pill'>

						</TagCard>
						<TagCard type='pill'>

						</TagCard>
					</div>
				</div>
			</div>
		)
	}
}
