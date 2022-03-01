function main() {
let v2 = 0;
let v5 = 0;
const v6 = v5 + 1;
v5 = v6;
const v7 = v2 + 1;
v2 = v7;
let v9 = 1000000000.0;
const v12 = new Int16Array(v9);
const v14 = Object.entries(v12,0);
}
%NeverOptimizeFunction(main);
main();
