let hello = () => console.log('hello script!!!!!');

let sum = (a:number, b:number) => a + b;

let removeTableFromPage = () => {
    Knack.$('.kn-table').remove();
}

//expose methods created above
export { hello, sum, removeTableFromPage };