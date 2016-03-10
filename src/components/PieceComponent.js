'use strict';

import React from 'react';
import { calculateAcross,
		 calculateBGX,
		 calculateBGY,
		 calculateBGSize } from 'stores/layoutHelper.js';

var PieceComponent = (props) => {
    let piece = props.piece,
    	index = props.index,
    	viewport = props.viewport,
    	across = calculateAcross(viewport),
    	width = viewport.width / across,
    	x = (index%across) * width,
    	y = Math.floor(index/across) * width,
    	bgx = calculateBGX(index),
    	bgy = calculateBGY(index),
    	bgsize = calculateBGSize(viewport, across),
    	selectPiece = () => {
    		props.onSelectPiece(piece.index);
    	};

	return (
	  <div className="piece"
	  	   style={{
	  	   	width: width,
	  	   	height: width,
	  	   	transform: `translate(${x}px, ${y}px)`,
	  	   	backgroundImage: 'url(http://razcat.com/media/pics/th_' + piece.file + ')',
	  	   	backgroundSize: 'cover'
	  	   }}
	  	   onClick={selectPiece}>
	  </div>
	);
}

PieceComponent.displayName = 'PieceComponent';

// Uncomment properties you need
// PiecesComponent.propTypes = {};
// PiecesComponent.defaultProps = {};

export default PieceComponent;
