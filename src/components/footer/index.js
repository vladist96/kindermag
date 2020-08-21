import { Component, h } from 'preact';
import style from './style';

export class Footer extends Component {
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
	
	exFunc = () => {
		console.log("hey")
	}

	render(props, state) {
		return (
			<footer class="section_base footer">
				<div class="footer__container">
					<div class="footer__col">
						{
							this.props.menu.map(function(item){
								return <a class="footer__nav__item" href={item.href}>{item.title}</a>
							})
						}
					</div>
					<div class="footer__col text-center">
						<div  dangerouslySetInnerHTML={{__html: this.props.logo}}></div>
					</div>
					<div class="footer__col text-right">
						<p>
							{this.props.contacts.phone}<br />
							<a href={this.props.contacts.email} >{this.props.contacts.email}</a>
						</p>

						<p class="footer__copy">
							© {window.location.host}
							
						</p>
						
					</div>
				</div>
			</footer>
		);
	}
}