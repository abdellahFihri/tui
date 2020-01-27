import {createSelector} from 'reselect';

const selectUsersColumns=state=>state.usersColumns;

export const selectUsersCols=createSelector(
    [selectUsersColumns],
    usersColumns=>usersColumns.usersColumns
)