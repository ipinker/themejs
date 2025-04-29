import type { SeedMap, SizeMap } from '../../interface';

export default function genSizeMap(token: SeedMap): SizeMap {
  const { sizeUnit, sizeStep } = token;

  return {
    sizeXXXL: sizeUnit * (sizeStep + 4),
    sizeXXL: sizeUnit * (sizeStep + 2),
    sizeXL: sizeUnit * (sizeStep + 1),
    sizeL: sizeUnit * (sizeStep + 0.5),
    sizeM: sizeUnit * (sizeStep),
    size: sizeUnit * sizeStep,
    sizeS: sizeUnit * (sizeStep - 0.5),
    sizeXS: sizeUnit * (sizeStep - 1),
    sizeXXS: sizeUnit * (sizeStep - 1.5),
    sizeXXXS: sizeUnit * (sizeStep - 2),
  };
}
