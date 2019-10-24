import { Injectable } from '@angular/core';
import Unsplash from 'unsplash-js';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor() { }
  buildAuthentication(): Unsplash {
    console.log("/* BUILD AUTHENTICATION */")

    var unsplashApi: Unsplash = new Unsplash({
      accessKey: "da126a66810274252b66f678ffa585890b053598a4e542d9a33591f9d6b0ce6a",
      secret: "915fb46346b6c90c919fb4382c6759da2a6b3de4904d0a02873b16a564e4d1b2"
    });

    const authenticationUrl = unsplashApi.auth.getAuthenticationUrl([
      "public",
      "read_user",
      "write_user",
      "read_photos",
      "write_photos"
    ]);

    return unsplashApi;
  }


}
