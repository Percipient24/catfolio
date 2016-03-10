import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import FilterButtons from 'components/FilterButtonsComponent.js';
import setFilter from 'actions/setFilter.js';

function mapDispatchToProps(dispatch) {
	/* Populated by react-webpack-redux:action */
	const actions = {
		setFilter
	};

	const actionMap = { actions: bindActionCreators(actions, dispatch) };
	return actionMap;
}

function mapStateToProps(state, ownProps) {
	// ownProps supplies: key, index, and all article-related props
	return {
		filters: state.pieces.filterOptions,
		currentFilter: state.pieces.currentFilter
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(FilterButtons);
