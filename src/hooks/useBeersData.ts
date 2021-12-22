import useSWR from 'swr';
import { BEER_API_ENDPOINT } from '../constants';
import { fetcher } from '../utils/fetcher';

export const useBeersData = (path: string) => {
    return useSWR(`${BEER_API_ENDPOINT}${path}`, fetcher);
};