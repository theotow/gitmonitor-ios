

export function trimBranch(branch){
  var parts = branch.split('/');
  return parts[parts.length - 1];
}
