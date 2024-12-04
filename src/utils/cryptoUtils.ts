export function encryptMessage(message: string, key: string): string {
  if (!key) return message;
  
  const messageBytes = new TextEncoder().encode(message);
  const keyBytes = new TextEncoder().encode(key);
  const encrypted = new Uint8Array(messageBytes.length);

  for (let i = 0; i < messageBytes.length; i++) {
    encrypted[i] = messageBytes[i] ^ keyBytes[i % keyBytes.length];
  }

  return Array.from(encrypted)
    .map(byte => byte.toString(16).padStart(2, '0'))
    .join('');
}

export function decryptMessage(encrypted: string, key: string): string {
  if (!key) return encrypted;
  
  const encryptedBytes = new Uint8Array(
    encrypted.match(/.{1,2}/g)?.map(byte => parseInt(byte, 16)) || []
  );
  const keyBytes = new TextEncoder().encode(key);
  const decrypted = new Uint8Array(encryptedBytes.length);

  for (let i = 0; i < encryptedBytes.length; i++) {
    decrypted[i] = encryptedBytes[i] ^ keyBytes[i % keyBytes.length];
  }

  return new TextDecoder().decode(decrypted);
}