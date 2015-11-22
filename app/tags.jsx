import ReactDOM    				from 'react-dom'
import React, {Component} from 'react'
import TagCard            from 'tag-card'
import SvgIcon 						from 'svg-inline-loader/lib/component'

const svgLogo 			= require('logo.svg'),
			svgLogoStroke = require('logo-stroke.svg'),
			svgLogoSeal   = require('logo-seal.svg'),
			svgHeart      = require('heart.svg')

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
						<TagCard type='Top-Left Green Ribbon'>
							{ this.makeStyle( require('styles/components/ribbons/top-left-green.tag.less') ) }
							<div className='rc-ribbon-green-top-left'>
								<a href='http://www.recurse.com' title='Made with love at the Recurse Center'>
									<SvgIcon src={ svgLogo }/>
									<span>Made at the <strong>Recurse Center</strong></span>
								</a>
							</div>
						</TagCard>
						<TagCard type='Top-Left Light Ribbon'>
							{ this.makeStyle( require('styles/components/ribbons/top-left-white.tag.less') ) }
							<div className='rc-ribbon-white-top-left'>
								<a href='http://www.recurse.com' title='Made with love at the Recurse Center'>
									<SvgIcon src={ svgLogo }/>
									<span>Made at the <strong>Recurse Center</strong></span>
								</a>
							</div>
						</TagCard>
					</div>

					<br/>
					<p className='text-muted'>Top-right ribbons</p>
					<div className='row'>
						<TagCard type='Top-Right Green Ribbon'>
							{ this.makeStyle( require('styles/components/ribbons/top-right-green.tag.less') ) }
							<div className='rc-ribbon-green-top-right'>
								<a href='http://www.recurse.com' title='Made with love at the Recurse Center'>
									<SvgIcon src={ svgLogo }/>
									<span>Made at the <strong>Recurse Center</strong></span>
								</a>
							</div>
						</TagCard>
						<TagCard type='Top-Right Light Ribbon'>
							{ this.makeStyle( require('styles/components/ribbons/top-right-white.tag.less') ) }
							<div className='rc-ribbon-white-top-right'>
								<a href='http://www.recurse.com' title='Made with love at the Recurse Center'>
									<SvgIcon src={ svgLogo }/>
									<span>Made at the <strong>Recurse Center</strong></span>
								</a>
							</div>
						</TagCard>

					</div>

					<br/>
					<p className='text-muted'>Bottom-left ribbons</p>
					<div className='row'>
						<TagCard type='Bottom-Left Green Ribbon'>
							{ this.makeStyle( require('styles/components/ribbons/bottom-left-green.tag.less') ) }
							<div className='rc-ribbon-green-bottom-left'>
								<a href='http://www.recurse.com' title='Made with love at the Recurse Center'>
									<SvgIcon src={ svgLogo }/>
									<span>Made at the <strong>Recurse Center</strong></span>
								</a>
							</div>
						</TagCard>
						<TagCard type='Bottom-Left Light Ribbon'>
							{ this.makeStyle( require('styles/components/ribbons/bottom-left-white.tag.less') ) }
							<div className='rc-ribbon-white-bottom-left'>
								<a href='http://www.recurse.com' title='Made with love at the Recurse Center'>
									<SvgIcon src={ svgLogo }/>
									<span>Made at the <strong>Recurse Center</strong></span>
								</a>
							</div>
						</TagCard>
					</div>

					<br/>
					<p className='text-muted'>Bottom-right ribbons</p>
					<div className='row'>
						<TagCard type='Bottom-Right Green Ribbon'>
							{ this.makeStyle( require('styles/components/ribbons/bottom-right-green.tag.less') ) }
							<div className='rc-ribbon-green-bottom-right'>
								<a href='http://www.recurse.com' title='Made with love at the Recurse Center'>
									<SvgIcon src={ svgLogo }/>
									<span>Made at the <strong>Recurse Center</strong></span>
								</a>
							</div>
						</TagCard>
						<TagCard type='Bottom-Right Light Ribbon'>
							{ this.makeStyle( require('styles/components/ribbons/bottom-right-white.tag.less') ) }
							<div className='rc-ribbon-white-bottom-right'>
								<a href='http://www.recurse.com' title='Made with love at the Recurse Center'>
									<SvgIcon src={ svgLogo }/>
									<span>Made at the <strong>Recurse Center</strong></span>
								</a>
							</div>
						</TagCard>
					</div>
				</div>

					<br/>
					<p className='text-muted'>Block Badges</p>
					<div className='row badges'>
						<TagCard type='Green Block Badge' height='59px' image='https://cloud.githubusercontent.com/assets/2883345/11322972/9e553260-910b-11e5-8de9-a5bf00c352ef.png'>
							{ this.makeStyle( require('styles/components/badges/green-badge.tag.less') ) }
							<div className='rc-badge-green'>
								<a href='http://www.recurse.com' title='Made with love at the Recurse Center'>
									<div className='block-icon'>
										<SvgIcon src={ svgLogo }/>
									</div>
									<span>
										<span>Made at the</span>
										<br/>
										<strong>Recurse Center</strong>
									</span>
								</a>
							</div>
						</TagCard>
						<TagCard type='Light Block Badge' height='59px' image='https://cloud.githubusercontent.com/assets/2883345/11322974/9e572610-910b-11e5-9775-698cbe868a67.png'>
							{ this.makeStyle( require('styles/components/badges/white-badge.tag.less') ) }
							<div className='rc-badge-white'>
								<a href='http://www.recurse.com' title='Made with love at the Recurse Center'>
									<div className='block-icon'>
										<SvgIcon src={ svgLogo }/>
									</div>
									<span>
										<span>Made at the</span>
										<br/>
										<strong>Recurse Center</strong>
									</span>
								</a>
							</div>
						</TagCard>
					</div>

				<br/>

				<div>
					<h1>Seal</h1>
					<div className='row seals'>
						<TagCard type='Recurse Center Seal' single={ true } height='75px' image='https://cloud.githubusercontent.com/assets/2883345/11322975/9e575dce-910b-11e5-9f47-1fb1b530a4bd.png'>
							{ this.makeStyle( require('styles/components/seals/green-seal.tag.less') ) }
							<div className='rc-seal-green'>
								<a href='http://www.recurse.com' title='Made with love at the Recurse Center'>
									<SvgIcon src={ svgLogo }/>
								</a>
							</div>
						</TagCard>
					</div>
				</div>

				<div>
					<h1>Text</h1>
					<div className='row text'>
						<TagCard type='"Made with Love" Text Label' single={ true } height='14px' image='https://cloud.githubusercontent.com/assets/2883345/11322973/9e557144-910b-11e5-959a-8fdaaa4a88c5.png'>
							{ this.makeStyle( require('styles/components/text/text.tag.less') ) }
							<div className='rc-text'>
								<a href='http://www.recurse.com' title='Made with love at the Recurse Center'>
									<span>Made with </span>
									<SvgIcon src={ svgHeart }/>
									<span> at the </span>
									<span className='green'>Recurse Center</span>
								</a>
							</div>
						</TagCard>
					</div>
				</div>
			</div>
		)
	}
}


				// <br/>

				// <div>
				// 	<h1>Pills</h1>
				// 	<div className='row'>
				// 		<TagCard type='pill'>

				// 		</TagCard>
				// 		<TagCard type='pill'>

				// 		</TagCard>
				// 		<TagCard type='pill'>

				// 		</TagCard>
				// 	</div>
				// </div>



				// <TagCard type='Top-Right Dark Ribbon'>
				// 	{ this.makeStyle( require('styles/components/ribbons/top-right-black.tag.less') ) }
				// 	<div className='rc-ribbon-black-top-right'>
				// 		<a href='http://www.recurse.com'>
				// 			<SvgIcon src={ svgLogoStroke }/>
				// 			<span>Made at the <strong>Recurse Center</strong></span>
				// 		</a>
				// 	</div>
				// </TagCard>


						// <TagCard type='Dark Block Badge'>
						// 	{ this.makeStyle( require('styles/components/badges/black-badge.tag.less') ) }
						// 	<div className='rc-badge-black'>
						// 		<a href='http://www.recurse.com'>
						// 			<div className='block-icon'>
						// 				<SvgIcon src={ svgLogoStroke }/>
						// 			</div>
						// 			<span>
						// 				<span>Made at the</span>
						// 				<br/>
						// 				<strong>Recurse Center</strong>
						// 			</span>
						// 		</a>
						// 	</div>
						// </TagCard>


				// <br/>

				// <div>
				// 	<h1>Badges</h1>
				// 	<br/>
				// 	<p className='text-muted'>Inline Badges</p>
				// 	<div className='row badges'>
				// 		<TagCard type='Green Inline Badge'>
				// 			{ this.makeStyle( require('styles/components/badges/green-badge.tag.less') ) }
				// 			<div className='rc-badge-green'>
				// 				<a href='http://www.recurse.com'>
				// 					<SvgIcon src={ svgLogo }/>
				// 					<span>
				// 						<span>Made at the</span>
				// 						<br/>
				// 						<strong>Recurse Center</strong>
				// 					</span>
				// 				</a>
				// 			</div>
				// 		</TagCard>
				// 		<TagCard type='Light Inline Badge'>
				// 			{ this.makeStyle( require('styles/components/badges/white-badge.tag.less') ) }
				// 			<div className='rc-badge-white'>
				// 				<a href='http://www.recurse.com'>
				// 					<SvgIcon src={ svgLogo }/>
				// 					<span>
				// 						<span>Made at the</span>
				// 						<br/>
				// 						<strong>Recurse Center</strong>
				// 					</span>
				// 				</a>
				// 			</div>
				// 		</TagCard>
				// 		<TagCard type='Dark Inline Badge'>
				// 			{ this.makeStyle( require('styles/components/badges/black-badge.tag.less') ) }
				// 			<div className='rc-badge-black'>
				// 				<a href='http://www.recurse.com'>
				// 					<SvgIcon src={ svgLogoStroke }/>
				// 					<span>
				// 						<span>Made at the</span>
				// 						<br/>
				// 						<strong>Recurse Center</strong>
				// 					</span>
				// 				</a>
				// 			</div>
				// 		</TagCard>
				// 	</div>