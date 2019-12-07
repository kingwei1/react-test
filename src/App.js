import React, { Component } from 'react';
import Input from './inputNumber/input'

class  App extends Component{
	constructor(props) {
		super(props);
		this.state ={
			value: ''
		}
	}
	value = ''

	render() {
		return (
			<div>			
			  <span>只能输入数字:</span>
				<Input value={this.state.value}						
				       onChange={(e) => {
									this.setState({
										value: e.target.value.replace(/[^\d.]/g, "")
									})
				}}
				/>
				<span>非受控:</span>
				<Input defalutValue={this.value}  
				  onChange={(e) => {
					  //this.value = e.target.value.replace(/[^\d.]/g, "")
				  }}/>
			</div>
		);
	}
}

export default App;

