import BaseModal from "./BaseModal";

class JSONTab extends BaseModal {
  constructor(config) {
    super(config);

    this.modalName = "json-tabs";
    this.modalConfig = { keyPath: "id", autoIncrement: true };
    this.modalIndexes = [{
      name: "title",
      keyPath: "title",
      options: {},
    }]
  }

  getAllTabs() {
    return this.readAllByIndex("title");
  }

  changeTitle(id, title) {
    return this.put(id, {
      title,
    });
  }

  getInitialData() {
    return {
      title: "Untitled",
    };
  }
}

export default new JSONTab();
