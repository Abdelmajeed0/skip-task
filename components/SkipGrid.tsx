"use client";
import { useState, useEffect } from "react";
import SkipCard from "./SkipCard";
import { Skip, SkipGridProps } from "@/types/skip";

const SkipGrid = ({ postcode = "NR32", area = "Lowestoft" }: SkipGridProps) => {
  const [selectedSkip, setSelectedSkip] = useState<Skip | null>(null);
  const [skips, setSkips] = useState<Skip[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchSkips = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `https://app.wewantwaste.co.uk/api/skips/by-location?postcode=${postcode}&area=${area}`
        );
        if (!response.ok) throw new Error("Failed to fetch skips");
        const data: Skip[] = await response.json();
        setSkips(data);
      } catch (err) {
        setError(
          err instanceof Error ? err.message : "An unknown error occurred"
        );
      } finally {
        setLoading(false);
      }
    };

    fetchSkips();
  }, [postcode, area]);

  const toggleSkipSelection = (skip: Skip) => {
    setSelectedSkip((prev) => (prev?.id === skip.id ? null : skip));
  };

  if (loading)
    return (
      <div className="text-center mx-auto py-24 text-4xl text-white">
        Loading skip options...
      </div>
    );
  if (error)
    return (
      <div className="text-center mx-auto py-24 text-4xl text-red-600">
        Error: {error}
      </div>
    );

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-gray-100 mb-12 text-center">
        Available Skips in {area} ({postcode})
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skips.map((skip) => (
          <SkipCard
            key={skip.id}
            skip={skip}
            isSelected={selectedSkip?.id === skip.id}
            onSelect={() => toggleSkipSelection(skip)}
          />
        ))}
      </div>
    </div>
  );
};

export default SkipGrid;
