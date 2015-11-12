import ReactDOM    				from 'react-dom'
import React, {Component} from 'react'
import clipboard          from './clipboard'

export default class TagCard extends Component {
	constructor() {
		super()

		this.state = {
			clicked: false
		}
	}

	copy() {
		clipboard.copy(
			ReactDOM.findDOMNode(this).getElementsByClassName('tag-container')[0].innerHTML.replace(/\s?data-reactid="[.|\d]+"/g, '').replace(/(\r\n|\n|\r)/gm, '')
		)

		this.setState({clicked: true})

		setTimeout(e => this.setState({clicked: false}), 1000)
	}

	render() {
		const button = this.state.clicked 
			? (<a className="btn btn-success" onClick={ e => this.copy() }> { String.fromCharCode(10003) } Copied snippet</a>)
			: (<a className="btn btn-primary" onClick={ e => this.copy() }>Copy to Clipboard</a>)

		return (
			<div className='col-sm-12 col-md-4'>
				<div className="card">
				  <div className="tag-container card-img-fake">
						{ this.props.children }
				  </div>

				  <div className="card-block">
				    <p className="card-text"><small>{ this.props.type }</small></p>
				    <div className='text-center'>
							{ button }
				    </div>
				  </div>
				</div>
		  </div>
		)
	}
}