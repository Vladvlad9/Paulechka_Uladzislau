class DRINKS_HASH_CLASS{
    storage = {};

    addValue(key, value){
        this.storage[key] = value;
    }

    getValue(key){
        return this.storage[key];
    }

    deleteValue(key){
        if(key in this.storage){
            delete this.storage[key];
            return true;
        }
        return false;
    }

    getKeys = () => {
        return Object.keys(this.storage)
    }

}


const myStorage = new DRINKS_HASH_CLASS();
myStorage.addValue("name", "Ivan");
myStorage.addValue("age", 25)

console.log(myStorage.getValue("name"));
console.log(myStorage.getValue("city"));

// console.log(myStorage.deleteValue('age'))
console.log(myStorage.deleteValue('job'))

console.log(myStorage.getKeys())
console.log('hello')



