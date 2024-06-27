import React, { useEffect, useRef, useState } from 'react';

interface SliderProps {
  initialLowerValue: number;
  initialUpperValue: number;
  minValue: number;
  maxValue: number;
  onChange: (lowerValue: number, upperValue: number) => void;
}

const MultiRangeSlider: React.FC<SliderProps> = ({ initialLowerValue, initialUpperValue, minValue, maxValue, onChange }) => {
  const [lowerValue, setLowerValue] = useState<number>(initialLowerValue);
  const [upperValue, setUpperValue] = useState<number>(initialUpperValue);

  const sliderRef = useRef<HTMLDivElement | null>(null);

  const lowerPercent = ((lowerValue - minValue) / (maxValue - minValue)) * 100;
  const upperPercent = ((upperValue - minValue) / (maxValue - minValue)) * 100;

  useEffect(() => {
    onChange(lowerValue, upperValue);
  }, [lowerValue, upperValue, onChange]);

  const handleMouseDown = (thumbType: 'lower' | 'upper') => (event: React.MouseEvent) => {
    const startX = event.clientX;
    const startLowerValue = lowerValue;
    const startUpperValue = upperValue;

    const sliderWidth = sliderRef.current?.offsetWidth ?? 1;

    const handleMouseMove = (moveEvent: MouseEvent) => {
      const deltaX = moveEvent.clientX - startX;
      const deltaValue = (deltaX / sliderWidth) * (maxValue - minValue);

      if (thumbType === 'lower') {
        const newLowerValue = Math.min(Math.max(minValue, startLowerValue + deltaValue), upperValue - 1);
        setLowerValue(newLowerValue);
      } else {
        const newUpperValue = Math.max(Math.min(maxValue, startUpperValue + deltaValue), lowerValue + 1);
        setUpperValue(newUpperValue);
      }
    };

    const handleMouseUp = () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };

  return (
    <div className="flex w-full m-auto items-center justify-center">
      <div className="py-1 relative min-w-full" ref={sliderRef}>
        <div className="h-1 bg-custom-gray-200 rounded-full">
          <div
            className="absolute h-1 rounded-full bg-custom-red"
            style={{ width: `${upperPercent - lowerPercent}%`, left: `${lowerPercent}%` }}
          ></div>
          <div
            className="absolute h-4 flex items-center justify-center w-4 rounded-full bg-custom-red border-[white] shadow border-2 top-0 cursor-pointer"
            unselectable="on"
            onMouseDown={handleMouseDown('lower')}
            style={{ left: `${lowerPercent}%` }}
          ></div>
          <div
            className="absolute h-4 flex items-center justify-center w-4 rounded-full border-[white] shadow border-2 bg-custom-red top-0 cursor-pointer"
            unselectable="on"
            onMouseDown={handleMouseDown('upper')}
            style={{ left: `${upperPercent}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default MultiRangeSlider;
