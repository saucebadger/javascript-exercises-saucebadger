const palindromes = function (word) {
const allowed = "abcdefghijklmnopqrstuvwxyz0123456789"  
const cleaned = word
.toLowerCase()
.split("")  
.filter(character => allowed.includes(character))
.join("");
const reversed = cleaned.split("").reverse().join("")
return cleaned === reversed
};

// Do not edit below this line
module.exports = palindromes;
