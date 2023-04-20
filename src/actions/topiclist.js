import { getJSON, postJSON } from '../utils/request'
import api from '../constants/api'
// import 'regenerator-runtime/runtime'

export default function getTopicList(params) {
  return async (dispatch) => {
    let res = await getJSON(api.gettopics, params)
    if (res && res.data) {
      console.log(res)
      dispatch({ type: 'getTopicList', list: res.data.data })
    }
  }
}
