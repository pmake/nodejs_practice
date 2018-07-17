function Person1(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

// 不先new 直接傳回建構子本身
module.exports = Person1;