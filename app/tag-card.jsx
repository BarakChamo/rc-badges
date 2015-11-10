import ReactDOM    				from 'react-dom'
import React, {Component} from 'react'

export default class TagCard extends Component {
	constructor() {
		super()
	}

	render() {
		return (
			<div className='col-sm-12 col-md-4'>
				<div className="card">
				  <div className="tag-container card-img-fake">
						{ this.props.children }
				  </div>

				  <div className="card-block">
				    <h4 className="card-title">Card title</h4>
				    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
				    <a href="#" className="btn btn-primary">Button</a>
				  </div>
				</div>
		  </div>
		)
	}
}