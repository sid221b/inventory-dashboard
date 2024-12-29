import { useDispatch } from 'react-redux'
import ProductTable from './components/ProductTable'
import WidgetSection from './components/WidgetSection'
import Navbar from './components/Navbar'
import { useEffect } from 'react'
import fetchData from './fetchData'
import ItemModal from './components/ItemModal'

const Inventory = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchData())
  }, [])

  return (
    <main>
      <Navbar />
      <h1>Inventory</h1>
      <WidgetSection />
      <ProductTable />
      <ItemModal />
    </main>
  )
}

export default Inventory
