export interface Repository {
  id: number;
  name: string;
}

// State type
export interface RepositoriesState {
  data: Repository[];
}
