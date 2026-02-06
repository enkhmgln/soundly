export type User = {
  id: number;
  name: string;
  email: string;
};

export type CreateUserInput = {
  name: string;
  email: string;
};

export type UpdateUserInput = {
  id: number;
  name: string;
  email: string;
};

export type PatchUserInput = {
  name?: string;
  email?: string;
};
