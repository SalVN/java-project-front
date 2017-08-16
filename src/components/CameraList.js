import React, { Component } from 'react';
import CameraBox from './CameraBox';

const cameras = [
    { cameraId: 1, megapixels: 24, make: 'Sony', model: 'A9' },
    { cameraId: 2, megapixels: 16, make: 'Nikon', model: 'Coolpix P900' },
    { cameraId: 3, megapixels: 30, make: 'Canon', model: 'EO5 5D Mark IV' },
    { cameraId: 4, megapixels: 18, make: 'Panasonic', model: 'Lumix DMC-TZ60 ' },
    { cameraId: 5, megapixels: 36, make: 'Nikon', model: 'D810' }
];

class CameraList extends Component {
    render() {
        return (
            <div>
                {cameras.map((camera, i) => {
                    return (
                        <CameraBox
                            key={i}
                            index={i}
                            camera={camera} />
                    );
                })
                }
            </div>
        );
    }
}

export default CameraList;