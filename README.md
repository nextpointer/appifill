# AppiFill 🚀

**AppiFill** is a simple Chrome Extension that helps you **autofill job application forms** effortlessly.
Fill out your profile **once** in the extension, and AppiFill will store your data **locally in your browser**, then automatically fill matching fields when you apply for jobs online — all while keeping your information **100% client-side**.

---

## ✨ Key Features

- 🗂️ **Fill Once, Apply Anywhere**
  Save your job application details (name, email, phone, cover letter, etc.) in a secure local store.

- 🔒 **Fully Client-Side**
  No servers, no tracking — your data lives only in your browser using Chrome’s secure `chrome.storage.local`.

- ⚡ **Automatic Autofill**
  When you open job portals, AppiFill detects matching form fields and pre-fills them — you can still edit them manually anytime.

---

## 🚀 Tech Stack

- [Bun](https://bun.sh/) — for super-fast JS runtime & bundling
- [React](https://react.dev/) — for the popup form UI
- [Chrome Extension APIs](https://developer.chrome.com/docs/extensions/) — for secure local storage and content scripts

---

## 📦 How to Install & Use Locally

> ⚠️ **Note:** *AppiFill* is not yet available on the Chrome Web Store.
> But you can easily run it **locally** by loading the extension manually.

---

### ✅ 1️⃣ Setup the Project

1. **Clone the repo**

   ```bash
   git clone https://github.com/nextpointer/appifill.git
   cd appifill
   ```

2. **Install [Bun](https://bun.sh/)** (if not installed)

   ```bash
   curl -fsSL https://bun.sh/install | bash
   ```

   Or use Homebrew (macOS):

   ```bash
   brew install bun
   ```

3. **Install dependencies**

   ```bash
   bun install
   ```

---

### ⚙️ 2️⃣ Build the Extension

Run the build command to generate the final `dist/` folder:

```bash
bun run build
```

---

### 🚀 3️⃣ Load the Extension in Chrome

1. Open Chrome and navigate to `chrome://extensions`.

2. Toggle **Developer Mode** (top right).

3. Click **Load unpacked**.

4. Select your project’s `dist/` folder.

That’s it! AppiFill is now active in your Chrome extensions — pin it for easy access.

---

### 📝 How to Use

- Click the AppiFill icon → Fill out your job profile.
- Visit any job application website.
- *AppiFill* automatically fills matching fields for you.
- You can edit any field before submitting.

---

## 📃 License

MIT — feel free to fork & improve!

---

⭐ **Contributions welcome!** If you’d like to add more smart field matchers or improvements, open an issue or PR.


💙 *Thanks for trying **AppiFill** ! Happy job hunting!* 🚀
