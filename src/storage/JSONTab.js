import BaseModal from "./BaseModal";
import { debounce } from "../utils";

class JSONTab extends BaseModal {
  constructor(config) {
    super(config);

    this.modalName = "json-tabs";
    this.modalConfig = { keyPath: "id", autoIncrement: true };
    this.modalIndexes = [{
      name: "title",
      keyPath: "title",
      options: {},
    }];

    this.putDebounce = debounce(this.put.bind(this), 1000);
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

  saveAsync(id, value) {
    this.putDebounce(id, value);
  }
}

export default new JSONTab();
