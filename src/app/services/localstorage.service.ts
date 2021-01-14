import { isPlatformBrowser } from "@angular/common";
import { Inject, Injectable, PLATFORM_ID } from "@angular/core";

class LocalStorage implements Storage {
  [name: string]: any;
  readonly length: number;
  clear(): void {}
  getItem(key: string): string | null {
    return undefined;
  }
  key(index: number): string | null {
    return undefined;
  }
  removeItem(key: string): void {}
  setItem(key: string, value: string): void {}
}

@Injectable({
  providedIn: "root",
})
export class LocalstorageService implements Storage {
  private storage: Storage;

  constructor(@Inject(PLATFORM_ID) private platformId: any) {
    this.storage = new LocalStorage();

    if (isPlatformBrowser(platformId)) {
      this.storage = localStorage;
    }
  }

  [name: string]: any;

  length: number;

  clear(): void {
    this.storage.clear();
  }

  getItem(key: string): string | null {
    return this.storage.getItem(key);
  }

  key(index: number): string | null {
    return this.storage.key(index);
  }

  removeItem(key: string): void {
    return this.storage.removeItem(key);
  }

  setItem(key: string, value: string): void {
    return this.storage.setItem(key, value);
  }
}
