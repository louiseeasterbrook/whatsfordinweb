import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideAnimationsAsync(), provideFirebaseApp(() => initializeApp({"projectId":"whats-for-din-83615","appId":"1:770166546922:web:1efdb0c28076697832d293","databaseURL":"https://whats-for-din-83615-default-rtdb.asia-southeast1.firebasedatabase.app","storageBucket":"whats-for-din-83615.appspot.com","apiKey":"AIzaSyBSYPhf3-3WFeDsECvHAVxHvdoWqURUSVg","authDomain":"whats-for-din-83615.firebaseapp.com","messagingSenderId":"770166546922","measurementId":"G-01E2DWQ9Q3"})), provideAuth(() => getAuth()), provideFirestore(() => getFirestore())]
};
