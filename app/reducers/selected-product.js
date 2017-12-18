export default (state = null, action) => {
  switch(action.type){
    case 'SELECT_PRODUCT':
      //console.log(action.payload);
      return { ...action.payload };
    default:
      return state;
  }
}
