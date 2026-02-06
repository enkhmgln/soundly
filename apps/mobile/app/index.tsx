import { useState } from "react";
import { Pressable, ScrollView, Text, View } from "react-native";
import { trpc } from "@/lib/trpc";
import { Button } from "@/components/ui/button";

export default function Index() {
  const [log, setLog] = useState<string>("");
  const listQuery = trpc.user.list.useQuery(undefined, { enabled: false });
  const createUser = trpc.user.create.useMutation();
  const updateUser = trpc.user.update.useMutation();
  const deleteUser = trpc.user.delete.useMutation();

  const handleList = async () => {
    const result = await listQuery.refetch();
    setLog(JSON.stringify(result.data ?? result.error, null, 2));
  };

  const handleCreate = async () => {
    const timestamp = Date.now();
    const user = await createUser.mutateAsync({
      name: `User ${timestamp}`,
      email: `user${timestamp}@example.com`,
    });
    setLog(JSON.stringify(user, null, 2));
  };

  const handleUpdate = async () => {
    const updated = await updateUser.mutateAsync({
      id: 1,
      name: "Updated User",
      email: "updated@example.com",
    });
    setLog(JSON.stringify(updated, null, 2));
  };

  const handleDelete = async () => {
    const deleted = await deleteUser.mutateAsync(1);
    setLog(JSON.stringify(deleted, null, 2));
  };

  return (
    <View className="flex-1 items-center justify-center bg-white px-6">
      <Text className="mb-4 text-[22px] font-semibold">Users CRUD</Text>
      <Button>
        <Text>Click me</Text>
      </Button>
      <View className="w-full gap-2 mb-4">
        <Pressable
          className="rounded-lg bg-neutral-900 py-2.5"
          onPress={handleList}
        >
          <Text className="text-center font-semibold text-white">List</Text>
        </Pressable>
        <Pressable
          className="rounded-lg bg-neutral-900 py-2.5"
          onPress={handleCreate}
        >
          <Text className="text-center font-semibold text-white">Create</Text>
        </Pressable>
        <Pressable
          className="rounded-lg bg-neutral-900 py-2.5"
          onPress={handleUpdate}
        >
          <Text className="text-center font-semibold text-white">Update</Text>
        </Pressable>
        <Pressable
          className="rounded-lg bg-neutral-900 py-2.5"
          onPress={handleDelete}
        >
          <Text className="text-center font-semibold text-white">Delete</Text>
        </Pressable>
      </View>
      <ScrollView className="w-full max-h-60 rounded-lg border border-neutral-200 p-3">
        <Text className="text-xs">{log || "Tap a button to call tRPC."}</Text>
      </ScrollView>
    </View>
  );
}
