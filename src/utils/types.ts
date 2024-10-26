export interface NewsItemData {
  datetime: EpochTimeStamp;
  headline: string;
  id: number;
  image: string;
  source: string;
  url: string;
}

export type News = NewsItemData[];
