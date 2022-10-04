let msg = "HELLO";
let encoded = "";
let decoded = "";
for (let i = 0; i < msg.length; i++) {
    encoded += String.fromCharCode(msg.charCodeAt(i) + 3)
}

console.log("encoded :"+encoded)

for (let i = 0; i < encoded.length; i++) {
    decoded += String.fromCharCode(encoded.charCodeAt(i) - 3)
}

console.log("decoded :"+decoded)