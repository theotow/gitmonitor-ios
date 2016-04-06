import {
  ReposConst
} from '../reducer/Repos'
import * as utils from '../utils/api'

export function getList(iId) {
  return (dispatch, getState) => {
    dispatch({
      type: ReposConst.REPO_LOADING
    })
    utils.list(getState().settings.endpoint, iId).then(response => response.json()).then((data) => {
      dispatch({
        type: ReposConst.REPO_SUCCESS,
        payload: data
      })
    }).catch(() => {
      alert('error getting List')
      dispatch({
        type: AuthConst.REPO_ERROR
      })
    })
  }
}

export function toggleItem(id) {
  return {
    type: ReposConst.REPO_TOGGLE,
    payload: id
  }
}
