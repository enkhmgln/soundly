import { useState } from "react";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { trpc } from "@/lib/trpc";

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
    <View style={styles.container}>
      <Text style={styles.title}>Users CRUD</Text>
      <View style={styles.buttonRow}>
        <Pressable style={styles.button} onPress={handleList}>
          <Text style={styles.buttonText}>List</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={handleCreate}>
          <Text style={styles.buttonText}>Create</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={handleUpdate}>
          <Text style={styles.buttonText}>Update</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={handleDelete}>
          <Text style={styles.buttonText}>Delete</Text>
        </Pressable>
      </View>
      <ScrollView style={styles.logBox}>
        <Text style={styles.logText}>{log || "Tap a button to call tRPC."}</Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
  },
  title: {
    fontSize: 22,
    fontWeight: "600",
    marginBottom: 16,
  },
  buttonRow: {
    width: "100%",
    gap: 8,
    marginBottom: 16,
  },
  button: {
    backgroundColor: "#111",
    paddingVertical: 10,
    borderRadius: 8,
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "600",
  },
  logBox: {
    width: "100%",
    maxHeight: 240,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    padding: 12,
  },
  logText: {
    fontFamily: "Menlo",
    fontSize: 12,
  },
});
