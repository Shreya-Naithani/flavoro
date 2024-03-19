import {configureStore} from '@reduxjs/toolkit';
import CartSlices from './Slices/CardSlices';
import CategorySlice from './Slices/CategorySlice';
import SearchSlice from './Slices/SearchSlice';

const Store = configureStore({
reducer:{
    cart : CartSlices,
    category :CategorySlice,
    search : SearchSlice,
}
});

export default Store;