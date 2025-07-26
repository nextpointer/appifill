// for save the data
export function saveData(key: string, value: string) {
  return new Promise<void>((resolve) => {
    chrome.storage.local.set({ [key]: value }, resolve);
  });
}

// for get the data
export function getData(key: string) {
  return new Promise<string>((resolve) => {
    chrome.storage.local.get([key], (result) => resolve(result[key]));
  });
}
