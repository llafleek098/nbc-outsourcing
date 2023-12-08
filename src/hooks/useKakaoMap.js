import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  searchPaikThunk,
  setCurrentPosition,
  setMapInstance,
  setSelectedMarker
} from '../modules/kakaomap/kakaoSlice';
function useKakaoMap() {
  const dispatch = useDispatch();
  const { markers, mapInstance, currentPosition, selectedMarker } = useSelector(
    (state) => state.kakaoReducer
  );

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { coords } = position;
        dispatch(setCurrentPosition(coords));
      });
    }
  }, []);

  const searchPaik = () => {
    dispatch(searchPaikThunk());
  };
  const updateSelectedMarker = (marker) => {
    dispatch(setSelectedMarker(marker));
  };
  const updateMapInstance = (mapInstance) => {
    dispatch(setMapInstance(mapInstance));
  };
  return {
    markers,
    mapInstance,
    currentPosition,
    selectedMarker,
    searchPaik,
    updateSelectedMarker,
    updateMapInstance
  };
}

export default useKakaoMap;
