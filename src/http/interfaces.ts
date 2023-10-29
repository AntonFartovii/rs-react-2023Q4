export interface CharacterLocation {
  name: string;
  url: string;
}

export interface ICharacter {
  created: string;
  episode: string[];
  gender: 'Female' | 'Male' | 'Genderless' | 'unknown';
  id: number;
  image: string;
  location: CharacterLocation;
  name: string;
  origin: { name: string; url: string };
  species: string;
  status: 'Dead' | 'Alive' | 'unknown';
  type: string;
  url: string;
}

export interface IResponse {
  info?: {
    count: number;
    next: string | null;
    pages: number;
    prev: string | null;
  };
  results?: ICharacter[];
  error?: string;
}

export interface CharacterFilter {
  name?: string;
  type?: string;
  species?: string;
  status?: string;
  gender?: string;
  page?: number;
}
