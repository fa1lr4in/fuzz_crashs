function main() {
let v1 = 1000000000.0;
const v4 = new Int16Array(v1);
const v6 = Object.entries(v4,0);
}
%NeverOptimizeFunction(main);
main();
