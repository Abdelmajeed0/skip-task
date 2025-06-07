import Button from "./ui/Button";
import Badge from "./ui/Badge";
import PriceFormatter from "./ui/PriceFormatter";
import WasteInfo from "./WasteInfo";
import { Skip } from "@/types/skip";
import Image from "next/image";

interface SkipCardProps {
  skip: Skip;
  isSelected: boolean;
  onSelect: () => void;
}

const SkipCard = ({ skip, isSelected, onSelect }: SkipCardProps) => {
  const vatAmount = (skip.vat / 100) * skip.price_before_vat;
  const totalPrice = skip.price_before_vat + vatAmount;

  return (
    <div
      className={`border rounded-xl overflow-hidden shadow-md transition-all duration-200
      ${
        isSelected
          ? "border-blue-500 ring-2 ring-blue-500"
          : "border-gray-200 hover:border-blue-300"
      }
      ${skip.forbidden ? "opacity-60 cursor-not-allowed" : ""}`}
    >
      <div className="w-full rounded-lg overflow-hidden shadow-lg">
        <div className="w-full h-64 md:h-70 relative">
          <Image
            src="/4-yarder-skip.jpg"
            alt="skip image"
            fill
            className="object-cover"
          />

          <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center p-4 text-center">
            <h3 className="text-4xl font-bold text-white drop-shadow-lg">
              {skip.size} Yard
            </h3>
            <span className="text-xl text-gray-100 mt-2 drop-shadow-md">
              Skip
            </span>
          </div>
        </div>
      </div>

      <div className="p-5 bg-white">
        <div className="flex justify-between items-start mb-4">
          <PriceFormatter
            totalPrice={totalPrice}
            vat={skip.vat}
            vatAmount={vatAmount}
          />
          <Badge text={`${skip.hire_period_days} days hire`} />
        </div>

        <WasteInfo
          allowsHeavyWaste={skip.allows_heavy_waste}
          allowedOnRoad={skip.allowed_on_road}
        />

        <div className="mt-6">
          <Button
            onClick={onSelect}
            disabled={skip.forbidden}
            variant={isSelected ? "selected" : "default"}
          >
            {isSelected ? "Selected" : "Select This Skip"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SkipCard;
