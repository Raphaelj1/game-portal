import genres from '../data/genres';
// import useData from './useData';

export interface Genre {
	id: number;
	name: string;
	games_count: number;
	image_background: string;
}

const useGenres = () => ({ data: genres, isLoading: false, error: null });

// default hook to fetch genres
// const useGenres = () => useData<Genre>('/genres');

export default useGenres;
