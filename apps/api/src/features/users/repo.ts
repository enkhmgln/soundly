import type {
  CreateUserInput,
  PatchUserInput,
  UpdateUserInput,
  User,
} from "./types";

const users: User[] = [
  { id: 1, name: "Ada Lovelace", email: "ada@example.com" },
  { id: 2, name: "Alan Turing", email: "alan@example.com" },
];
let nextUserId = 3;

export const usersRepo = {
  list: () => users,
  get: (id: number) => users.find((item) => item.id === id) ?? null,
  insert: (data: CreateUserInput) => {
    const user: User = {
      id: nextUserId++,
      name: data.name,
      email: data.email,
    };
    users.push(user);
    return user;
  },
  replace: (data: UpdateUserInput) => {
    const index = users.findIndex((item) => item.id === data.id);
    if (index === -1) {
      return null;
    }
    const updated: User = {
      id: data.id,
      name: data.name,
      email: data.email,
    };
    users[index] = updated;
    return updated;
  },
  patch: (id: number, data: PatchUserInput) => {
    const user = users.find((item) => item.id === id);
    if (!user) {
      return null;
    }
    if (typeof data.name === "string") {
      user.name = data.name;
    }
    if (typeof data.email === "string") {
      user.email = data.email;
    }
    return user;
  },
  remove: (id: number) => {
    const index = users.findIndex((item) => item.id === id);
    if (index === -1) {
      return null;
    }
    const [removed] = users.splice(index, 1);
    return removed;
  },
};
