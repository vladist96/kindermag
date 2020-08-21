import { Component, h } from 'preact';
import style from './style';

export class FeatsItem extends Component {
	constructor(props){
	  super(props);
		this.state =  {
			exData: {
				heading: 'Hello World',
				desc: 'Example desc'
			}
		}
		this.exFunc = this.exFunc.bind(this)
	}
	
	exFunc = (svg) => {
		//console.log(svg)
		return <svg />
	}


	render(props, state) {
		//console.log(this.props.icon)
		return (
				<div class="feats__item" >
					<div class="feats__item__icon" dangerouslySetInnerHTML={{__html: this.props.img}}></div>
					<h3 class="feats__item__heading">{this.props.title}</h3>
					<p class="feats__item__desc">{this.props.content}</p>
				</div>
		);
	}
}