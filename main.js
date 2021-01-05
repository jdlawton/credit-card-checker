// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8]
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9]
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6]
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5]
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6]

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5]
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3]
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4]
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5]
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4]

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4]
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9]
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3]
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3]
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3]

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5]


// Add your functions below:

//Input: cardNumber = an array containing a credit card number
//Output: Returns true when the card number is valid, false when invalid.
//Validates the passed credit card number, does not change the array parameter.
const validateCred = cardNumber => {
    let workingNumber = [...cardNumber];
    for (let i = workingNumber.length - 2; i >= 0; i--){
        if (!(workingNumber.length % 2) && !(i % 2)) {
            workingNumber[i] *= 2;
        }
        if ((workingNumber.length % 2) && (i % 2)) {
            workingNumber[i] *= 2;
        }
        if (workingNumber[i] > 9) {
            workingNumber[i] -= 9;
        }
    }
    //console.log("Working Number: " + workingNumber);
    let sum = workingNumber.reduce((acc, num) => acc + num);
    //console.log("Sum: " + sum);
    if (!(sum % 10)){
        return true;
    } else {
        return false;
    }
};

const findInvalidCards = numberArray => {
    //console.log(numberArray);
    let invalidArray = [];
    for (let i = 0; i < numberArray.length; i++){
        //console.log("NumberArray: " + numberArray[i]);
        let check = validateCred(numberArray[i]);
        //console.log("check: " + check);
        if (!check) {
            invalidArray.push(numberArray[i]);
        }
    }
    return invalidArray;
};

const idInvalidCardCompanies = numberArray => {
    let companies = [];
    for (let i = 0; i < numberArray.length; i++ ) {
        if (numberArray[i][0] === 3 && !companies.includes('Amex')) {
                companies.push('Amex');
        } else if (numberArray[i][0] === 4 && !companies.includes('Visa')) {
            companies.push('Visa');
        } else if (numberArray[i][0] === 5 && !companies.includes('Mastercard')) {
            companies.push('Mastercard');
        } else if (numberArray[i][0] === 6 && !companies.includes('Discover')) {
            companies.push('Discover');
        } else if (!companies.includes('Company not found')){
            companies.push('Company not found');
        }
    }
    //console.log(companies);
    return companies;
};

console.log("Valid");
console.log(validateCred(valid1));
console.log(validateCred(valid2));
console.log(validateCred(valid3));
console.log(validateCred(valid4));
console.log(validateCred(valid5));
console.log("========================================");

console.log("Invalid");
console.log(validateCred(invalid1));
console.log(validateCred(invalid2));
console.log(validateCred(invalid3));
console.log(validateCred(invalid4));
console.log(validateCred(invalid5));
console.log("========================================");

console.log("Mystery");
console.log(validateCred(mystery1));
console.log(validateCred(mystery2));
console.log(validateCred(mystery3));
console.log(validateCred(mystery4));
console.log(validateCred(mystery5));
console.log("========================================");

console.log("Batch");
const invalidNumbers = findInvalidCards(batch);
console.log(invalidNumbers);
console.log("========================================");

console.log("Companies");
console.log(idInvalidCardCompanies(invalidNumbers));