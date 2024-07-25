import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { MapInfo } from '../types/MapInfo';
import { ObjectOutline } from '../types/ObjectOutline';
import { ObjectShape } from '../types/enum/ObjectShape';

interface State {
  mapId: number;
  mapTitle: string;
  mapDescription: string;
  location: string;
  centerLatitude: number;
  centerLongitude: number;
  isPublished: boolean;
  publicLink?: string;
  isMine: boolean;
  isBookmarked?: boolean;
  objectOutlineList: ObjectOutline[];
  setMapInfo: (mapInfo: MapInfo) => void;
  setTitle: (title: string) => void;
  setDescription: (description: string) => void;
  togglePublish: () => void;
  switchIsBookmarked: () => void;
}

const useMapInfoStore = create(
  persist<State>(
    (set) => ({
      mapId: 1,
      mapTitle: '건대 맛집 지도',
      mapDescription: '',
      location: '',
      centerLatitude: 0.0,
      centerLongitude: 0.0,
      isPublished: false,
      publicLink: 'mapu.com/publicLink',
      isMine: false,
      objectOutlineList: [
        {
          objectId: 1,
          shape: ObjectShape.POINT,
          name: '용용선생',
        },
        {
          objectId: 2,
          shape: ObjectShape.LINE,
          name: '식후 건대 호수 한 바퀴',
        },
        {
          objectId: 3,
          shape: ObjectShape.LINE,
          name: '건대에서 어대까지',
        },
        {
          objectId: 4,
          shape: ObjectShape.PLANE,
          name: '중국집 거리',
        },
        {
          objectId: 11,
          shape: ObjectShape.POINT,
          name: '용용선생',
        },
        {
          objectId: 21,
          shape: ObjectShape.LINE,
          name: '식후 건대 호수 한 바퀴',
        },
        {
          objectId: 31,
          shape: ObjectShape.LINE,
          name: '건대에서 어대까지',
        },
        {
          objectId: 41,
          shape: ObjectShape.PLANE,
          name: '중국집 거리',
        },
        {
          objectId: 12,
          shape: ObjectShape.POINT,
          name: '용용선생',
        },
        {
          objectId: 22,
          shape: ObjectShape.LINE,
          name: '식후 건대 호수 한 바퀴',
        },
        {
          objectId: 32,
          shape: ObjectShape.LINE,
          name: '건대에서 어대까지',
        },
        {
          objectId: 42,
          shape: ObjectShape.PLANE,
          name: '중국집 거리',
        },
      ],
      setMapInfo: (mapInfo) =>
        set({
          mapId: mapInfo.id,
          mapTitle: mapInfo.title,
          mapDescription: mapInfo.description,
          location: mapInfo.location,
          centerLatitude: mapInfo.latitude,
          centerLongitude: mapInfo.longitude,
          isPublished: mapInfo.isPublished,
          publicLink: mapInfo.isPublished ? mapInfo.publicLink : '',
          isMine: mapInfo.isMine,
          isBookmarked: mapInfo.isMine && mapInfo.isBookmarked,
        }),
      setTitle: (title) => set({ mapTitle: title }),
      setDescription: (description) => set({ mapDescription: description }),
      togglePublish: () =>
        set((state) => {
          return { ...state, isPublished: !state.isPublished };
        }),
      switchIsBookmarked: () =>
        set((state) => {
          return { ...state, isBookmarked: !state.isBookmarked };
        }),
    }),
    { name: 'mapInfoStorage' },
  ),
);

export default useMapInfoStore;
