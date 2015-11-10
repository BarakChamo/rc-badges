import ReactDOM    				from 'react-dom'
import React, {Component} from 'react'
import clipboard          from './clipboard'

export default class TagCard extends Component {
	constructor() {
		super()
	}

	copy() {
		clipboard.copy(
			ReactDOM.findDOMNode(this).getElementsByClassName('tag-container')[0].innerHTML.replace(/\s?data-reactid="[.|\d]+"/g, '')
		)
	}

	render() {
		return (
			<div className='col-sm-12 col-md-4'>
				<div className="card">
				  <div className="tag-container card-img-fake">
						{ this.props.children }
				  </div>

				  <div className="card-block">
				    <p className="card-text">{ this.props.type }</p>
				    <a className="btn btn-primary" onClick={ e => this.copy() }>Copy to Clipboard</a>
				  </div>
				</div>
		  </div>
		)
	}
}