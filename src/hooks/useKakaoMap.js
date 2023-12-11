import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  searchPaikThunk,
  setCurrentPosition,
  setSelectedMarker
} from '../modules/kakaomap/kakaoSlice';

let mapInstanceRef = { current: null };

function useKakaoMap() {
  const dispatch = useDispatch();

  const { markers, currentPosition, selectedMarker } = useSelector(
    (state) => state.kakaoReducer
  );

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { coords } = position;
        dispatch(
          setCurrentPosition({ lat: coords.latitude, lng: coords.longitude })
        );
      });
    }
  }, []);

  const searchPaik = (mapInstance) => {
    dispatch(searchPaikThunk({ mapInstance }));
  };

  const searchPaikPlace = (mapInstance, searchPlace) => {
    dispatch(searchPaikThunk({ mapInstance, searchPlace }));
  };

  const updateSelectedMarker = (marker) => {
    dispatch(setSelectedMarker(marker));
  };

  const handleCreatedMap = (map) => {
    if (!mapInstanceRef.current) {
      mapInstanceRef.current = map;
      searchPaik(map);
    }
  };

  const handleIdleMap = () => searchPaik(mapInstanceRef.current);

  const handleSelectMarker = (marker) => () => {
    updateSelectedMarker(marker);
  };

  return {
    mapInstanceRef,
    markers,
    currentPosition,
    selectedMarker,
    searchPaik,
    searchPaikPlace,
    updateSelectedMarker,
    handleCreatedMap,
    handleIdleMap,
    handleSelectMarker
  };
}

export default useKakaoMap;
