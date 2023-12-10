import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  searchPaikThunk,
  setCurrentPosition,
  setSelectedMarker
} from '../modules/kakaomap/kakaoSlice';

function useKakaoMap() {
  const dispatch = useDispatch();

  const { markers, currentPosition, selectedMarker } = useSelector(
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

  const searchPaik = (mapInstance) => {
    dispatch(searchPaikThunk({ mapInstance }));
  };
  const searchPaikPlace = (mapInstance, searchPlace) => {
    dispatch(searchPaikThunk({ mapInstance, searchPlace }));
  };
  const updateSelectedMarker = (marker) => {
    dispatch(setSelectedMarker(marker));
  };
  return {
    markers,
    currentPosition,
    selectedMarker,
    searchPaik,
    searchPaikPlace,
    updateSelectedMarker
  };
}

export default useKakaoMap;
