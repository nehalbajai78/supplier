import { AES, PBKDF2, enc, lib } from "crypto-js";

const ENCRYPTION_KEY =
  "uHM2kV2vg8bEefzaW2ZCXX3TEPIYWqBfFYFBevKhs65YLzs9h07MGsnlWzQtOlZCh957AhSRKSgnQC7DJ0fiO3aqMpPCc2CecUbhK9BCqID946hjCLiQ0fwOMFn3biu9g8yTka3MTb2xq480kEA4M4ISR8qIiMYYepgDwOHGIHw6XgAm1NDQJ2RfE2gryBlbKzY2rq1Zhfihegtjiz3Oya8jHo6kMHYlnqCjUf9NKUEiaANe6V3iSJ9MHumVgOUx";

// for prod
// const ENCRYPTION_KEY =
// "Z9EjeFeKEMF8wNKrpKnyG8n7gHcLQIQyN78epu5EnPUzyeahMSOLQic3oMEnx3VkNerLUsSZYM7XaPNOlJbwdvAkezHgFg9LhmiZxUGdw9QQebgZEpd6O6qhxiPxBIQZ6gmEjSRnmndPMpHx2HwfTdSUXo1QHyuGXsWFgQQy2BWvjriM5Gq8S15gCmFsqCo5GNkQRmpeA1VTfBtLpLsdlDlcIlzAW86Q3x0EG9WB9PFAAAWKPVhTJ1OHfNeAKykf";

const iterations = 1000; // Number of PBKDF2 iterations
const keySize = 128 / 32; // AES-256 key size in words

export const generateRandomSalt = () => {
  return lib.WordArray.random(128 / 8).toString(enc.Hex);
};

export const generateRandomIv = () => {
  return lib.WordArray.random(128 / 8).toString(enc.Hex);
};

// Encrypt the plaintext
export const encrypt = (plaintext, iv, salt) => {
  try {
    // Derive a key using PBKDF2
    const key = PBKDF2(ENCRYPTION_KEY, enc.Hex.parse(salt), {
      keySize,
      iterations,
    });

    const encrypted = AES.encrypt(plaintext, key, {
      iv: enc.Hex.parse(iv),
    });

    return encrypted.ciphertext.toString(enc.Base64);
  } catch (error) {
    console.error("Error encrypting text:", error);
  }
  return null;
};

export const decrypt = (salt, iv, cipherText) => {
  const key = PBKDF2(ENCRYPTION_KEY, enc.Hex.parse(salt), {
    keySize,
    iterations,
  });
  var cipherParams = lib.CipherParams.create({
    ciphertext: enc.Base64.parse(cipherText),
  });
  var decrypted = AES.decrypt(cipherParams, key, {
    iv: enc.Hex.parse(iv),
  });
  return decrypted.toString(enc.Utf8);
};
