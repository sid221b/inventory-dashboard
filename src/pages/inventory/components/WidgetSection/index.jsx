import { useMemo } from 'react'
import Cart from 'root/assets/svgComponent/Cart'
import InfoCard from './InfoCard'
import Category from 'root/assets/svgComponent/Category'
import CartOff from 'root/assets/svgComponent/CartOff'
import Currency from 'root/assets/svgComponent/Currency'
import { useSelector } from 'react-redux'
import { getListItems } from '../../selectors'

import './styles.scss'

const WidgetSection = () => {
  const itemsList = useSelector(getListItems)

  const totalProducts = useMemo(() => itemsList.length, [itemsList])
  const totalValue = useMemo(
    () => itemsList.reduce((acc, item) => acc + item.value, 0),
    [itemsList]
  )
  const outOfStock = useMemo(
    () => itemsList.filter((item) => item.quantity === 0).length,
    [itemsList]
  )
  const numOfCategory = useMemo(
    () => new Set(itemsList.map((item) => item.category)).size,
    [itemsList]
  )

  return (
    <section className='in_co_widget-section'>
      <InfoCard icon={Cart} title={'Total Products'} value={totalProducts} />
      <InfoCard icon={Currency} title={'Total Store Value'} value={totalValue} />
      <InfoCard icon={CartOff} title={'Out of Stock'} value={outOfStock} />
      <InfoCard icon={Category} title={'No of Category'} value={numOfCategory} />
    </section>
  )
}

export default WidgetSection
