// 1. 最大公因數 function
const GCD = (a, b) => b ? GCD(b, a % b) : a; // 遞迴做輾轉相除法

// 2. 選擇二質數, p, q
const p = 9587n; // n for big number
const q = 4051n; // n for big number

// 3. 計算 N = p * q
const N = p * q;

// 4. 計算 r = (p-1) * (q-1)
const r = (p - 1n) * ( q - 1n);

// 5. 選擇 e, 1 < e < r 且 e 與 r 互質
let e = 1n;
for (let i = 2n; i<r; i++) {
  if (GCD(i, r) === 1n) {
    e = i;
    break;
  }
}
console.log(GCD(e, r)) // 1n

// 6. 計算 D 符合 D * e = 1 mod ((p−1) * (q−1))
//    i.e. (D * e) mod r = 1
let D;
for (let i = e+1n; i<r; i++) {
  if (((i * e) % r) == 1n) {
    D = i
    break;
  }
}
console.log(`D: ${D}`)
console.log(`e: ${e}`)
console.log(`r: ${r}`)
console.log((D * e) % r)
console.log(`N: ${N}`);
 
// 7. 公鑰 (N, e)
const pukN = N
const puke = e

// 8. 私鑰 (N, D)
const prkN = N
const prkD = D

// 9. 加密 ciphertext = plaintext ^ e mod N
const plaintext = BigInt(Math.ceil(Math.random() * 10000));
const ciphertext = plaintext ** puke % pukN
console.log(`plaintext: ${plaintext}`)
console.log(`ciphertext: ${ciphertext}`)

// 10. 解密 plaintext = ciphertext ^ D mod N
const decrypted = ciphertext ** prkD % prkN
console.log(`decrypted: ${decrypted}`)