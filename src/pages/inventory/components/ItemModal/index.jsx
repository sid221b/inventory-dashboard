import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getSelectedItem, isItemModalOpen } from './modalSelector'
import { closeModal } from './itemModalSlice'
import { editItem } from '../../inventorySlice'

import './styles.scss'

const ItemModal = React.memo(() => {
  const dispatch = useDispatch()
  const isModalOpen = useSelector(isItemModalOpen)
  const selectedItem = useSelector(getSelectedItem)

  const [localState, setLocalState] = React.useState({})

  const onCancel = (e) => {
    e.preventDefault()
    dispatch(closeModal())
  }

  const onSave = (e) => {
    e.preventDefault()
    if (!localState.category) {
      alert('Please fill all fields')
      return
    }
    dispatch(editItem(localState))
    dispatch(closeModal())
  }

  useEffect(() => {
    setLocalState(selectedItem)
  }, [selectedItem])

  const handleInputChange = (e) => {
    const { id, value } = e.target
    setLocalState((prevState) => ({
      ...prevState,
      [id]: value,
    }))
  }

  if (!isModalOpen) {
    return null
  }
  return (
    <div className='item-modal'>
      <form>
        <h2>Edit Product</h2>
        <h3>{selectedItem.name}</h3>
        <p>{selectedItem.description}</p>
        <div className='input-container'>
          <div className='input-group'>
            <label htmlFor='category'>Category</label>
            <input
              id='category'
              type='text'
              required
              value={localState.category}
              onChange={handleInputChange}
            />
          </div>

          <div className='input-group'>
            <label htmlFor='price'>Price</label>
            <input id='price' type='number' value={localState.price} onChange={handleInputChange} />
          </div>

          <div className='input-group'>
            <label htmlFor='quantity'>Quantity</label>
            <input
              id='quantity'
              type='number'
              value={localState.quantity}
              onChange={handleInputChange}
            />
          </div>

          <div className='input-group'>
            <label htmlFor='value'>Value</label>
            <input id='value' value={localState.value} type='number' onChange={handleInputChange} />
          </div>
        </div>
        <div className='modal-footer'>
          <button onClick={onCancel} className='cancel'>
            Cancel
          </button>
          <button onClick={onSave} className='save'>
            Save
          </button>
        </div>
      </form>
    </div>
  )
})

ItemModal.displayName = 'ItemModal'

export default ItemModal
