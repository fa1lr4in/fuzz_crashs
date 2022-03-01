function main() {
const v2 = [1337,1337,1337,1337,1337];
let v3 = v2;
const v5 = [1000000000.0];
v3 = 1000000000.0;
const v7 = [1973691971,-2,-2,v5];
const v8 = v7.join;
let v9 = v8;
const v11 = new Int8Array(v3);
const v12 = v11.sort(v9);
}
%NeverOptimizeFunction(main);
main();
