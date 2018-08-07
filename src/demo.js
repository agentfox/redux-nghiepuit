import {createStore} from 'redux';
import {toggleStatus,closeModal,sort} from './actions/index';
import myReducer from './reducers/'



const store = createStore(myReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
console.log('Default :',store.getState());

store.dispatch(toggleStatus());
console.log('Toggle :',store.getState());

store.dispatch(closeModal());
console.log('Close :',store.getState());


store.dispatch(sort());
console.log('SORT :',store.getState());
