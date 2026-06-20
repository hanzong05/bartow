importScripts('https://www.gstatic.com/firebasejs/10.12.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.12.0/firebase-messaging-compat.js');
firebase.initializeApp({
    apiKey: "AIzaSyAAqyUeAMIWHhEAxjeJaWdCokpTRpfxXM0",
    authDomain: "bluespot-hub.firebaseapp.com",
    databaseURL: "https://bluespot-hub-default-rtdb.firebaseio.com",
    projectId: "bluespot-hub",
    storageBucket: "bluespot-hub.firebasestorage.app",
    messagingSenderId: "819010976218",
    appId: "1:819010976218:web:3f8ce672704169cee528e3"
});
const messaging = firebase.messaging();
messaging.onBackgroundMessage(payload => {
    const n = payload.notification || {};
    const icon = (payload.data && payload.data.icon) || n.icon || 'https://assets.cdn.filesafe.space/Sk7XUXxjVtIrJHKp3GhX/media/6a2ff4421b95dbb2c2e8e5c1.png';
    self.registration.showNotification(n.title || 'Park Hub', {
        body: n.body || '', icon, badge: icon, vibrate: [200, 100, 200], data: payload.data || {}
    });
});
self.addEventListener('notificationclick', event => {
    event.notification.close();
    const url = (event.notification.data && event.notification.data.url) || self.location.origin;
    event.waitUntil(clients.openWindow(url));
});
