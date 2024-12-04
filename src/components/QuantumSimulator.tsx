import { useState, useEffect } from 'react';
import { BasisSelector } from './BasisSelector';
import { PhotonDisplay } from './PhotonDisplay';
import { MessageInput } from './MessageInput';
import { KeyDisplay } from './KeyDisplay';
import {
  generateRandomBasis,
  generateRandomBit,
  getPhotonState,
  measurePhoton,
  type BasisType,
} from '../utils/quantumUtils';
import { encryptMessage, decryptMessage } from '../utils/cryptoUtils';

export function QuantumSimulator() {
  const [myBasis, setMyBasis] = useState<BasisType>(generateRandomBasis());
  const [yourBasis, setYourBasis] = useState<BasisType>(generateRandomBasis());
  const [myBit] = useState<0 | 1>(generateRandomBit());
  const [sharedKey, setSharedKey] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [encryptedMessage, setEncryptedMessage] = useState<string>('');
  const [decryptedMessage, setDecryptedMessage] = useState<string>('');
  
  const photonState = getPhotonState(myBit, myBasis);
  const measurementResult = measurePhoton(photonState, yourBasis);
  const basesMatch = myBasis === yourBasis;

  useEffect(() => {
    if (basesMatch && measurementResult !== null) {
      setSharedKey(prev => prev + measurementResult);
    }
  }, [basesMatch, measurementResult]);

  useEffect(() => {
    if (message && sharedKey) {
      const encrypted = encryptMessage(message, sharedKey);
      setEncryptedMessage(encrypted);
      const decrypted = decryptMessage(encrypted, sharedKey);
      setDecryptedMessage(decrypted);
    } else {
      setEncryptedMessage('');
      setDecryptedMessage('');
    }
  }, [message, sharedKey]);

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      <h2 className="text-2xl font-bold text-center mb-8">
        Quantum Key Distribution Simulator (BB84 Protocol)
      </h2>

      <div className="grid grid-cols-2 gap-8">
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Me (Sender)</h3>
          <BasisSelector
            basis={myBasis}
            onChange={setMyBasis}
            label="Choose sending basis"
          />
          <div className="mt-4">
            <p className="text-sm font-medium text-gray-700">Original bit: {myBit}</p>
            <div className="mt-2">
              <p className="text-sm font-medium text-gray-700">Photon state:</p>
              <PhotonDisplay state={photonState} />
            </div>
          </div>
          <MessageInput
            message={message}
            onChange={setMessage}
            label="Enter Message to Encrypt"
          />
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-semibold">You (Receiver)</h3>
          <BasisSelector
            basis={yourBasis}
            onChange={setYourBasis}
            label="Choose measurement basis"
          />
          <div className="mt-4">
            <p className="text-sm font-medium text-gray-700">
              Measured bit: {measurementResult !== null ? measurementResult : '?'}
            </p>
            <p className="text-sm font-medium mt-2">
              Bases {basesMatch ? 'match ✓' : 'don\'t match ✗'}
            </p>
          </div>
          <MessageInput
            message={decryptedMessage}
            onChange={() => {}}
            label="Decrypted Message"
            readOnly
          />
        </div>
      </div>

      <KeyDisplay sharedKey={sharedKey} />

      <div className="mt-8 p-4 bg-gray-50 rounded-lg">
        <h4 className="font-medium mb-2">Encrypted Message:</h4>
        <div className="font-mono bg-white p-2 rounded border border-gray-200 break-all">
          {encryptedMessage || 'No message encrypted yet'}
        </div>
      </div>

      <div className="mt-4 p-4 bg-blue-50 rounded-lg">
        <h4 className="font-medium mb-2">How it works:</h4>
        <p className="text-sm text-gray-600">
          {basesMatch
            ? `Bases match! The bit ${measurementResult} has been added to the shared key.`
            : 'Bases don\'t match. This bit will be discarded from the key.'}
        </p>
        <p className="text-sm text-gray-600 mt-2">
          The shared key is used to encrypt and decrypt messages using XOR encryption.
        </p>
      </div>
    </div>
  );
}