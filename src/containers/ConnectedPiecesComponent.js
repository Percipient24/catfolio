import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Pieces from 'components/PiecesComponent.js';
import selectPiece from 'actions/selectPiece.js';

function mapDispatchToProps(dispatch) {
	/* Populated by react-webpack-redux:action */
	const actions = {
		selectPiece
	};

	const actionMap = { actions: bindActionCreators(actions, dispatch) };
	return actionMap;
}

function mapStateToProps(state, ownProps) {
	// ownProps supplies: key, index, and all article-related props
	return {
		pieces: state.pieces.allPieces,
		currentFilter: state.pieces.currentFilter,
		viewport: state.pieces.viewport
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(Pieces);
