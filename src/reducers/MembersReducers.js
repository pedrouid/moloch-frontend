const INITIAL_STATE = {
  items: [],
  isFetching: false,
  error: undefined
};

function MembersReducers(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "FETCH_MEMBERS_REQUEST":
      // This time, you may want to display loader in the UI.
      return Object.assign({}, state, {
        isFetching: true
      });
    case "FETCH_MEMBERS_SUCCESS":
      // Adding derived members to state
      return Object.assign({}, state, {
        isFetching: false,
        items: action.items
      });
    case "FETCH_MEMBERS_FAILURE":
      // Providing error message to state, to be able display it in UI.
      return Object.assign({}, state, {
        isFetching: false,
        error: action.error
      });
    default:
      return state;
  }
}

export default MembersReducers;
