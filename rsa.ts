// 1. 最大公因數 function
// 2. 選擇二質數, p, q
// 3. 計算 N = p * q
// 4. 計算 r = (p-1) * (q-1)
// 5. 選擇 e, 1 < e < r 且 e 與 r 互質
// 6. 計算 D 符合 D * e = 1 mod ((p−1) * (q−1))
//    i.e. (D * e) mod ((p−1) * (q−1)) = 1
// 7. 公鑰 (N, e)
// 8. 私鑰 (N, D)
// 9. 加密 ciphertext = plaintext ^ e mod N
// 10. 解密 plaintext = ciphertext ^ D mod N