import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import AdminAccess from './admin-reducer'
import addUserReducer from './addUserReducer';
import CurrentUser from './current-user';
import adminUiCols from './admin-ui-cols-reducer';
import usersCols from './users-cols-reducer'


const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['users']
};

const rootReducer = combineReducers({
users:addUserReducer,
admin:AdminAccess,
currentUser:CurrentUser,
cols:adminUiCols,
usersColumns:usersCols
});

export default persistReducer(persistConfig, rootReducer);