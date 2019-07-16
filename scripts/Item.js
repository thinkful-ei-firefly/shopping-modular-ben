/* eslint-disable */
function validateName(name) {
  if (name == undefined) {
    throw new TypeError('Name does not exist.');
  }
}

function create(name) {
  return { id: cuid(), name: name, checked: false };
}

const Item = (function() {
  return {
    validateName: validateName(),
    create: create()
  };
})();
