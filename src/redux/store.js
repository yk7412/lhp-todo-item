import { configureStore } from '@reduxjs/toolkit'
import mainSlice from './slice/main'

export default configureStore({
    reducer: {
        main: mainSlice
    }
})