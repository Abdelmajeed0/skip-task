interface PriceFormatterProps {
  totalPrice: number;
  vat: number;
  vatAmount: number;
}

const PriceFormatter = ({
  totalPrice,
  vat,
  vatAmount,
}: PriceFormatterProps) => {
  const formattedTotalPrice = new Number(totalPrice).toLocaleString("nl-NL", {
    currency: "EUR",
    style: "currency",
    minimumFractionDigits: 2,
  });

  const formattedVat = new Number(vatAmount).toLocaleString("nl-NL", {
    currency: "EUR",
    style: "currency",
    minimumFractionDigits: 2,
  });
  return (
    <div>
      <div className="text-2xl font-bold text-gray-800">
        {formattedTotalPrice}
      </div>
      <div className="text-xs text-gray-500">
        inc. {vat}% VAT ({formattedVat})
      </div>
    </div>
  );
};

export default PriceFormatter;
