import { BASIS_TYPES, type BasisType } from '../utils/quantumUtils';

interface BasisSelectorProps {
  basis: BasisType;
  onChange: (basis: BasisType) => void;
  label: string;
}

export function BasisSelector({ basis, onChange, label }: BasisSelectorProps) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-sm font-medium text-gray-700">{label}</label>
      <div className="flex gap-4">
        <button
          className={`px-4 py-2 rounded-md ${
            basis === BASIS_TYPES.RECTILINEAR
              ? 'bg-blue-600 text-white'
              : 'bg-gray-200 text-gray-700'
          }`}
          onClick={() => onChange(BASIS_TYPES.RECTILINEAR)}
        >
          Rectilinear (⊕)
        </button>
        <button
          className={`px-4 py-2 rounded-md ${
            basis === BASIS_TYPES.DIAGONAL
              ? 'bg-blue-600 text-white'
              : 'bg-gray-200 text-gray-700'
          }`}
          onClick={() => onChange(BASIS_TYPES.DIAGONAL)}
        >
          Diagonal (⊗)
        </button>
      </div>
    </div>
  );
}