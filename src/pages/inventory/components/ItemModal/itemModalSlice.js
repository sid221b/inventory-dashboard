import { createSlice } from '@reduxjs/toolkit'

const itemModalSlice = createSlice({
  name: 'itemModal',
  initialState: {
    isModalOpen: false,
    item: {},
  },
  reducers: {
    openModal(state, action) {
      state.isModalOpen = true
      state.item = action.payload
    },
    closeModal(state) {
      state.isModalOpen = false
      state.item = {}
    },
  },
})

export const { openModal, closeModal } = itemModalSlice.actions

export default itemModalSlice
