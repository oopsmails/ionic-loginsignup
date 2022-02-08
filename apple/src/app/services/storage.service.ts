import { Injectable } from '@angular/core';
import { Storage } from '@capacitor/storage';
@Injectable({
  providedIn: 'root'
})
export class StorageService {
  constructor() { }

  // Store the value
  async store(storageKey: string, value: any) {
    const encryptedValue = btoa(encodeURIComponent(JSON.stringify(value)));
    await Storage.set({
      key: storageKey,
      value: encryptedValue
    });
  }

  // Get the value
  async get(storageKey: string) {
    const ret = await Storage.get({ key: storageKey });
    console.log(ret);
    if (ret) {
      return JSON.parse(decodeURIComponent(atob(ret.value)));
    }
    return '';
  }

  async removeStorageItem(storageKey: string) {
    await Storage.remove({ key: storageKey });
  }

  // Clear storage
  async clear() {
    await Storage.clear();
  }
}
