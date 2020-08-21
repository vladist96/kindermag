import {Component, h} from 'preact';
import {style} from './style/index.scss'

import {logo} from './icons.js'

import { Header } from './components/header';
import { Hero } from './components/hero';
import { Feats } from './components/feats';
import { Footer } from './components/footer';
import {Products} from "./components/products";

class App extends Component {

  constructor() {
    super();
    this.state = {
      location: {},
      menu:[
        {
          id: 0,
          title: "Products",
          href: "/products",
        },
        {
          id: 1,
          title: "Features",
          href: "/features",
        },
        {
          id: 2,
          title: "FAQ",
          href: "/faq",
        },
        {
          id: 3,
          title: "About us",
          href: "/about",
        },
        {
          id: 4,
          title: "Contacts",
          href: "/contacts",
        }
      ],
      contacts: {
        phone: "+01 234 567 89 00",
        email: "some@example.com"
      }
    }
    this.handleLocation = this.handleLocation.bind(this)
  }

  handleLocation = () => {
    fetch("https://freegeoip.app/json/")
    .then(response => response.json())
    .then(data => {
      this.setState({location: data});
      console.log(data)
    })
  }

  componentDidMount(){
    this.handleLocation()
  }


  render() {
    return (
        <div id="app" class="wrap">
          <Header menu={this.state.menu} logo={logo} />
          <Hero />
          <Feats />
          <Products/>
          <Footer logo={logo} menu={this.state.menu} contacts={this.state.contacts} />
        </div>
    );
  }
}

export default App;