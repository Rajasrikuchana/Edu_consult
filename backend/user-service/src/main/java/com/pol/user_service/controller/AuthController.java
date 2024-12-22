package com.pol.user_service.controller;

import com.pol.user_service.auth.dto.AuthResponseDTO;
import com.pol.user_service.auth.dto.LoginRequestDTO;
import com.pol.user_service.auth.dto.RefreshTokenRequestDTO;
import com.pol.user_service.auth.dto.RegisterRequestDTO;
import com.pol.user_service.auth.model.RefreshToken;
import com.pol.user_service.auth.model.User;
import com.pol.user_service.auth.service.AuthService;
import com.pol.user_service.auth.service.GenerateCookies;
import com.pol.user_service.auth.service.JwtService;
import com.pol.user_service.auth.service.RefreshTokenService;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.validation.Valid;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")
public class AuthController {
    private final AuthService authService;
    private final RefreshTokenService refreshTokenService;
    private final JwtService jwtService;
    private final GenerateCookies generateCookies;

    public AuthController(AuthService authService, RefreshTokenService refreshTokenService, JwtService jwtService, GenerateCookies generateCookies) {
        this.authService = authService;
        this.refreshTokenService = refreshTokenService;
        this.jwtService = jwtService;
        this.generateCookies = generateCookies;
    }

    @PostMapping("/register")
    public ResponseEntity<AuthResponseDTO> register(@RequestBody @Valid RegisterRequestDTO registerRequestDTO,
                                                    HttpServletResponse response
                                                   ){
        return ResponseEntity.ok(authService.register(registerRequestDTO,response));
    }

    @PostMapping("/login")
    public ResponseEntity<AuthResponseDTO> login(@RequestBody @Valid LoginRequestDTO loginRequestDTO,
                                                 HttpServletResponse response
                                                 ){
        return ResponseEntity.ok(authService.login(loginRequestDTO,response));
    }

    @PostMapping("/refresh")
    public ResponseEntity<AuthResponseDTO> refreshToken(@RequestBody @Valid RefreshTokenRequestDTO refreshTokenRequestDTO,
                                                        HttpServletResponse response){
        RefreshToken refreshToken = refreshTokenService.verifyRefreshToken(refreshTokenRequestDTO.getRefreshToken());
        User user = refreshToken.getUser();

        String accessToken = jwtService.generateToken(user);
        generateCookies.addAccessTokenToCookie(response,accessToken);
        generateCookies.addRefreshTokenToCookie(response,refreshToken.getRefreshToken());
        return ResponseEntity.ok(AuthResponseDTO.builder()
                        .username(user.getUsername())
                        .role(user.getRoles().toString())
                .build());

    }
}