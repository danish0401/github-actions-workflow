import type { Dict } from 'mixpanel-browser';

export type TrackAnalyticEvent = (eventName: string, props?: Dict) => void;
