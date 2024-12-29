import { createSlice } from '@reduxjs/toolkit'

const inventorySlice = createSlice({
  name: 'inventory',
  initialState: {
    items: [],
    isUser: true,
  },
  reducers: {
    setInitData(state, action) {
      console.log('action', action)
      state.items = action.payload
    },
    addItem(state, action) {
      state.items.push(action.payload)
    },
    editItem(state, action) {
      const { id, category, price, quantity, value } = action.payload
      const item = state.items.find((item) => item.id === id)
      if (item) {
        item.category = category
        item.price = Number(price)
        item.quantity = Number(quantity)
        item.value = Number(value)
      }
    },
    toggleDisable(state, action) {
      const item = state.items.find((item) => item.id === action.payload)
      if (item) {
        item.isDisabled = !item.isDisabled
      }
    },
    removeItem(state, action) {
      state.items = state.items.filter((item) => item.id !== action.payload)
    },
    toggleUser(state) {
      state.isUser = !state.isUser
    },
  },
})

export const { setInitData, addItem, editItem, removeItem, toggleUser, toggleDisable } =
  inventorySlice.actions

export default inventorySlice
