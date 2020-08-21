import { Component, h } from 'preact';
import style from './style';

export class ExampleComponent extends Component {
	constructor(props){
	  super(props);
		this.state =  {
			heading: 'Hello World',
			desc: 'Example desc'
		}
		this.exFunc = this.exFunc.bind(this)
	}
	
	exFunc = () => {
		console.log("hey")
	}


	render(props, state) {
		return (
			<section class="section_base">
				<div class="container">
					<h2 class="text-center ex__heading">{this.state.heading}</h2>
					<p class="text-center ex__desc">{this.state.desc}</p>
				</div>
			</section>
		);
	}
}