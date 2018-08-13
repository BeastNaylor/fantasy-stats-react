import league from '../../../sample_data/league.json'

const request = (url) => new Promise((resolve, reject) => {
  resolve({ entity: JSON.parse(league) })
})

export default request
