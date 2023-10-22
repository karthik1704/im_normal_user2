import CryptoJS from "crypto-js";

const AES_KEY = "3702971083505006";

// Input plain text
// const plaintext = "9";
// const encryptedText = "nFRjDWSCg0m80aUYivDlqw==";

export const encryptAES = async (plaintext) => {
  try {
    // Encrypt the plain text
    const encryptedText = CryptoJS.AES.encrypt(
      plaintext,
      CryptoJS.enc.Utf8.parse(AES_KEY),
      {
        mode: CryptoJS.mode.ECB,
        padding: CryptoJS.pad.Pkcs7,
      }
    ).toString();

    // Convert the encrypted text to Base64
    const b64EncryptedText = encryptedText;

    console.log("Base64 Encoded Encrypted Text:", b64EncryptedText);
    return b64EncryptedText;
  } catch (error) {
    console.error("Encryption Error:", error);
  }
};

export const decryptAES = async (encryptedText) => {
  try {
    // Encrypt the plain text
    const decryptText = CryptoJS.AES.decrypt(
      encryptedText,
      CryptoJS.enc.Utf8.parse(AES_KEY),
      {
        mode: CryptoJS.mode.ECB,
        padding: CryptoJS.pad.Pkcs7,
      }
    );

    // Convert the encrypted text to Base64
    const decryptedStr = CryptoJS.enc.Utf8.stringify(decryptText);
    console.log(" Text:", decryptedStr.toString());
    return decryptedStr.toString();
  } catch (error) {
    console.error("Decryption Error:", error);
  }
};

export const sha512 = (hashstr) => {
  const hashString1 =
    "17102315917912|103245";

  // Calculate the SHA-512 hash using CryptoJS
  const sha512Hash = CryptoJS.SHA512(hashString1);

  // Convert the hash to a hexadecimal string
  const hexHash = sha512Hash.toString(CryptoJS.enc.Hex);

  console.log("SHA-512 Hash:", hexHash);
};

// 284eb6946a30cc1216023f55b2d6b9b8e585e546bb910aad9288504b86d0b4bce4ce7105207dfb9ac6449fb6b86c70fdd449e6b4023947c7a5e104b880d05d55 
// dab964040fa7d15096654f2a429ed4ee9b6baf7e31552db6d30952b1a4545f61dbc76c379a72142950a44c4a869dedb28be020c764c2bd2fd2a94c04458086cc
// 