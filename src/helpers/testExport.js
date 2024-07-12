let hello = () => console.log('hello script!!!!!');

let sum = (a, b) => a + b;

let removeTableFromPage = () => {
    Knack.$('.kn-table').remove();
}

//expose methods created above
export { hello, sum, removeTableFromPage };