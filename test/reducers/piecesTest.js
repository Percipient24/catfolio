var reducer = require('../../src/reducers/pieces');

describe('pieces', () => {

  it('should not change the passed state', (done) => {

    const state = Object.freeze({});
    reducer(state, {type: 'INVALID'});

    done();
  });
});
