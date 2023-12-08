import { useDispatch, useSelector } from 'react-redux';
function useKakaoMap() {
  const dispatch = useDispatch();
  const { markers, mapInstance, currentPosition, selectedMarker } = useSelector(
    (state) => state.kakaoReducer
  );

  console.log({ markers, mapInstance, currentPosition, selectedMarker });
}

export default useKakaoMap;
