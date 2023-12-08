import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialPosition = {
  lat: 37.50231497199725,
  lng: 127.04484141806945
};

const initialState = {
  markers: [],
  mapInstance: null,
  currentPosition: initialPosition,
  selectedMarker: null
};

async function searchPaik(mapInstance) {
  if (!window.kakao) throw new Error('not kakao');
  const placeSearchInstance = new window.kakao.maps.services.Places(
    mapInstance
  );
  return new Promise((res) => {
    placeSearchInstance.keywordSearch(
      '빽다방',
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
          res(responseMarkers);
        }
      },
      { useMapCenter: true, radius: 3000, useMapBounds: true }
    );
  });
}

export const searchPaikThunk = createAsyncThunk(
  'kakao/searchPaik',
  async (_, thunkAPI) => {
    const { mapInstance } = thunkAPI.getState().kakaoReducer;
    if (!mapInstance) return thunkAPI.rejectWithValue();

    const markers = await searchPaik(mapInstance);
    return markers;
  }
);

const kakaoSlice = createSlice({
  name: 'kakao',
  initialState,
  reducers: {
    setMapInstance: (state, action) => {
      state.mapInstance = action.payload;
    },
    setCurrentPosition: (state, action) => {
      state.currentPosition = action.payload;
    },
    setSelectedMarker: (state, action) => {
      state.selectedMarker = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(searchPaikThunk.fulfilled, (state, action) => {
      state.markers = action.payload;
    });
  }
});

export const { setCurrentPosition, setMapInstance, setSelectedMarker } =
  kakaoSlice.actions;
export default kakaoSlice.reducer;
