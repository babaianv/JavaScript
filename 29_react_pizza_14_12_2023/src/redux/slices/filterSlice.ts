import { createSlice } from "@reduxjs/toolkit"
import { RootState } from "../store";

interface FilterState {
    categoryId: number,
    categoryNames: [
        'Все',
        'Мясные',
        'Вегетарианские',
        'Гриль',
        'Острые',
        'Закрытые'
    ],
    categoryName: string,
    sortingItem: {
        name: string,
        sortProperty: string,
        order: string
    },
    currentPage: number
}

const initialState: FilterState = {
    categoryId: 0,
    categoryNames: [
        'Все',
        'Мясные',
        'Вегетарианские',
        'Гриль',
        'Острые',
        'Закрытые'
    ],
    categoryName: 'Все',
    sortingItem: {
        name: 'популярности',
        sortProperty: 'rating',
        order: 'desc'
    },
    currentPage: 1
}

export const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        onClickCategory(state, action) {
            state.categoryId = action.payload;
            state.categoryName = state.categoryNames[state.categoryId];
        },
        onClickSort(state, action) {
            state.sortingItem = action.payload;
        },
        setCurrentPage(state, action) {
            state.sortingItem = action.payload;
        }
    }
});

export const selectFilter = (state: RootState) => state.filter;

export const { onClickCategory, onClickSort, setCurrentPage } = filterSlice.actions;

export default filterSlice.reducer;