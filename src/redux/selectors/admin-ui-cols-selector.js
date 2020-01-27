import {createSelector} from 'reselect';

const selectColumns=state=>state.cols;

export const selectAdminUiCols=createSelector(
    [selectColumns],
    cols=>cols
)