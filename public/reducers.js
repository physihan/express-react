const initialState = {
  counter: 0
}
/**
 * reducer
 * 
 * @param {any} state
 * @param {any} action
 */
function counterApp (state = initialState , action) {
  switch (action.type) {
    case 'add':
      return Object.assign({}, state, {counter: state.counter + 1}) // 深复制，后面的覆盖前面的，是覆盖同一个属性
    default:
      return state
  }
}

export default counterApp
