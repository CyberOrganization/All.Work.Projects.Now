import React, { Component } from 'react';

class CounterButton extends Component {
	//Define the initial state of a constructor
	// state => counter 0

	constructor() {
		super();

		this.state = {
			counter: 0,
			secondCounter: 100,
		};

		// this.increase = this.increase.bind(this);
	}

   

	render() {
      //  const style = {fontSize: "50px", padding: "15px 30px"}
		return (
			<div className='counter'>
				<button onClick={this.increase}> +{this.props.by}</button>

				<span className='count'>{this.state.counter}</span>
				
			</div>
		);
	}

	increase = () => {
		this.setState({
			counter: this.state.counter + this.props.by
			
		});
	};
}
export default CounterButton



CounterButton.defaultProps = {
    by: 1
}

