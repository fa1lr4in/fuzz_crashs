function main() {
const v3 = new Uint16Array(1000000000.0);
const v5 = Object.entries(v3,-1024);
}
%NeverOptimizeFunction(main);
main();
