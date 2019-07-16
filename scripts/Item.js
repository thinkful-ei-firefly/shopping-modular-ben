/* eslint-disable no-extra-boolean-cast */
'use strict';
/* global cuid */

function validateName(name) {
  if (!name) {
    throw new TypeError('Name does not exist.');
  }
}

function create(name) {
  return { id: cuid(), name: name, checked: false };
}

const Item = (function() {
  return {
    validateName: validateName,
    create: create
  };
})();