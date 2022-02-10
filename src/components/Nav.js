import React from 'react';


class Nav extends React.Component {
    
  render() {
    return (
    <div>
        <nav>
			<ul className="menu">
				<li onClick={this.props.allFilter} className={ this.props.allActive ? "active": ''}>All</li>
				<li onClick={this.props.artsFilter} className={ this.props.artsActive ? "active": ''}>Arts & Culture</li>
				<li onClick={this.props.nonProfitsFilter} className={ this.props.nonProfitsActive ? "active": ''}>Non-Profits</li>
                <li onClick={this.props.publishingFilter} className={ this.props.publishingActive ? "active": ''}>Publishing and Education</li>
				<li onClick={this.props.wellnessFilter} className={ this.props.wellnessActive ? "active": ''}>Wellness</li>
                <li onClick={this.props.sportsFilter} className={ this.props.sportsActive ? "active": ''}>Sports</li>
			</ul>
        </nav>
      </div>
    );
  }
}

export default Nav;
