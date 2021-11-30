process.stdout.write('hello from spinner2.js... \rheyyy\n');

let array = ['|', '/', '-', '\\', '|', '/', '-', '\\', '|'];
let delay = 0;

for (const item of array) {
  delay += 200;
  setTimeout(() => {
    process.stdout.write(`\r${item}  `);
  }, delay)
};

setTimeout(() => {console.log('\n');}, delay);
