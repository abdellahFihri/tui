import {createSelector} from 'reselect';

const selectCurrent=state=>state.currentUser;

export const selectCurrentUser=createSelector(
    [selectCurrent],
    currentUser=>currentUser.currentUser
)