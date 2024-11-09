import BloomFilter from "./index.js";

const bloomFilter= new BloomFilter(100,3);

bloomFilter.add("hello");
bloomFilter.add("world");
bloomFilter.add("javascript");

console.log(bloomFilter.alreadyexits("hello"));
console.log(bloomFilter.alreadyexits("world"));
console.log(bloomFilter.alreadyexits("javasc"));
