import geoblaze from 'geoblaze';
import BaseStatsTool from './BaseStatsTool';
import ModeToolComponent from '../../components/tools/ModeToolComponent';
import { withProps } from 'recompose';

const calculate_mode = (raster, coors) => {
    let result = geoblaze.mode(raster, coors);
    return result.map(band => {
        return typeof band === 'number'
            ? `[${band}]`
            : `[${band.join(',')}]`.join(', ');
    });
}

const ModeTool = withProps(
    { func: calculate_mode }
)(BaseStatsTool(ModeToolComponent));

export default ModeTool;
