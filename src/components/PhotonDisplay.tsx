import { type PhotonState } from '../utils/quantumUtils';

interface PhotonDisplayProps {
  state: PhotonState;
}

export function PhotonDisplay({ state }: PhotonDisplayProps) {
  return (
    <div className="flex items-center justify-center w-12 h-12 border-2 border-gray-300 rounded-full">
      <span className="text-2xl">{state}</span>
    </div>
  );
}