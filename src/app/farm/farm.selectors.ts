import { createSelector } from '@ngrx/store';
import { selectFarmState } from '../app.state';
import { FarmState } from './farm.reducer';

export const selectSelectedFarmId = createSelector(
    selectFarmState,
    (state: FarmState) => state.selectedFarmId,
);
export const selectForm = createSelector(
    selectFarmState,
    (state: FarmState) => state.form,
);
export const selectEdit = createSelector(
    selectFarmState,
    (state: FarmState) => state.edit,
);
export const selectError = createSelector(
    selectFarmState,
    (state: FarmState) => state.error,
);
export const selectLoading = createSelector(
    selectFarmState,
    (state: FarmState) => state.loading,
);
export const selectFarms = createSelector(
    selectFarmState,
    (state: FarmState) => state.farms,
);
export const selectButtonStates = createSelector(
    selectFarmState,
    (state: FarmState) => state.buttonStates,
);
