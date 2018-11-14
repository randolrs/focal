export default (state = {}, action) => {
 switch (action.type) {
  case 'SIMPLE_ACTION':
	return Object.assign({}, state, {
		simpleAction: action.payload
	});
  default:
   return state
 }
}