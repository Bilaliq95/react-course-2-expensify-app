//Destructuring Object
const book={
    title:'Ego is the enemy',
    author:'Ryan Holiday',
    publisher:{
        name:'penguin'
    }
};

const {name:publisherName='Self-Published'}=book.publisher;

console.log(publisherName);

//Destructuring Array

const items=['Coffee(Hot)','$2.00','$2.50','$2.75'];
const [item,,price]=items;

console.log(`A medium ${item} costs ${price}` )