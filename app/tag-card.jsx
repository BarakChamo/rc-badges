import ReactDOM    				from 'react-dom'
import React, {Component} from 'react'
import clipboard          from './clipboard'

export default class TagCard extends Component {
	constructor() {
		super()

		this.state = {
			html:  false,
			image: false
		}
	}

	copy() {
		clipboard.copy(
			ReactDOM.findDOMNode(this).getElementsByClassName('tag-container')[0].innerHTML.replace(/\s?data-reactid="[.|\d]+"/g, '').replace(/(\r\n|\n|\r)/gm, '')
		)

		this.setState({html: true})

		setTimeout(e => this.setState({html: false}), 1000)
	}

	image() {
		clipboard.copy(`<a href='http://www.recurse.com' title='Made with love at the Recurse Center'><img src='${ this.props.image }' height='${ this.props.height }'/></a>`)

		this.setState({image: true})

		setTimeout(e => this.setState({image: false}), 1000)
	}

	render() {
		let buttons = []

		// HTML Copy button
		buttons[0] = this.state.html 
			? (<a className="btn btn-success-outline"> { String.fromCharCode(10003) } Copied</a>)
			: (<a className="btn btn-primary-outline" onClick={ e => this.copy() }>Copy snippet</a>)

		if (this.props.image) {		
			buttons[1] = this.state.image 
				? (<a className="btn btn-success-outline"> { String.fromCharCode(10003) } Copied</a>)
				: (<a className="btn btn-primary-outline" onClick={ e => this.image() }>Copy image</a>)
		}

			if (this.props.disabled) {
				button[0] = button[1] = (<a className="btn btn-primary disabled" disabled='true'>Coming Soon</a>)
			}

		return (
			<div className={ `col-sm-12 col-md-6 ${ this.props.single && 'col-md-offset-3' }` }>
				<div className="card">
				  <div className="tag-container card-img-fake">
						{ this.props.children }
				  </div>

				  <div className="card-block">
				    <p className="card-text"><small>{ this.props.type }</small></p>
				    <div className='text-center'>
				    	<div className='btn-group'>
								{ buttons }
				    	</div>
				    </div>
				  </div>
				</div>
		  </div>
		)
	}
}