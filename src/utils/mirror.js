import _ from 'lodash';

export default function mirror(obj){
  const out = {};
  _.forEach(obj, function(key){
    out[key] = key;
  });
  return out;
}
