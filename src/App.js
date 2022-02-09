import React from 'react';
import './App.css';
import asset1 from './img/asset1.svg'
import asset2 from './img/asset2.svg'
import asset3 from './img/asset3.svg'
import Nav from './components/Nav.js'
import axios from 'axios'


class App extends React.Component {

  constructor() {
    super()
    this.state = {
        caseData: []
    }
    
  }

  componentDidMount() {
    const api = 'https://plankdesign.com/wp-json/plank/v1/fed-test/case-studies'
    
    // Getting Data
    axios.get(api).then(res => {
      this.setState({ caseData: res.data["case-studies"]}) 
    })

  }

  render() {
    return (
      <div className="App">
         <img src={asset1} alt="3 rows of orange dots with white circle" id="asset1" />
        <img src={asset2} alt="3 rows of green dots" id="asset2" />
        <img src={asset3} alt="big green circle with smaller orange circle attached on the left " id="asset3" />
        <h1 id="title">Work</h1>
            <Nav />
        <section id="container">
          {this.state.caseData.map((study) => (
            <div className="card">
              <img src={study.thumbnail} alt='thumbnail of case study' />
              <h1>{study.title}</h1>
              <h2>{study.category}</h2>
              <p>{study.excerpt}</p>
            </div>
        ))}  
        </section>
    </div>
    );
  }
}

export default App;
