import { Component, h } from 'preact';
import style from './style';

export class Products extends Component {
	constructor(props){
	  super(props);
		this.state =  {
			prod: []
		}
		this.handleProducts = this.handleProducts.bind(this)
	}

	handleProducts = () => {
		fetch("http://www.kindermag.in.ua/wp-json/wc/store/products")
			.then(response => response.json())
			.then(data => {
				this.setState({prod: data});
				console.log(data)
			})
	}

	componentWillMount() {
		this.handleProducts()
	}

	render(props, state) {
		if (state.prod.length > 0){
			return (
				<section class="products section_base">
					<div class="container">
						<div class='row'>
							{state.prod.map((item)=>{
								return (
									<div className='product__card'>
										<img srcSet={item.images[0].thumbnail}/>
										<div class='product__name'>{item.name}</div>
										<span class='product__price'dangerouslySetInnerHTML={{ __html: item.price_html }}/>
									</div>)
							})}
						</div>

					</div>
				</section>
			);
		}
	}
}