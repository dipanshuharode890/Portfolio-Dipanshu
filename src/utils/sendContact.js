// src/utils/sendContact.js

export const sendContact = (formData) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = Math.random() > 0.1; // 90% chance of success
      if (success) {
        resolve({ status: 'ok' });
      } else {
        reject(new Error('Mock server error'));
      }
    }, 1500); // simulate 1.5s network delay
  });
};
