'use strict';

import React from 'react';

var LightBoxComponent = (props) => {

	let piece = props.piece,
		next = props.onNext,
		previous = props.onPrevious,
		closeLightbox = props.onCloseBox,
		classNames = 'lightbox',
		contents,
		previousClass = 'lightbox__previous',
		nextClass = 'lightbox__next';

	if (piece !== null) {
		classNames += ' lightbox--open'
		contents = <div className="lightbox__content">
				<img className="lightbox__img" src={"http://razcat.com/media/pics/"+piece.file} alt={piece.name} title={piece.name}/>
			</div>;
		if(piece.index > 0) {
			previousClass += ' lightbox__previous--show';
		}
		if(piece.index < 19) {
			nextClass += ' lightbox__next--show';
		}
	} else {
		contents = <div />
	}

    return (
      <div className={classNames}>
      	<div className="lightbox__scrim" onClick={closeLightbox}/>
        {contents}
        <button className={previousClass} onClick={previous}>&larr;</button>
		<button className={nextClass} onClick={next}>&rarr;</button>
      </div>
    );
}

LightBoxComponent.displayName = 'LightBoxComponent';

// Uncomment properties you need
// LightBoxComponent.propTypes = {};
// LightBoxComponent.defaultProps = {};

export default LightBoxComponent;
