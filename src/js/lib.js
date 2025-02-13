// export function sum(...numbers){
// return numbers.reduce((number,total)=>total+number)
// }

// export function mult(...numbers){
//     return numbers.reduce((number,total)=>total*number)
//     }

//default sadece bir elemanı dışarı açmamıza yardımcı oluyor
export default class {
  constructor() {
    this.pi = 3.14;
  }

  sum(...numbers) {
    return numbers.reduce((number, total) => total + number);
  }

  mult(...numbers) {
    return numbers.reduce((number, total) => total * number);
  }
}
