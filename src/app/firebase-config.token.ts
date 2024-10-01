import { InjectionToken } from '@angular/core';
import { FirebaseOptions } from '@angular/fire/app';

export const FIREBASE_CONFIG = new InjectionToken<FirebaseOptions>('firebase.config');
