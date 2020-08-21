import {Component, h} from 'preact';
import {Navdrawer} from '../navdrawer';
import style from './style'

export class Header extends Component {

  constructor() {
    super();
    this.state = {
      showMenu: false,
    }
    this.showMenu = this.showMenu.bind(this)
  }

  showMenu = (e) => {
    if(this.state.showMenu){
      this.setState({showMenu: false})
    }else{
      this.setState({showMenu: true})
    }
  }

  render(context) {
    return (
			<header class="header">
        <div class="header__container">

          <button class="mobile__menu__triger" onclick={this.showMenu}>
            <svg width="26" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path class="mobile__menu__triger__icon" d="M0 0h26v2H0zM0 11h26v2H0zM0 22h26v2H0z"/>
            </svg>
          </button>
          
            <div class="header__logo">

              <a 
              class="header__logo__link" 
              href="/" 
              dangerouslySetInnerHTML={{__html: this.props.logo}}
              >
              </a>
            </div>
            <nav class="header__nav text-center">
              {
                this.props.menu.map(function(item){
                  return <a class="header__nav__item" href={item.href}>{item.title}</a>
                })
              }
            </nav>
            <div class="header__cta text-right">
              <a class="btn" href="/login" >Login</a>
            </div>
        </div>
        <Navdrawer show={this.state.showMenu} items={this.props.menu}/>
			</header>
		);
  }
}