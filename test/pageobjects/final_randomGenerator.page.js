

class RandomGenerator {
 
  emailGenerator (generatedEmail) {
    const symbols = "abcdefghijklmnopqrstuvwxyz1234567890";
    let string = "";
   
    for (let x = 0; x < 15; x++) {
      string += symbols[Math.floor(Math.random() * symbols.length)];
    }
   
    generatedEmail = string + "@gmail.com"
    return generatedEmail;
   }

   usernameGenerator (generatedUsername) {
    const symbols = "abcdefghijklmnopqrstuvwxyz";
    let string = "";
   
    for (let x = 0; x < 15; x++) {
      string += symbols[Math.floor(Math.random() * symbols.length)];
    }
   
    generatedUsername = string[0].toUpperCase() + string.slice(1);
    return generatedUsername;
   }

   passwordGenerator (generatedPassword) {
    const symbols = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890.!";
    let string = "";
   
    for (let x = 0; x < 20; x++) {
      string += symbols[Math.floor(Math.random() * symbols.length)];
    }
   
    generatedPassword = string
    return generatedPassword;
   }

   phoneGenerator (generatedPhone) {
    const symbols = "1234567890";
    let string = "";
   
    for (let x = 0; x < 20; x++) {
      string += symbols[Math.floor(Math.random() * symbols.length)];
    }
   
    generatedPhone = string
    return generatedPhone;
   }

  
}
  
  module.exports = new RandomGenerator();
  





