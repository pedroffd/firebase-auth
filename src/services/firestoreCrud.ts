import { firebase as firebaseClient } from "@/services/firebaseClient";

const firestore: firebaseClient.firestore.Firestore =
  firebaseClient.firestore();

const getAll = async (node: string) => {
  const ref = firestore.collection(node);
  const snapshot = await ref.get();
  let data: any[] = [];
  snapshot.forEach((doc) => {
    data = [...data, doc.data()];
  });
  return data;
};

const pushData = async (
  node: string,
  objToSubmit: firebaseClient.firestore.DocumentData
) => {
  const nodeRef = firestore.collection(node);
  const objRef = await nodeRef.add(objToSubmit);
  return objRef.id;
};

const getUniqueDataBy = async (node: string, id: string | undefined) => {
  const ref = firestore.collection(node).doc(id);
  const doc = await ref.get();
  return doc.data();
};

const updateData = async (
  id: string | undefined,
  node: string,
  objToSubmit: any
) => {
  const ref = firestore.collection(node).doc(id);
  try {
    await firestore.runTransaction(
      async (t: {
        get: (
          arg0: firebaseClient.firestore.DocumentReference<firebaseClient.firestore.DocumentData>
        ) => any;
        update: (
          arg0: firebaseClient.firestore.DocumentReference<firebaseClient.firestore.DocumentData>,
          arg1: any
        ) => void;
      }) => {
        await t.get(ref);
        t.update(ref, objToSubmit);
      }
    );
  } catch (err) {
    console.log(err);
  }
};

export { getAll, pushData, getUniqueDataBy, updateData };
