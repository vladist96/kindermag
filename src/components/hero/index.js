import { Component, h , context} from 'preact';
import style from './style';

export class Hero extends Component {
	
	constructor(props, Context){
	  super(props);
	  super(Context);
		this.state =  {
			exData: {
				heading: 'Hello World',
				desc: 'An excellent boilerplate for starting development of a site on a react. Routing, progressive web application, svg, sass'
			}
		}
		this.exFunc = this.exFunc.bind(this)
	}
	
	exFunc = () => {
		console.log("hey")
	}

	componentDidMount(){}

	render(props, state, theme) {
		return (
			<section class="hero">
				<div class="container hero__container">
					<div class="hero__container__content">
						<h1>{this.state.exData.heading}</h1>
						<p>{this.state.exData.desc}</p>
						<button class="btn" onClick={this.exFunc}>Learn more</button>
					</div>
				
				</div>
			</section>
		);
	}
}