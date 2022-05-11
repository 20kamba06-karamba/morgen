/////////1////////

// let num_one = 0;
// let num_two = 1;
// let num = prompt()

// for (let i = 1; i <= num; i++) {
// 	let current = num_one + num_two;

// 	num_one = num_two;
// 	num_two = current;

// 	console.log(current);
// }

/////////2////////

// let name = prompt(`What is you name?`)
// let surname = prompt(`What is you surname?`)
// let age = +prompt(`How old are you?`)

// let total = [
//     `${name}${surname}${age}@gmail.com`,
//     `${name}${age}${surname}@gmail.com`,
//     `${surname}${name}${age}@gmail.com`,
//     `${surname}${age}${name}@gmail.com`,
//     `${age}${name}${surname}@gmail.com`,
//     `${age}${surname}${name}@gmail.com`
// ]


// let random_email = () =>{
//     let position = Math.floor(Math.random() * 3)
//     alert(total[position])
// }

// random_email()

/////////3////////

// function random_id() {
//     let a = '';
//     let id_text = '0123456789qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM';
//     let max_position = id_text.length - 1;
//         for( i = 0; i <= 7; i++) {
//             let position = Math.floor (Math.random() * max_position);
//             a = a + id_text.slice(position,position + 1);
//         }
//         console.log(a);
//         return a
// }

// random_id()

/////////4////////

// let numbers = [666,66, 55, 44, 33, 22, 11, 15, 13, 9, 6]

// let sort = () => {
//     let sort = []
//     let nsf_one = Infinity
//     let nsf_two = Infinity

//     for (let i = 0; i < numbers.length; i++) {
//         for (let k = 0; k < numbers.length; k++) {
//             if (numbers[k] < nsf_one) {
//                 nsf_one = numbers[k]
//                 nsf_two = k
//             }
//         }
//         numbers[nsf_two] = Infinity
//         sort.push(nsf_one)
//         nsf_one = Infinity
//     }
//     console.log(sort);
//     return sort
// }
// sort()


//Далер ака я все это списал кроме первого, прошу меня понять и простить