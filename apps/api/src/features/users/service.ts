import type { CreateUserInput, PatchUserInput } from "./types";
import { usersRepo } from "./repo";

export const userService = {
  list: () => usersRepo.list(),
  get: (id: number) => usersRepo.get(id),
  create: (data: CreateUserInput) => {
    return usersRepo.insert({
      name: data.name.trim(),
      email: data.email.trim(),
    });
  },
  update: (id: number, data: { name: string; email: string }) => {
    return usersRepo.replace({
      id,
      name: data.name.trim(),
      email: data.email.trim(),
    });
  },
  patch: (id: number, data: PatchUserInput) => {
    return usersRepo.patch(id, {
      name: typeof data.name === "string" ? data.name.trim() : undefined,
      email: typeof data.email === "string" ? data.email.trim() : undefined,
    });
  },
  remove: (id: number) => usersRepo.remove(id),
};
