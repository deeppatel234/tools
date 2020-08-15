class BaseModal {
  constructor(config) {
    this.db = null;

    this.defaultIndexes = [{
      name: "createAt",
      keyPath: "createAt",
      options: {},
    }];
  }

  getModalName() {
    return this.modalName;
  }

  getModalConfig() {
    return this.modalConfig || {};
  }

  getModalIndexes() {
    return this.modalIndexes || [];
  }

  getAllIndexes() {
    return [...this.defaultIndexes, ...this.getModalIndexes()];
  }

  onModalCreate() {}

  setDb(db) {
    this.db = db;
  }

  getTransaction(mode) {
    const transaction = this.db.transaction(this.modalName, mode);
    return transaction.objectStore(this.modalName);
  }

  add(data) {
    return new Promise((resolve, reject) => {
      const request = this.getTransaction("readwrite").add({
        ...data,
        createAt: new Date().valueOf()
      });

      request.onsuccess = () => {
        resolve();
      };

      request.onerror = () => {
        reject();
      };
    });
  }

  readAll() {
    return new Promise((resolve, reject) => {
      const request = this.getTransaction("readonly").getAll();

      request.onsuccess = (event) => {
        resolve(event.target.result);
      };

      request.onerror = () => {
        reject();
      };
    });
  }

  readAllByIndex(indexName) {
    return new Promise((resolve, reject) => {
      const request = this.getTransaction("readonly").index(indexName);
      const list = [];

      request.openKeyCursor().onsuccess = function(event) {
        const cursor = event.target.result;
        if(cursor) {
          list.push({
            id: cursor.primaryKey,
            [indexName]: cursor.key,
          });
          cursor.continue();
        } else {
          resolve(list);
        }
      };

      request.onerror = () => {
        reject();
      };
    });
  }

  get(id) {
    return new Promise((resolve, reject) => {
      const request = this.getTransaction("readonly").get(id);

      request.onsuccess = (event) => {
        resolve(event.target.result);
      };

      request.onerror = () => {
        reject();
      };
    });
  }

  put(id, value) {
    return new Promise((resolve, reject) => {
      const cursor = this.getTransaction("readwrite");

      const getReqest = cursor.get(id);

      getReqest.onsuccess = (event) => {
        const d = event.target.result;
        const request = cursor.put({
          ...d,
          ...value,
        });

        request.onsuccess = () => {
          resolve();
        };
        request.onerror = () => {
          reject();
        };
      };

      getReqest.onerror = () => {
        reject();
      };
    });
  }

  delete(id) {
    return new Promise((resolve, reject) => {
      const request = this.getTransaction("readwrite").delete(id);
      request.onsuccess = function() {
        resolve();
      };

      request.onerror = () => {
        reject();
      };
    });
  }
}

export default BaseModal;
