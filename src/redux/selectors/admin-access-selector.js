import {createSelector} from 'reselect';

const getAdmin=state=>state.admin;

export const getAdminAccess=createSelector(
    [getAdmin],
    admin=>admin.admin
)