import JSONTab from "./JSONTab";

const idb = window.indexedDB;
const DB_NAME = "tools-test";
const DB_VERSION = 1;

const modalList = [JSONTab];

export const initStorage = () => {
  return new Promise((resolve, reject) => {
    const dbRequest = idb.open(DB_NAME, DB_VERSION);

    dbRequest.onerror = () => {
      console.error("Error in open database");
      reject();
    };

    dbRequest.onsuccess = () => {
      const db = dbRequest.result;
      modalList.forEach((modal) => {
        modal.setDb(db);
      });
      resolve();
    };

    dbRequest.onupgradeneeded = (event) => {
      const db = event.target.result;

      modalList.forEach((modal) => {
        if (!db.objectStoreNames.contains(modal.getModalName())) {
          const ts = db.createObjectStore(modal.getModalName(), modal.getModalConfig());
          modal.getAllIndexes().forEach(({ name, keyPath, options = {} }) => {
            ts.createIndex(name, keyPath, options);
          });
        }
      });
    };
  });
};
