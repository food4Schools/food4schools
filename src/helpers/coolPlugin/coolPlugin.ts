let hello = () => console.log('hello script!!!!!');

let sum = (a:number, b:number) => a + b;

let removeTableFromPage = () => {
    Knack.$('.kn-table').remove();
}

interface Person {
    name: string;
    id: number;
}

const testObject = (obj:Person) =>{
    console.log(obj);
}
//expose methods created above
export { hello, sum, removeTableFromPage, testObject };