import React from 'react';


class Nav extends React.Component {
  render() {
    return (
    <div>
        <nav>
			<ul className="menu">
				<li className="active">All</li>
				<li>Arts & Culture</li>
				<li>Non-Profits</li>
                <li>Publishing and Education</li>
				<li>Wellness</li>
                <li>Sports</li>
			</ul>
        </nav>
      </div>
    );
  }
}

export default Nav;
