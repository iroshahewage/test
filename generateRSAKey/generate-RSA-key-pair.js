import crypto from "crypto";

function GenerateRSAKeyPair(modulusLength = 2048) {
  const { privateKey, publicKey } = crypto.generateKeyPairSync("rsa", {
    modulusLength,
    publicKeyEncoding: {
      type: "pkcs1",
      format: "pem",
    },
    privateKeyEncoding: {
      type: "pkcs1",
      format: "pem",
    },
  });

  return { privateKey, publicKey };
}

export default GenerateRSAKeyPair;
