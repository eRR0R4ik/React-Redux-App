import { createStore } from 'redux';

const appStore = createStore(
	() => ['One', 'Two', 'Three'],
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default appStore

