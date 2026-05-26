/* =============================================================
   CARBONOPS — FIREBASE CONFIGURATION
   ─────────────────────────────────────────────────────────────
   This is the ONLY file you need to edit to connect the app
   to your Firebase project.

   HOW TO FILL THIS IN:
   1. Go to https://console.firebase.google.com
   2. Open your project → ⚙️ Project Settings → General tab
   3. Scroll down to "Your apps" → click your Web app
   4. Copy each value from the firebaseConfig object shown
   5. Paste the values below (replace the placeholder text)
   6. Save and upload to your GitHub repo → public/ folder
   ─────────────────────────────────────────────────────────────
   NEVER share this file publicly if your Firestore rules
   are not properly set up. The apiKey is safe to commit —
   Firebase security comes from Firestore rules, not the key.
   ============================================================= */

window.FIREBASE_CONFIG = {
  apiKey:            "PASTE_YOUR_API_KEY_HERE",
  authDomain:        "your-project-id.firebaseapp.com",
  projectId:         "your-project-id",
  storageBucket:     "your-project-id.appspot.com",
  messagingSenderId: "000000000000",
  appId:             "1:000000000000:web:000000000000000000000000"
};
