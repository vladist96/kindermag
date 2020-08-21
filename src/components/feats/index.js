import { Component, h } from 'preact';
import {FeatsItem} from './feats__item';
import style from './style';

import {time, world, user} from './../../icons.js'


export class Feats extends Component {
	constructor(props){
	  super(props);
		this.state =  {
		feats: {
				heading: 'Our features',
				desc: 'Example desc',
				items: [{
					id: 0,
					icon: time,
					title: 'Ultra fast',
					content: 'A web application that does not interfere with the browser'
				},
				{
					id: 1,
					icon: world,
					title: 'New WWW Era',
					content: 'Latest technology to enhance user experience'
				},
				{
					id: 2,
					icon: user,
					title: 'User friendly',
					content: 'The user is everything. The rest will be computer'
				},
				]
			}
		}
		this.exFunc = this.exFunc.bind(this)
	}
	
	exFunc = () => {
		console.log("hey")
	}

	render(props, state) {
		console.log(this.state.feats)
		return (
			<section class="feats section_base">
				<div class="container">
					<h2 class="text-center feats__heading">{this.state.feats.heading}</h2>
					<p class="text-center feats__desc">{this.state.feats.desc}</p>
					<div class="row">
						{
							this.state.feats.items.map(function(item){
								return <FeatsItem title={item.title} content={item.content} img={item.icon} />
							}, this)
						}
					</div>

				</div>
			</section>
		);
	}
}