import { configureStore, combineSlices } from '@reduxjs/toolkit'
import inventorySlice from 'root/pages/inventory/inventorySlice'
import itemModalSlice from 'root/pages/inventory/components/ItemModal/itemModalSlice'

const rootReducer = combineSlices(itemModalSlice, inventorySlice)

const store = configureStore({
  reducer: rootReducer,
})

export default store
