package com.eightobjects.lunches.rs.dto;

import com.eightobjects.lunches.rs.status.LoginStatus;

/**
 * Created by Adam on 2014-06-12.
 */
public class LoginDto {
    private String token;
    private LoginStatus status;


    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }

    public LoginStatus getStatus() {
        return status;
    }

    public void setStatus(LoginStatus status) {
        this.status = status;
    }
}
