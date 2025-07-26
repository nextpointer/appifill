import type { JobProfileDataType } from "./types";

// for save the data
export function saveData(key: string, value: JobProfileDataType) {
  return new Promise<void>((resolve) => {
    chrome.storage.local.set({ [key]: value }, resolve);
  });
}

// for get the data
export function getData(key: string) {
  return new Promise<JobProfileDataType>((resolve) => {
    chrome.storage.local.get([key], (result) => resolve(result[key]));
  });
}
