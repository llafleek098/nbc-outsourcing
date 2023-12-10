import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialPosition = {
  lat: 37.50231497199725,
  lng: 127.04484141806945
};

const initialState = {
  markers: [],
  currentPosition: initialPosition,
  selectedMarker: null
};

const DEFAULT_SEARCH_KEYWORD = '빽다방';

async function searchPaik(mapInstance, searchPlace = DEFAULT_SEARCH_KEYWORD) {
  if (!window.kakao) throw new Error('not kakao');
  if (!mapInstance) throw new Error('not mapInstance');
  const placeSearchInstance = new window.kakao.maps.services.Places(
    searchPlace === DEFAULT_SEARCH_KEYWORD ? mapInstance : undefined
  );

  return new Promise((res) => {
    placeSearchInstance.keywordSearch(
      searchPlace,
      (data, status) => {
        if (status === window.kakao.maps.services.Status.OK) {
          const bounds = new window.kakao.maps.LatLngBounds();
          const responseMarkers = data.map((marker) => {
            bounds.extend(new window.kakao.maps.LatLng(marker.y, marker.x));

            return {
              position: {
                lat: marker.y,
                lng: marker.x
              },
              content: marker.place_name,
              address: marker.address_name,
              phone: marker.phone
            };
          });
          if (searchPlace !== DEFAULT_SEARCH_KEYWORD) {
            mapInstance.setBounds(bounds);
          }
          res(responseMarkers);
        } else if (status === window.kakao.maps.services.Status.ZERO_RESULT) {
          res([]);
        }
      },
      { useMapCenter: true, radius: 3000, useMapBounds: true }
    );
  });
}

export const searchPaikThunk = createAsyncThunk(
  'kakao/searchPaik',
  async ({ mapInstance, searchPlace }, thunkAPI) => {
    if (!mapInstance) return thunkAPI.rejectWithValue();
    try {
      const markers = await searchPaik(mapInstance, searchPlace);
      return markers;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const kakaoSlice = createSlice({
  name: 'kakao',
  initialState,
  reducers: {
    setCurrentPosition: (state, action) => {
      state.currentPosition = action.payload;
    },
    setSelectedMarker: (state, action) => {
      state.selectedMarker = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(searchPaikThunk.fulfilled, (state, action) => {
        state.markers = action.payload;
      })
      .addCase(searchPaikThunk.rejected, (_, action) => {
        console.error(action.payload);
      });
  }
});

export const { setCurrentPosition, setMapInstance, setSelectedMarker } =
  kakaoSlice.actions;
export default kakaoSlice.reducer;
