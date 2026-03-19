// const arr1 = [1,2,3];
// const arr2 = [4,5, ...arr1, 6]

// console.log(arr2) // [4,5,1,2,3,6]

// const obj1 = {a:1, b:2}
// const obj2 = {...obj1, c:3} // {a:1, b:2, c:3}

// console.log(obj2)

// const obj3 = {obj2, b:20}

// console.log(obj3)

// const fruits1 = ["apple", "banana"];
// const fruits2 = ["orange", "grape"];

// const fruits3 = [...fruits1, ...fruits2]
// console.log(fruits3);

// const user = { name: "Tom", age: 20 };
// const job = { title: "Developer", company: "Google" };
// const person = {...user, ...job}

// console.log(person)

const likes = {
    "왕과 사는 남자":20,
    "주술회전":30,
    "나루토": 14 
}

const likes_arr = Object.entries(likes)
console.log(likes_arr)

const filter = [1,2,3,4,5].filter((v)=>v>3)
console.log(filter)