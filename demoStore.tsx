import { mountStoreDevtool } from "simple-zustand-devtools";
import { create } from "zustand";

interface GameQuery {
  genreId?: number;
  platformId?: number;
  sortOrder?: string;
  searchText?: string;
}
interface GameQueryStore {
  gameQuery: GameQuery;
  setGenreId: (genreid: number) => void;
  setPlatformId: (platformId: number) => void;
  setSortOrder: (sortOrder: string) => void;
  setSearchText: (searchedText: string) => void;
  setGameQueryNull: () => void;
}



const useGameQueryStore = create<GameQueryStore>(set => ({
    gameQuery: {},
    setGenreId: (genreId) => set(store => ({gameQuery: {...store.gameQuery, genreId}})),
    setPlatformId: (platformId) => set(store => ({gameQuery: {...store.gameQuery, platformId}})),
    setSortOrder: (order) => set({gameQuery: {sortOrder: order}}),
    setSearchText: (searchedText) => set({gameQuery: {searchText: searchedText}}),
    setGameQueryNull: () => set({gameQuery: {} })
}))

if (process.env.NODE_ENV === 'development') {
    mountStoreDevtool('GameQueryStore', useGameQueryStore<GameQueryStore>)
}

export default useGameQueryStore;