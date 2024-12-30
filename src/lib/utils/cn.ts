import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import resolveConfig from 'tailwindcss/resolveConfig';
import tailwindConfig from "../../../tailwind.config";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const fullConfig = resolveConfig(tailwindConfig);

export const getTailwindColor = (colorName: string): string | undefined => {
  const [prefix, colorKey] = colorName.split(':');
  const colors = fullConfig.theme?.colors as Record<string, any>;
  if (colors && prefix && colorKey) {
      const colorGroup = colors[prefix];
      if (colorGroup && typeof colorGroup === 'object') {
          return colorGroup[colorKey];
      }
  }

  return undefined;
};