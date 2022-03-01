function main() {
const v3 = new Int16Array(355440137);
const v5 = Object.values(v3,1337);
}
%NeverOptimizeFunction(main);
main();
