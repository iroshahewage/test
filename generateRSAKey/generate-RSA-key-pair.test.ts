import generateRSA from './generate-RSA-key-pair';

describe('generateRSAKeyPair', () => {
  it('should generate a private and public key with the specified modulus length', () => {
    const modulusLength = 2048;
    const { privateKey, publicKey } = generateRSA();

    expect(privateKey).toBeDefined();
    expect(publicKey).toBeDefined();
    expect(privateKey).toMatch(/^-----BEGIN RSA PRIVATE KEY-----/);
    expect(publicKey).toMatch(/^-----BEGIN RSA PUBLIC KEY-----/);
    expect(modulusLength).toBe(2048);
  });
});
