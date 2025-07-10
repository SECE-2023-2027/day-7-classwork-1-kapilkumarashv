// app/lib/auth.js

export function registerUser(username, password) {
  if (!username || !password) return false;

  const key = `user_${username}`;
  if (localStorage.getItem(key)) {
    return false; // user already exists
  }

  localStorage.setItem(key, password);
  return true;
}

export function loginUser(username, password) {
  const key = `user_${username}`;
  const storedPassword = localStorage.getItem(key);
  return storedPassword === password;
}
