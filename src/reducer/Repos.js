import mirror from '../utils/mirror'

const initialState = {
  repos: []
}

export const ReposConst = mirror([
  'REPO_SUCCESS',
  'REPO_TOGGLE',
  'REPO_ERROR'
])

export function Reducer(state = initialState, action) {
  switch (action.type) {
    case ReposConst.REPO_TOGGLE:
      let mappedRepos = _.map(state.repos, function(item){
        return (item.id === action.payload) ? {
          ...item,
          open: !item.open
        } : item
      })
      return {repos: mappedRepos}
    case ReposConst.REPO_SUCCESS:
      let mappedReposS = _.map(action.payload, function(item){
        return {
          ...item,
          open: false
        }
      })
      return {repos: mappedReposS}
    default:
      return state
  }
}
