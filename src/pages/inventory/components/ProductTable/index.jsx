import { useSelector } from 'react-redux'
import { getListItems } from 'root/pages/inventory/selectors'
import ItemRow from './ItemRow'

import './styles.scss'

const ProductTable = () => {
  const listData = useSelector(getListItems)

  return (
    <table className='in_co_product-table'>
      <thead>
        <tr>
          <th>
            <span>Name</span>
          </th>
          <th>
            <span>Category</span>
          </th>
          <th>
            <span>Price</span>
          </th>
          <th>
            <span>Quantity</span>
          </th>
          <th>
            <span>Value</span>
          </th>
          <th>
            <span>Action</span>
          </th>
        </tr>
      </thead>
      <tbody>
        {listData.map((item) => (
          <ItemRow item={item} key={item.id} />
        ))}
      </tbody>
    </table>
  )
}

export default ProductTable
