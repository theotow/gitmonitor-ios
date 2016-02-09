export function install(endpoint, data){
  return fetch(endpoint+ '/api/installations', {
      method: 'post',
      body: JSON.stringify(data),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
}

export function link(endpoint, iId, rId){
  return fetch(endpoint+ '/api/installations/'+ iId +'/repos/rel/' + rId, {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
}

export function list(endpoint, iId){
  return fetch(endpoint+ '/api/installations/'+ iId +'/repos', {
      method: 'get',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
}
