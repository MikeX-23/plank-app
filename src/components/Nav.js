import React from 'react';


class Nav extends React.Component {
    
  render() {
    return (
    <div>
        <nav>
			<ul className="menu">
				<li onClick={this.props.allFilter} className="active">All</li>
				<li onClick={this.props.artsFilter}>Arts & Culture</li>
				<li onClick={this.props.nonProfitsFilter}>Non-Profits</li>
                <li onClick={this.props.publishingFilter}>Publishing and Education</li>
				<li onClick={this.props.wellnessFilter}>Wellness</li>
                <li onClick={this.props.sportsFilter}>Sports</li>
			</ul>
        </nav>
      </div>
    );
  }
}

export default Nav;
