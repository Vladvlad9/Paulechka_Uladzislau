function HashStorageFunc() {
  var self = this;
  self.storage = {};

  self.addValue = function(key, value) {
    self.storage[key] = value;
  };

  self.getValue = function(key) {
    return self.storage[key];
  };

  self.deleteValue = function(key) {
    if (key in self.storage) {
      delete self.storage[key];
      return true;
    }
    return false;
  };

  self.getKeys = function() {
    return Object.keys(self.storage);
  };
}

// Пример использования:
const myStorage = new HashStorageFunc();

myStorage.addValue("name", "John");
myStorage.addValue("age", 30);
myStorage.addValue("name", "Ivan");

console.log(myStorage.getValue("name"));
console.log(myStorage.getValue("city"));

console.log(myStorage.deleteValue("age"));
console.log(myStorage.deleteValue("job"));

console.log(myStorage.getKeys());