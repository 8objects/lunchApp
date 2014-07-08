package com.eightobjects.lunches.rs.controller;

import com.eightobjects.lunches.rs.dto.LoginDto;
import com.eightobjects.lunches.rs.dto.UserDto;
import com.eightobjects.lunches.rs.status.LoginStatus;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;

/**
 * Created by Adam on 2014-06-12.
 */
@Controller
@RequestMapping("/user")
public class UserController {

    @ResponseBody
    @RequestMapping(value="/login/{userName}/{password}", method = RequestMethod.GET)
    @ResponseStatus(HttpStatus.OK)
    public LoginDto login(String userName, String password){
        LoginDto user = new LoginDto();
        user.setToken("ASdad");
        user.setStatus(LoginStatus.OK);
        return user;
    }

    @ResponseBody
    @RequestMapping(value="/getUser/{token}", method = RequestMethod.GET)
    @ResponseStatus(HttpStatus.OK)
    public UserDto getUser(String token){
        return null;
    }

    @ResponseBody
    @RequestMapping(value="/updateUser/{token}/{user}", method = RequestMethod.GET)
    @ResponseStatus(HttpStatus.OK)
    public UserDto updateUser(String token, UserDto user){
        return null;
    }

}
