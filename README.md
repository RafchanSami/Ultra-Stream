# UltraStream 🎬

UltraStream হলো একটি Netflix-style ওয়েব অ্যাপ্লিকেশন যেখানে ব্যবহারকারীরা TV shows এবং movies ব্রাউজ করতে পারে, বিস্তারিত তথ্য দেখতে পারে এবং ট্রেলার প্লে করতে পারে।  
এটি তৈরি করা হয়েছে **React + Vite + Tailwind CSS + Firebase** দিয়ে, এবং ডেটা আনা হচ্ছে **TVMaze API** ও **TMDb API** থেকে।  
YouTube API ব্যবহার করা হয়েছে ট্রেলার embed করার জন্য।

---

## 🚀 Features
- Modern Netflix-style UI (responsive design)
- Browse TV shows & movies (TVMaze + TMDb APIs)
- Detailed modal with:
  - Summary
  - Genres, rating, runtime, language, status
  - Embedded trailer (YouTube API + fallback)
- Firebase authentication (sign up / login)
- Modular component structure
- Dark theme with Tailwind CSS

---

## 🛠️ Tech Stack
- **Frontend:** React, Vite, Tailwind CSS
- **APIs:** TVMaze, TMDb, YouTube Data API v3
- **Backend/Auth:** Firebase
- **Deployment:** Vercel / Netlify

---

## ⚙️ Setup Instructions

### 1. Clone the repo
```bash
git clone https://github.com/your-username/ultrastream.git
cd ultrastream
