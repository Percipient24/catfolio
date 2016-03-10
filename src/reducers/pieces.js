/* Define your initial state here.
 *
 * If you change the type from object to something else, do not forget to update
 * src/container/App.js accordingly.
 */
const initialState = {
  filterOptions: [
    {
      name: 'Illustrations',
      filterName: 'illustrations'
    },
    {
      name: 'Marker Sketches',
      filterName: 'marker_sketches'
    },
    {
      name: 'Graphic Design',
      filterName: 'graphic_design'
    },
    {
      name: 'All',
      filterName: 'all'
    }
  ],
  allPieces: [
    {
      name: 'Pug',
      file: '0_pug.jpg',
      types: 'all graphic_design',
      index: 0
    },
    {
      name: 'Rey',
      file: '1_rey.jpg',
      types: 'all illustrations',
      index: 1
    },
    {
      name: 'Bulbasaur',
      file: '2_bulbasaur.jpg',
      types: 'all marker_sketches',
      index: 2
    },
    {
      name: 'Ariel',
      file: '3_mermaid.jpg',
      types: 'all illustrations',
      index: 3
    },
    {
      name: 'Blue Mermaid',
      file: '4_mermaid_copic.jpg',
      types: 'all marker_sketches',
      index: 4
    },
    {
      name: 'Stitch',
      file: '5_stitch.jpg',
      types: 'all illustrations',
      index: 5
    },
    {
      name: 'Sea Turtle',
      file: '6_turtle.jpg',
      types: 'all marker_sketches',
      index: 6
    },
    {
      name: 'Dr. Who Cat 1',
      file: '7_who_3d.jpg',
      types: 'all illustrations',
      index: 7
    },
    {
      name: 'Dr. Who Cat 2',
      file: '8_who_fez.jpg',
      types: 'all marker_sketches',
      index: 8
    },
    {
      name: 'Jack',
      file: '9_skellington.jpg',
      types: 'all illustrations',
      index: 9
    },
    {
      name: 'Zombies',
      file: '10_zombies.jpg',
      types: 'all marker_sketches',
      index: 10
    },
    {
      name: 'Kiki',
      file: '11_kiki.jpg',
      types: 'all illustrations',
      index: 11
    },
    {
      name: 'Mermaid',
      file: '12_mermaid.jpg',
      types: 'all marker_sketches',
      index: 12
    },
    {
      name: 'Dragon',
      file: '13_dragon.jpg',
      types: 'all illustrations',
      index: 13
    },
    {
      name: 'Edward',
      file: '14_ed.jpg',
      types: 'all marker_sketches',
      index: 14
    },
    {
      name: 'Hermione',
      file: '15_hermione.jpg',
      types: 'all illustrations',
      index: 15
    },
    {
      name: 'Judge Squidward',
      file: '16_squidward.jpg',
      types: 'all marker_sketches',
      index: 16
    },
    {
      name: 'Scarecrow',
      file: '17_scarecrow.jpg',
      types: 'all illustrations',
      index: 17
    },
    {
      name: 'Pika Jupiter',
      file: '18_pika.jpg',
      types: 'all marker_sketches',
      index: 18
    },
    {
      name: 'Psyduck',
      file: '19_psyduck.jpg',
      types: 'all illustrations',
      index: 19
    }
  ],
  selectedIndex: -1,
  currentFilter: 'all',
  viewport: {
    width: 800,
    height: 600
  }
};

module.exports = function(state = initialState, action) {
  /* Keep the reducer clean - do not mutate the original state. */
  let nextState = Object.assign({}, state);

  switch(action.type) {
    
    case 'SET_FILTER': {
      nextState.currentFilter = action.filterName;
      return nextState;
    }
    case 'UPDATE_SIZES': {
      nextState.viewport = {
        width: action.width,
        height: action.height
      };
      return nextState;
    }
    case 'SELECT_PIECE': {
      nextState.selectedIndex = action.index;
      return nextState;
    }
    case 'CLOSE_LIGHTBOX': {
      nextState.selectedIndex = -1;
      return nextState;
    }
    case 'NEXT_PIECE': {
      if (nextState.selectedIndex !== -1) {
        nextState.selectedIndex = Math.min(nextState.selectedIndex + 1, nextState.allPieces.length - 1);
      }
      return nextState;
    }
    case 'PREVIOUS_PIECE': {
      if (nextState.selectedIndex !== -1) {
        nextState.selectedIndex = Math.max(nextState.selectedIndex - 1, 0);
      }
      return nextState;
    }
    default: {
      /* Return original state if no actions were consumed. */
      return state;
    }
  }
}

