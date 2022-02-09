import React from 'react';
import './App.css';
import asset1 from './img/asset1.svg'
import asset2 from './img/asset2.svg'
import asset3 from './img/asset3.svg'
import arrow from './img/arrow-icon.svg'
import Nav from './components/Nav.js'
import axios from 'axios'


class App extends React.Component {

  constructor() {
    super()
    this.state = {
        caseData: [],
        categories: []
    }
    
  }

  componentDidMount() {
    const firstApi = 'https://plankdesign.com/wp-json/plank/v1/fed-test/case-studies'

    // Getting Data
    axios.get(firstApi).then(res => {
      this.setState({ caseData: res.data["case-studies"]}) 
      console.log(this.state.caseData[0].categories[0].title)
    })
    // axios.get(secondApi).then(res => {
    //   this.setState({ categories: res.data["categories"]}) 
    //   console.log(this.state.categories[0].title)
    // })

    

  }

  render() {
    return (
      <div className="App">
        <img src={asset2} alt="3 rows of green dots" id="asset2" />
        
        <h1 id="title">Work</h1>
            <Nav />
        <section id="container">
          {this.state.caseData.map((study) => (
            <div className="card">
              <img src={study.thumbnail} alt='thumbnail of case study' className="thumbnail" />
              <h1 className="study-title">{study.title}</h1>
              <h2 className="category">{study.categories[0].title}</h2>
              <p className="excerpt">{study.excerpt}</p>
              <h3 className="view">View Case Study <img src={arrow} id="arrow" alt="right arrow icon"/></h3>
            </div>
        ))} 
        <img src={asset3} alt="big green circle with smaller orange circle attached on the left " id="asset3" />
        <img src={asset1} alt="3 rows of orange dots with white circle" id="asset1" />
        </section>
    </div>
    );
  }
}

export default App;
