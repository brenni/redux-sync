const sendState = (state) => {
	if (window.XMLHttpRequest) {
		const xhttp = new XMLHttpRequest();
		xhttp.open('POST', 'state', true);
		xhttp.setRequestHeader('Content-type', 'application/json; charset=UTF-8');
		xhttp.send(JSON.stringify(state));
	} else {
		console.log('There was an issue generating the request');
	}
}

const Logger = store => next => action => {
  let result = next(action);
  console.log('changedState', store.getState());
  sendState(store.getState());
  return result;
}

export default Logger;