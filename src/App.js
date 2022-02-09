import React from 'react';
import './App.css';
import asset1 from './img/asset1.svg'
import asset2 from './img/asset2.svg'
import asset3 from './img/asset3.svg'
import Nav from './components/Nav.js'


class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1 id="title">Work</h1>
            <Nav />
            <div id="divider"></div>
          <section id="container">
            <div class="card">
              test
            </div>
            <div class="card">
              test 2
            </div>
            <div class="card">
              test 3
            </div>
            <div class="card">
              test 4
            </div>
          </section>

        <img src={asset1} alt="3 rows of orange dots with white circle" id="asset1" />
        <img src={asset2} alt="3 rows of green dots" id="asset2" />
        <img src={asset3} alt="big green circle with smaller orange circle attached on the left " id="asset3" />
      </div>
    );
  }
}

export default App;
