function Person(name, age) {
    this.name = name;
    this.age = age;

    let privateVar = 0;

    Person.prototype.getSecret = function () {
        return privateVar;
    }

    Person.prototype.increaseSecret = function () {
        return ++privateVar;
    }

    Person.prototype.decreaseSecret = function () {
        return --privateVar;
    }
}

Person.prototype.getAge = function () {
    return this.age;
}

Person.prototype.getName = function () {
    return this.name;
}

// можно не передавать в конструктор параметры
function Man() {
    Person.call(this);

    this.hasDick = true;
}

function Woman(name, age, gasketName) {
    Person.call(this, name, age);

    this.hasDick = false;
    this.gasketName = gasketName;
}

Man.prototype = Object.create(Person.prototype);
Woman.prototype = Object.create(Person.prototype);

// 2 способа
Object.defineProperty(Man.prototype, 'constructor', {
    value: Man,
    enumerable: false,
    writable: true });
Woman.prototype.constructor = Woman;

Man.prototype.getTestMethodForMan = function () {
    return 'methodForMan';
}

Woman.prototype.getTestMethodForWoman = function () {
    return 'methodForWoman';
}

const person = new Person('Lexa', 35);
const man = new Man();
const woman = new Woman('Vera', 25, 'Always');

console.log('Person: ', person);
console.log('Man: ', man);
console.log('Woman: ', woman);

console.log('-------------------');

console.log('Person getName: ', person.getName());
console.log('Man getName: ', man.getName());
console.log('Man getAge: ', man.getAge());
console.log('Woman getName: ', woman.getName());
console.log('Woman getAge: ', woman.getAge());
console.log('Woman getTestMethodForWoman: ', woman.getTestMethodForWoman());

console.log('-------------------');

console.log('Person getSecret: ', person.getSecret());
console.log('Person increaseSecret: ', person.increaseSecret());
console.log('Person increaseSecret: ', person.increaseSecret());
console.log('Person getSecret: ', person.getSecret());
console.log('Person increaseSecret: ', person.decreaseSecret());
console.log('Person getSecret: ', person.getSecret());
