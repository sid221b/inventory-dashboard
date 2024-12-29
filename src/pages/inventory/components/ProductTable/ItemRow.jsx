import React from 'react'
import Delete from 'root/assets/svgComponent/Delete'
import Edit from 'root/assets/svgComponent/Edit'
import Eye from 'root/assets/svgComponent/Eye'
import EyeClosed from 'root/assets/svgComponent/EyeClosed'
import { openModal } from '../ItemModal/itemModalSlice'
import { removeItem, toggleDisable } from '../../inventorySlice'
import { useDispatch, useSelector } from 'react-redux'
import { getIsUser } from '../../selectors'

const ItemRow = React.memo(({ item }) => {
  const { id, name, category, price, quantity, value, isDisabled } = item
  const dispatch = useDispatch()
  const isUserType = useSelector(getIsUser)

  const onEditClick = () => {
    dispatch(openModal(item))
  }

  const onDisableClick = () => {
    dispatch(toggleDisable(id))
  }

  const deleteItem = () => {
    dispatch(removeItem(id))
  }

  return (
    <tr key={id} className={isDisabled ? 'disabled-row' : ''}>
      <td>{name}</td>
      <td>{category}</td>
      <td>${price}</td>
      <td>{quantity}</td>
      <td>${value}</td>
      <td className='actions'>
        <button disabled={isUserType || isDisabled} onClick={onEditClick}>
          <Edit size={16} color='green' />
        </button>
        <button disabled={isUserType} onClick={onDisableClick}>
          {!isDisabled ? (
            <Eye size={16} color='skyblue' />
          ) : (
            <EyeClosed size={16} color='skyblue' />
          )}
        </button>
        <button disabled={isUserType || isDisabled} onClick={deleteItem}>
          <Delete size={16} color='red' />
        </button>
      </td>
    </tr>
  )
})

ItemRow.displayName = 'ItemRow'

export default ItemRow
