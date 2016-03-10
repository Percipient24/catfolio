require('normalize.css');
require('styles/_main.scss');

import React from 'react';
import FilterButtons from '../containers/ConnectedFilterButtonsComponent.js';
import Pieces from '../containers/ConnectedPiecesComponent.js';
import Header from 'components/HeaderComponent.js';
import Footer from 'components/FooterComponent.js';
import LightBox from 'components/LightBoxComponent.js';

class AppComponent extends React.Component {
	constructor(props) {
		super(props);
		console.log('woo');

		window.addEventListener('resize', () => {
			this.updateSize();
		});

    window.addEventListener('keydown', (event) => {
      if (event.code === 'ArrowLeft') {
        this.props.actions.previousPiece();
      } else if (event.code === 'ArrowRight') {
        this.props.actions.nextPiece();
      }
    });

		this.updateSize();
	}
	updateSize() {
		this.props.actions.updateSizes(document.documentElement.clientWidth, document.documentElement.clientHeight);
	}
  handleKeys(event) {
    console.log(event.code);
  }

  render() {

  	let props = this.props,
  		actions = props.actions,
  		pieces = props.pieces,
  		displayPiece = pieces.selectedIndex !== -1 ? pieces.allPieces[pieces.selectedIndex] : null;

    return (
      <div className="index">
      	<Header />
      	<Pieces />
      	<Footer />
      	<LightBox piece={displayPiece} onCloseBox={actions.closeLightbox} onNext={actions.nextPiece} onPrevious={actions.previousPiece}/>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
