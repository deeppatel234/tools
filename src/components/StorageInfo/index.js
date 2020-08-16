import React, { useEffect, useState } from "react";
import Tippy from "@tippyjs/react";

import Storage from "../Icons/Storage";

import { humanFileSize } from "../../utils";

import "./index.scss";

const StorageInfo = () => {
  const [info, setInfo] = useState(null);

  const getStorageInfo = async () => {
    if (navigator.storage && navigator.storage.estimate) {
      const quota = await navigator.storage.estimate();
      setInfo({
        usage: quota.usage,
        total: quota.quota,
        remaining: quota.quota - quota.usage,
      });
    }
  };

  useEffect(() => {
    getStorageInfo();
  }, []);

  if (!info) {
    return null;
  }

  return (
    <Tippy
      content={
        <div className="storage-box">
          <table>
            <tr>
              <td className="title">Usage</td>
              <td className="value">{humanFileSize(info.usage)}</td>
            </tr>
            <tr>
              <td className="title">Total</td>
              <td className="value">{humanFileSize(info.total)}</td>
            </tr>
            <tr>
              <td className="title">Remaining</td>
              <td className="value">{humanFileSize(info.remaining)}</td>
            </tr>
          </table>
        </div>
      }
      // visible
    >
      <Storage className="storage-info" />
    </Tippy>
  );
};

export default StorageInfo;
