/* eslint-disable no-unused-vars */
/* global cuid Item */

'use strict';

const store = (function() {
  const items = [
    { id: cuid(), name: 'apples', checked: false },
    { id: cuid(), name: 'oranges', checked: false },
    { id: cuid(), name: 'milk', checked: true },
    { id: cuid(), name: 'bread', checked: false }
  ];
  const hideCheckedItems = false;
  const searchTerm = '';
  const findById = id => {
    return this.items.find(item => item.id === id);
  };
  const addItem = name => {
    try {
      Item.validateName(name);
      this.items.push(Item.create(name));
    } catch (error) {
      console.log(`Cannot add item: ${error.message}`);
    }
  };
  const findAndToggleChecked = id => {
    this.findById(id).checked = !this.findById(id).checked;
  };
  const findAndUpdateName = (id, newName) => {
    try {
      Item.validateName(newName);
      let item = this.findById(id);
      item.name = newName;
    } catch (error) {
      console.log(`Cannot update name: ${error.message}`);
    }
  };
  const findAndDelete = id => {
    const filterItem = this.findById(id);
    this.items = this.items.filter(item => item !== filterItem);
  };
  const toggleCheckedFilter = () => {
    this.hideCheckedItems = !this.hideCheckedItems;
  };
  const setSearchTerm = searchTerm => {
    this.searchTerm = searchTerm;
  };

  return {
    items,
    hideCheckedItems,
    searchTerm,
    findById,
    addItem,
    findAndToggleChecked,
    findAndUpdateName,
    findAndDelete,
    toggleCheckedFilter,
    setSearchTerm
  };
})();
