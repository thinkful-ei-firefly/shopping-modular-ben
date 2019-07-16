/* eslint-disable */

function findById(id) {
  store.items.find(item => item.id === id);
}

function addItem(name) {
  try {
    Item.validateName(name);
    this.items.push(Item.create(itemName));
  } catch (error) {
    console.log(`Cannot add item: ${error.message}`);
  }
}

function findAndToggleChecked(id) {
  const checked = this.items.findById(id).checked;
  checked = !checked;
}

function findAndUpdateName(id, newName) {
  try {
    Item.validateName(name);
    const name = this.items.findById(id).name;
    name = newName;
  } catch (error) {
    console.log(`Cannot update name: ${error.message}`);
  }
}

function findAndDelete(id) {
  const filterItem = this.items.findById(id);
  this.items.filter(item => item !== filterItem);
}

const store = (function() {
  const items = [
    { id: cuid(), name: 'apples', checked: false },
    { id: cuid(), name: 'oranges', checked: false },
    { id: cuid(), name: 'milk', checked: true },
    { id: cuid(), name: 'bread', checked: false }
  ];
  const hideCheckedItems = false;
  const searchTerm = '';

  return {
    items,
    hideCheckedItems,
    searchTerm,
    findById: findById(),
    addItem: addItem(),
    findAndToggleChecked: findAndToggleChecked(),
    findAndUpdateName: findAndUpdateName(),
    findAndDelete: findAndDelete()
  };
})();
