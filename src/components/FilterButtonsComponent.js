'use strict';

import React from 'react';
import FilterButton from './FilterButtonComponent.js';

var FilterButtonsComponent = (props) => {

	let filters = props.filters,
		currentFilter = props.currentFilter,
		onSetFilter = props.actions.setFilter;

	return (
	  <div className="filter-buttons">
	    {
	      filters.map((filter, n) => <FilterButton filter={filter} currentFilter={currentFilter} onSetFilter={onSetFilter} key={n}/>)
	    }
	  </div>
	);
}

FilterButtonsComponent.displayName = 'FilterButtonsComponent';

// Uncomment properties you need
// FilterButtonsComponent.propTypes = {};
// FilterButtonsComponent.defaultProps = {};

export default FilterButtonsComponent;
