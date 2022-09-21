export function add(x:number, y:number){
    return x+y
}

export function sample<T>(arr:T[]):T { // This generic function take some type, we pass some array as parameter of that type and returns an element of that type
const idx =Math.floor(Math.random()* arr.length)
return arr[idx]
}

export const pi = 3.14;

