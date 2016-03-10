'use strict';

import React from 'react';
import Piece from 'components/PieceComponent.js';
import { calculateAcross } from 'stores/layoutHelper.js';

var PiecesComponent = (props) => {
    let pieces = props.pieces,
    	viewport = props.viewport,
		currentFilter = props.currentFilter,
    	across = calculateAcross(viewport),
    	filtered = pieces.filter((p) => { return p.types.indexOf(currentFilter) !== -1;}),
    	rows = Math.ceil(filtered.length/across),
    	height = viewport.width/across * rows;

	return (
	  <div className="pieces"
	  	   style={{
	  	   	height: `${height}px`
	  	   }}>
	    {
	      filtered.map((piece, n) => <Piece piece={piece} 
	      							across={across}
	      							onSelectPiece={props.actions.selectPiece}
	      							viewport={viewport}
	      							index={n} 
	      							key={piece.name}/>)
	    }
	  </div>
	);
}

PiecesComponent.displayName = 'PiecesComponent';

// Uncomment properties you need
// PiecesComponent.propTypes = {};
// PiecesComponent.defaultProps = {};

export default PiecesComponent;
