# Quantum Cryptography Simulator

A React-based interactive demonstration of quantum key distribution using the BB84 protocol.

## Features

- **Interactive BB84 Protocol Simulation**: Demonstrates the quantum key distribution process between two parties (sender and receiver)
- **Real-time Basis Selection**: Choose between rectilinear and diagonal bases for both sender and receiver
- **Visual Quantum State Representation**: Clear visualization of photon polarization states
- **Immediate Measurement Results**: See how different basis choices affect quantum measurements
- **Educational Feedback**: Learn when and why key bits are successfully shared or discarded

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)


## How It Works

### BB84 Protocol Implementation

The simulator demonstrates the BB84 protocol through the following steps:

1. **Bit and Basis Selection**
   - Sender randomly selects a bit (0 or 1)
   - Both sender and receiver independently choose measurement bases (rectilinear ⊕ or diagonal ⊗)

2. **Quantum State Preparation**
   - Sender prepares a photon based on their bit and chosen basis
   - Rectilinear basis: |↑⟩ (0) or |→⟩ (1)
   - Diagonal basis: |⤢⟩ (0) or |⤡⟩ (1)

3. **Measurement**
   - Receiver measures the received photon using their chosen basis
   - Matching bases: Deterministic result
   - Different bases: Random result (discarded in key generation)

4. **Key Generation**
   - Bits measured with matching bases become part of the secure key
   - Mismatched bases result in discarded bits


## Technologies Used

- React
- TypeScript
- Tailwind CSS
- Vite
- Vitest


## Acknowledgments

- Based on the BB84 quantum key distribution protocol by Bennett and Brassard (1984)
- Inspired by educational quantum computing resources
- Built with modern web technologies for interactive learning
