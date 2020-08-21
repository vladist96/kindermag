import { Component, h } from 'preact';
import style from './style';

export class Navdrawer extends Component {
	constructor(props){
	  super(props);
		this.state =  {
			drawer: undefined
		}
		this.exFunc = this.exFunc.bind(this)
	}
	
	exFunc = () => {
		console.log("hey")
	}

	componentDidMount(){
		let nd = document.querySelector('.navdrawer')
		this.setState({drawer: nd})
	}

	componentDidUpdate(){
		if(this.props.show && this.state.drawer != undefined && this.state.drawer != null){
			this.state.drawer.classList.add('navdrawer--active')
		}else{
			this.state.drawer.classList.remove('navdrawer--active')
		}
	}

	render(props, state) {
		return (
			<aside class="navdrawer">
				{
					this.props.items.map(function(item){
						return <a class="navdrawer__item" href={item.href}>{item.title}</a>
					})
				}
			</aside>
		);
	}
}