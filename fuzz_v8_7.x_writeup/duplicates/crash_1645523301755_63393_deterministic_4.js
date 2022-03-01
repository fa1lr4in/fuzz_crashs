function main() {
let v2 = Promise;
let v3 = v2;
const v5 = new Int8Array(1973691971);
const v6 = v5.sort(v3);
}
%NeverOptimizeFunction(main);
main();
