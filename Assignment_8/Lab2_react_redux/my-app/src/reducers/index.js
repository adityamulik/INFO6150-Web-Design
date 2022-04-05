
const reducer = (state=0, action) => {
  switch(action.type) {
    case 'Increment': return state + 1;
    case 'Decrement': return state - 1;
    case 'Reset': return 0;

    default: return state;
  }
}

export default reducer;