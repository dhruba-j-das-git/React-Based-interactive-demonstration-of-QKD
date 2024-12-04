// Quantum state generation and measurement utilities
export const BASIS_TYPES = {
  RECTILINEAR: 'rectilinear',
  DIAGONAL: 'diagonal'
} as const;

export const PHOTON_STATES = {
  VERTICAL: '|↑⟩',
  HORIZONTAL: '|→⟩',
  DIAGONAL_UP: '|⤢⟩',
  DIAGONAL_DOWN: '|⤡⟩'
} as const;

export type BasisType = typeof BASIS_TYPES[keyof typeof BASIS_TYPES];
export type PhotonState = typeof PHOTON_STATES[keyof typeof PHOTON_STATES];

export function generateRandomBasis(): BasisType {
  return Math.random() < 0.5 ? BASIS_TYPES.RECTILINEAR : BASIS_TYPES.DIAGONAL;
}

export function generateRandomBit(): 0 | 1 {
  return Math.random() < 0.5 ? 0 : 1;
}

export function getPhotonState(bit: 0 | 1, basis: BasisType): PhotonState {
  if (basis === BASIS_TYPES.RECTILINEAR) {
    return bit === 0 ? PHOTON_STATES.VERTICAL : PHOTON_STATES.HORIZONTAL;
  } else {
    return bit === 0 ? PHOTON_STATES.DIAGONAL_UP : PHOTON_STATES.DIAGONAL_DOWN;
  }
}

export function measurePhoton(state: PhotonState, measurementBasis: BasisType): number | null {
  const stateBasis = getStateBasis(state);
  
  if (stateBasis !== measurementBasis) {
    return Math.random() < 0.5 ? 0 : 1; // Random result when bases don't match
  }

  // Deterministic result when bases match
  return (state === PHOTON_STATES.VERTICAL || state === PHOTON_STATES.DIAGONAL_UP) ? 0 : 1;
}

function getStateBasis(state: PhotonState): BasisType {
  return (state === PHOTON_STATES.VERTICAL || state === PHOTON_STATES.HORIZONTAL)
    ? BASIS_TYPES.RECTILINEAR
    : BASIS_TYPES.DIAGONAL;
}