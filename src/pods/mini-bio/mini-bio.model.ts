export interface MiniBio {
  title: string;
  name: string;
  role: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
}

export type MiniBioType = 'hero' | 'card';
