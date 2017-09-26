import { combineReducers } from 'redux';
import { HELLO_WORLD_NAME_UPDATE } from '../constants/helloWorldConstants';

const name = (state = [], action) => {
  switch (action.type) {
    case HELLO_WORLD_NAME_UPDATE:
      return action.text;
    case 'CREATE_COURSE':
      return action.text;
    default:
      return state;
  }
};

const courses = (state = [], action) => {
  switch (action.type) {
    case 'CREATE_COURSE':
      return action.text;
    default:
      return state;
  }
};

const helloWorldReducer = combineReducers({ name, courses });

export default helloWorldReducer;
/*[...state,
    Object.assign({},action.course)
  ];*/
