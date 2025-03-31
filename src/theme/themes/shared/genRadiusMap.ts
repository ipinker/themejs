import type {ColorToken} from '../../interface';

const genRadiusMap = (
    radiusBase: number,
): Pick<
    ColorToken,
    'borderRadiusXS' | 'borderRadiusS' | 'borderRadiusM' | 'borderRadiusL' | 'borderRadiusXL' | 'borderRadius'
> => {
    let radiusXL = radiusBase;
    let radiusL = radiusBase;
    let radiusM = radiusBase;
    let radiusS = radiusBase;
    let radiusXS = radiusBase;

    // radiusXL
    if (radiusBase < 6 && radiusBase >= 5) {
        radiusXL = radiusBase + 3;
    } else if (radiusBase < 16 && radiusBase >= 6) {
        radiusXL = radiusBase + 6;
    } else if (radiusBase >= 16) {
        radiusXL = 24;
    }
    // radiusL
    if (radiusBase < 6 && radiusBase >= 5) {
        radiusL = radiusBase + 1;
    } else if (radiusBase < 16 && radiusBase >= 6) {
        radiusL = radiusBase + 2;
    } else if (radiusBase >= 16) {
        radiusL = 16;
    }

    // radiusSM
    if (radiusBase < 7 && radiusBase >= 5) {
        radiusM = 4;
    } else if (radiusBase < 8 && radiusBase >= 7) {
        radiusM = 5;
    } else if (radiusBase < 14 && radiusBase >= 8) {
        radiusM = 6;
    } else if (radiusBase < 16 && radiusBase >= 14) {
        radiusM = 7;
    } else if (radiusBase >= 16) {
        radiusM = 8;
    }

    // radiusS
    if (radiusBase < 6 && radiusBase >= 2) {
        radiusS = 2;
    } else if (radiusBase >= 6) {
        radiusS = 4;
    }
    // radiusXS
    if (radiusBase < 6 && radiusBase >= 2) {
        radiusXS = 1;
    } else if (radiusBase >= 6) {
        radiusXS = 2;
    }


    return {
        borderRadiusXS: radiusXS,
        borderRadiusS: radiusS,
        borderRadiusM: radiusM,
        borderRadiusL: radiusL,
        borderRadiusXL: radiusXL,
        borderRadius: radiusBase > 16 ? 16 : radiusBase,
    };
};

export default genRadiusMap;
