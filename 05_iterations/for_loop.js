//for loop
// for (let i = 0; i < 10; i++) {
//     const element = i;
//     console.log(element);
// }

// for (let i = 0; i <=10 ; i++) {
//     console.log(`outer loop values: ${i}`);
//     for (let j = 0; j <=10; j++) {
//         //console.log(`inner loop values ${j}`);
//     }
// }

let my_array = ["tushar", "parashar", "tushar2"]
for (let i = 0; i < my_array.length; i++) {
    const element = my_array[i];
    console.log(element);
    
}

// ----> break and continue
// for (let i = 0; i <= 20; i++) {
//     if (i ==5) {
//         console.log(`dectected 5`);
//         break
//     }
//     console.log(`value of 1 is${i}`);
// }

for (let i = 0; i <= 20; i++) {
        if (i ==5) {
            console.log(`dectected 5`);
            continue
        }
        console.log(`value of 1 is${i}`);
    }

