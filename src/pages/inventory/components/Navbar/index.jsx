import { useDispatch, useSelector } from 'react-redux'
import logout from 'root/assets/logout.svg'
import { getIsUser } from 'root/pages/inventory/selectors'
import { toggleUser } from 'root/pages/inventory/inventorySlice'

import './styles.scss'

const Navbar = () => {
  const dispatch = useDispatch()
  const isChecked = useSelector(getIsUser)

  const onUserToggle = () => {
    dispatch(toggleUser())
  }

  return (
    <nav className='navbar'>
      <div className='navbar_left'>
        <span>admin</span>
        <input type='checkbox' id='check' checked={isChecked} onChange={onUserToggle} />
        <span>user</span>
      </div>
      <div className='navbar_right'>
        <img src={logout} />
      </div>
    </nav>
  )
}

export default Navbar
