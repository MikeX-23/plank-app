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
        caseCategories: [],
        noResults: false,
        allActive: false,
        artsActive: false,
        nonProfitsActive: false,
        publishingActive: false,
        wellnessActive: false,
        sportsActive: false
        
        
    }
    this.allFilter = this.allFilter.bind(this)
    this.artsFilter = this.artsFilter.bind(this)
    this.nonProfitsFilter = this.nonProfitsFilter.bind(this)
    this.publishingFilter = this.publishingFilter.bind(this)
    this.wellnessFilter = this.wellnessFilter.bind(this)
    this.sportsFilter = this.sportsFilter.bind(this)
  }

  componentDidMount() {
    const firstApi = 'https://plankdesign.com/wp-json/plank/v1/fed-test/case-studies'

    // Getting Data
    axios.get(firstApi).then(res => {
      this.setState({ 
        caseData: res.data["case-studies"],
        allActive: true
    }) 
      console.log(this.state.caseData[6].categories[0].title)
    })
    
  }

  allFilter() {
      // Making Request to API
      const firstApi = 'https://plankdesign.com/wp-json/plank/v1/fed-test/case-studies'
      axios.get(firstApi).then(res => {
        this.setState({ caseData: res.data["case-studies"],
        noResults: false,
        allActive: true,
        artsActive: false,
        nonProfitsActive: false,
        publishingActive: false,
        wellnessActive: false,
        sportsActive: false
      }) 
        const secondApi = 'https://plankdesign.com/wp-json/plank/v1/fed-test/categories' 
        axios.get(secondApi).then(res => {
         this.setState({ 
           caseCategories: res.data["categories"],
      
        })
    
     
        if(this.state.caseData) {
        var allData = this.state.caseData.filter((item) => {
               return this.state.caseData
              })
              this.setState({
                caseData: allData
              })
            }
       })
      })
  }
 
  artsFilter() {
    // Making Request to API
    const firstApi = 'https://plankdesign.com/wp-json/plank/v1/fed-test/case-studies'
    axios.get(firstApi).then(res => {
      this.setState({ caseData: res.data["case-studies"],
      noResults: false,
      allActive: false,
      artsActive: true,
      nonProfitsActive: false,
      publishingActive: false,
      wellnessActive: false,
      sportsActive: false
    }) 
      const secondApi = 'https://plankdesign.com/wp-json/plank/v1/fed-test/categories' 
      axios.get(secondApi).then(res => {
       this.setState({ 
         caseCategories: res.data["categories"]
      })
  
      // filtering category title
      if(this.state.caseCategories[0].title == this.state.caseData[0].categories[0].title) {
      var artData = this.state.caseData.filter((item) => {
             return this.state.caseCategories[0].title == item.categories[0].title
            })
            this.setState({
              caseData: artData
            })
          }
     })
    })
    
  }

  nonProfitsFilter() {
    // Getting Data
    const firstApi = 'https://plankdesign.com/wp-json/plank/v1/fed-test/case-studies'
    axios.get(firstApi).then(res => {
      this.setState({ caseData: res.data["case-studies"],
      noResults: false,
      allActive: false,
      artsActive: false,
      nonProfitsActive: true,
      publishingActive: false,
      wellnessActive: false,
      sportsActive: false
    }) 
      const secondApi = 'https://plankdesign.com/wp-json/plank/v1/fed-test/categories'
      axios.get(secondApi).then(res => {
       this.setState({ 
         caseCategories: res.data["categories"]})

         if(this.state.caseCategories[1].title == this.state.caseData[3].categories[0].title ) {
          var nonProfitData = this.state.caseData.filter((item) => {
                 return this.state.caseCategories[1].title == item.categories[0].title
            })

          this.setState({
            caseData: nonProfitData
      }) 
     }
   })    
 })
}

publishingFilter() {
  // Getting Data
  const firstApi = 'https://plankdesign.com/wp-json/plank/v1/fed-test/case-studies'
  axios.get(firstApi).then(res => {
    this.setState({ caseData: res.data["case-studies"],
    noResults: false,
    allActive: false,
    artsActive: false,
    nonProfitsActive: false,
    publishingActive: true,
    wellnessActive: false,
    sportsActive: false
  }) 
    const secondApi = 'https://plankdesign.com/wp-json/plank/v1/fed-test/categories'
    axios.get(secondApi).then(res => {
     this.setState({ 
       caseCategories: res.data["categories"]})

       if(this.state.caseCategories[2].title == this.state.caseData[4].categories[0].title ) {
        var publishingData = this.state.caseData.filter((item) => {
               return this.state.caseCategories[2].title == item.categories[0].title
          })

        this.setState({
          caseData: publishingData
    }) 
   }
 })    
})
}

wellnessFilter() {
  // Getting Data
  const firstApi = 'https://plankdesign.com/wp-json/plank/v1/fed-test/case-studies'
  axios.get(firstApi).then(res => {
    this.setState({ caseData: res.data["case-studies"],
    noResults: false,
    allActive: false,
    artsActive: false,
    nonProfitsActive: false,
    publishingActive: false,
    wellnessActive: true,
    sportsActive: false
  }) 
    const secondApi = 'https://plankdesign.com/wp-json/plank/v1/fed-test/categories'
    axios.get(secondApi).then(res => {
     this.setState({ 
       caseCategories: res.data["categories"]})

       if(this.state.caseCategories[4].title == this.state.caseData[6].categories[0].title ) {
        var wellnessData = this.state.caseData.filter((item) => {
               return this.state.caseCategories[4].title == item.categories[0].title
          })

        this.setState({
          caseData: wellnessData
    }) 
   }
 })    
})
}

sportsFilter() {
        this.setState({
          caseData: [],
          noResults: true,
          allActive: false,
          artsActive: false,
          nonProfitsActive: false,
          publishingActive: false,
          wellnessActive: false,
          sportsActive: true      
    }) 
}

  render() {
    return (
      <div className="App">
        <img src={asset2} alt="3 rows of green dots" id="asset2" />
        
        <h1 id="title">Work</h1>
            <Nav 
                allFilter = {this.allFilter}
                artsFilter = {this.artsFilter}
                nonProfitsFilter = {this.nonProfitsFilter}
                publishingFilter = {this.publishingFilter}
                wellnessFilter = {this.wellnessFilter}
                sportsFilter = {this.sportsFilter}

                allActive = {this.state.allActive} 
                artsActive = {this.state.artsActive} 
                nonProfitsActive = {this.state.nonProfitsActive} 
                publishingActive = {this.state.publishingActive}
                wellnessActive = {this.state.wellnessActive}  
                sportsActive = {this.state.sportsActive}
               
               
            />
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
         { this.state.noResults ? <h1 id="results">No Results Found</h1>: '' }
        <img src={asset3} alt="big green circle with smaller orange circle attached on the left " id="asset3" />
        <img src={asset1} alt="3 rows of orange dots with white circle" id="asset1" />
        </section>
       
    </div>
    );
  }
}

export default App;
