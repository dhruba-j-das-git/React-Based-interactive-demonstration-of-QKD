interface KeyDisplayProps {
  sharedKey: string;
}

export function KeyDisplay({ sharedKey }: KeyDisplayProps) {
  return (
    <div className="bg-gray-50 p-4 rounded-lg">
      <h4 className="font-medium mb-2">Shared Key:</h4>
      <div className="font-mono bg-white p-2 rounded border border-gray-200 overflow-x-auto">
        {sharedKey || 'No key generated yet'}
      </div>
    </div>
  );
}