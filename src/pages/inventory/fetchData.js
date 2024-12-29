import { setInitData } from './inventorySlice'

const endPoint = 'https://dev-0tf0hinghgjl39z.api.raw-labs.com/inventory'

const parseData = (data) => {
  return data.map((item, id) => {
    const { name, category, price, quantity, value } = item
    return {
      id,
      name,
      category,
      price: Number(price.split('$')[1]),
      quantity,
      value: Number(value.split('$')[1] || 0),
      isDisabled: false,
    }
  })
}

const fetchData = () => async (dispatch) => {
  try {
    const response = await fetch(endPoint)
    const data = await response.json()
    dispatch(setInitData(parseData(data)))
  } catch (error) {
    console.log('error', error)
    alert('Error fetching data')
  }
}

export default fetchData
