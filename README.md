# AppiFill 🚀

**AppiFill** is a simple Chrome Extension that helps you **autofill job application forms** effortlessly.
Fill out your profile **once** in the extension, and AppiFill will store your data **locally in your browser**, then automatically fill matching fields when you apply for jobs online — all while keeping your information **100% client-side**.



## ✨ Key Features

- 🗂️ **Fill Once, Apply Anywhere**
  Save your job application details (name, email, phone, cover letter, etc.) in a secure local store.

- 🔒 **Fully Client-Side & Private**
  No servers, no tracking — your data lives only in your browser using Chrome’s secure `chrome.storage.local`.

- ⚡ **Automatic Autofill**
  When you open job portals, AppiFill detects matching form fields and pre-fills them — you can still edit them manually anytime.


## 🚀 Tech Stack

- [Bun](https://bun.sh/) — for super-fast JS runtime & bundling
- [React](https://react.dev/) — for the popup form UI
- [Chrome Extension APIs](https://developer.chrome.com/docs/extensions/) — for secure local storage and content scripts


1. **Install the extension** → fill out your job profile once in the popup.
2. **Visit a job portal** → AppiFill’s content script detects form fields and fills them automatically.
3. **Review & Edit** → all fields remain editable so you can tweak them for each application.
