const IMAGE_URL = "https://i.ytimg.com/vi/9_6SkzdB1kQ/hqdefault.jpg";

self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", () => self.clients.claim());

self.addEventListener("message", (e) => {
  if (e.data === "start") {
    sendNotification();
    setInterval(sendNotification, 5000); // every 5 seconds
  }
});

function sendNotification() {
  self.registration.showNotification("Windows needs a quagmire update", {
    icon: IMAGE_URL,
    badge: IMAGE_URL
  });
}
