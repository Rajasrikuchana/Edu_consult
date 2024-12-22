package com.pol.user_service.auth.service;

import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

@Service
public class GenerateCookies {
    @Value("${jwt.expiration}")
    private long jwtExpiration;

    @Value("${jwt.refresh-expiration}")
    private long refreshExpiration;

    public  void addAccessTokenToCookie(HttpServletResponse response, String accessToken) {
        int cookieExpiryTimeInSeconds = (int) (jwtExpiration/1000);
        Cookie cookie = new Cookie("accessToken", accessToken);
        cookie.setHttpOnly(true); // Make the cookie HttpOnly
//        cookie.setSecure(true); // Ensure the cookie is sent over HTTPS
        cookie.setPath("/"); // Cookie available for the entire domain
        cookie.setMaxAge(cookieExpiryTimeInSeconds); // Expiration time in seconds (1 hour)
//        cookie.setDomain("yourdomain.com"); // Adjust domain if needed
        response.addCookie(cookie); // Add the cookie to the response
    }

    public void addRefreshTokenToCookie(HttpServletResponse response, String refreshToken) {
        int cookieExpiryTimeInSeconds = (int) (refreshExpiration/1000);
        Cookie cookie = new Cookie("refreshToken", refreshToken);
        cookie.setHttpOnly(true); // Make the cookie HttpOnly
//        cookie.setSecure(true); // Ensure the cookie is sent over HTTPS
        cookie.setPath("/"); // Cookie available for the entire domain
        cookie.setMaxAge(cookieExpiryTimeInSeconds); // Expiration time in seconds (1 hour)
//        cookie.setDomain("yourdomain.com"); // Adjust domain if needed
        response.addCookie(cookie); // Add the cookie to the response
    }
}
