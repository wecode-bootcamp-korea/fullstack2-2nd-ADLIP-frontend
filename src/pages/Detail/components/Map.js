import React, { useRef, useEffect } from 'react';

function Map(props) {
  const container = useRef(null);
  const { locationAddress } = props;
  const { maps } = window.kakao;
  const options = {
    center: new maps.LatLng(33.450701, 126.570667),
    level: 3,
  };
  let geocoder = new maps.services.Geocoder();

  useEffect(() => {
    geocoder.addressSearch(locationAddress, (result, status) => {
      if (status === maps.services.Status.OK) {
        let coords = new maps.LatLng(result[0].y, result[0].x);
        let map = new maps.Map(container.current, options);
        let marker = new maps.Marker({
          map: map,
          position: coords,
        });
        map.setCenter(coords);
        marker.setMap(map);
      }
    });
  }, []);

  return (
    <div
      className='map'
      style={{ width: '768px', height: '500px' }}
      ref={container}
    ></div>
  );
}

export default Map;
