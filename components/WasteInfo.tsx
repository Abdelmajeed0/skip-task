interface WasteInfoProps {
  allowsHeavyWaste: boolean;
  allowedOnRoad: boolean;
}

const WasteInfo = ({ allowsHeavyWaste, allowedOnRoad }: WasteInfoProps) => {
  return (
    <div className="space-y-2">
      <div className="flex items-center">
        {allowedOnRoad ? (
          <span className="text-green-500 mr-2">✓</span>
        ) : (
          <span className="text-red-500 mr-2">✗</span>
        )}
        <span className="text-sm">Allowed on public road</span>
      </div>
      <div className="flex items-center">
        {allowsHeavyWaste ? (
          <span className="text-green-500 mr-2">✓</span>
        ) : (
          <span className="text-red-500 mr-2">✗</span>
        )}
        <span className="text-sm">Accepts heavy waste</span>
      </div>
    </div>
  );
};

export default WasteInfo;
