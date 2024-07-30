import { MarkerProps, ControlPosition } from 'react-map-gl';
import { GeocoderOptions } from '@mapbox/mapbox-gl-geocoder';
type GeocoderControlProps = Omit<GeocoderOptions, 'accessToken' | 'mapboxgl' | 'marker'> & {
    mapboxAccessToken: string;
    marker?: boolean | Omit<MarkerProps, 'longitude' | 'latitude'>;
    position: ControlPosition;
    onLoading?: (e: object) => void;
    onResults?: (e: object) => void;
    onResult?: (e: object) => void;
    onError?: (e: object) => void;
};
export default function GeocoderControl(props: GeocoderControlProps): null;
export {};
//# sourceMappingURL=GeocoderControl.d.ts.map