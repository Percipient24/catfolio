'use strict';

import React from 'react';

class FooterComponent extends React.Component {
  render() {
    return (
      <div className="footer">
        Visit my other website: <a href="http://razcat.net">razcat.net</a>	
      </div>
    );
  }
}

FooterComponent.displayName = 'FooterComponent';

// Uncomment properties you need
// FooterComponent.propTypes = {};
// FooterComponent.defaultProps = {};

export default FooterComponent;
