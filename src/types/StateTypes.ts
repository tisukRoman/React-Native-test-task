export type AuthState = {
  isAuthorized: boolean;
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
};

// Array of objects
export type FeedState = Array<{
  id: string;
  author: string;
  width: number;
  height: number;
  url: string;
  download_url: string;
} | undefined>;
