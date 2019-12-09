import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './modal.css'
	
	class Confirm extends React.Component{
		render() {
			let {
				title,
				resolve
			} = this.props
			return (
				<div className="modal-wrapper">
				    <div className="modal-content-wrapper">
				      <p className="title">{title}</p>
				      <div className="btns-wrapper">
				        <button onClick={e => resolve(true)}>确定</button>
				        <button className="primary" onClick={e => resolve(false)}>取消</button>  
				      </div>
				    </div>
				</div>
			);
		}
	}

	const confirm = modalTitle => {
		let node = document.createElement('div');
		document.body.appendChild(node);
		
		let modalPromise = new Promise(modalResolve => {
		  ReactDOM.render(<Confirm title={modalTitle} resolve={modalResolve}/>, node);
		});
		
		return new Promise(resolve => {
		  modalPromise.then(result => {
		    ReactDOM.unmountComponentAtNode(node);
		    document.body.removeChild(node);
		    resolve(result);
		  })
		});
	}
	
    export default confirm

