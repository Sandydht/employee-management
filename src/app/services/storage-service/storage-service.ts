import { Injectable } from '@angular/core';
import { EncryptionService } from '../encryption-service/encryption-service';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  constructor(
    private readonly encryptionService: EncryptionService
  ) { }

  setItem(key: string, value: any): void {
    const encryptedData = this.encryptionService.encrypt(value);
    localStorage.setItem(key, JSON.stringify(encryptedData));
  }

  getItem<T>(key: string): T | null {
    const item = localStorage.getItem(key);
    if (item) {
      const responseJson = JSON.parse(item);
      const decryptedData = this.encryptionService.decrypt(responseJson);
      return decryptedData ? (JSON.parse(decryptedData) as T) : null;
    }
    
    return null;
  }

  removeItem(key: string): void {
    localStorage.removeItem(key);
  }

  clear(): void {
    localStorage.clear();
  }
}
