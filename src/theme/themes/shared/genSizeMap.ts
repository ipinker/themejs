import type { SeedMap, SizeMap } from '../../interface';

export default function genSizeMap(token: SeedMap): SizeMap {
  const { sizeUnit, sizeStep } = token;

  return {
    sizeXXXL: sizeUnit * (sizeStep + 9), // 24
    sizeXXL: sizeUnit * (sizeStep + 7), // 22
    sizeXL: sizeUnit * (sizeStep + 5), // 20
    sizeL: sizeUnit * (sizeStep + 3), // 18
    sizeM: sizeUnit * (sizeStep + 1), // 16
    size: sizeUnit * sizeStep, // 15
    sizeS: sizeUnit * (sizeStep - 1), // 14
    sizeXS: sizeUnit * (sizeStep - 2), // 13
    sizeXXS: sizeUnit * (sizeStep - 3), // 12
    sizeXXXS: sizeUnit * (sizeStep - 4), // 11
  };
}
