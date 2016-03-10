'use strict';

import React from 'react';

var FilterButtonComponent = (props) => {
	let filter = props.filter,
		currentFilter = props.currentFilter,
		classNames = 'filter-button',
		setFilter = () => {
			props.onSetFilter(filter.filterName);
		};

	if (filter.filterName === currentFilter) {
		classNames += ' filter-button--active';
	}



    return (
      <div className={classNames} onClick={setFilter}>
        {filter.name}
      </div>
    );
}

FilterButtonComponent.displayName = 'FilterButtonComponent';

// Uncomment properties you need
// FilterButtonComponent.propTypes = {};
// FilterButtonComponent.defaultProps = {};

export default FilterButtonComponent;
