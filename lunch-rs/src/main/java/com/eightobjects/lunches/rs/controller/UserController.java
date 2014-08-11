package com.eightobjects.lunches.rs.controller;

import com.eightobjects.lunches.rs.dto.LoginDto;
import com.eightobjects.lunches.rs.dto.UserDto;
import com.eightobjects.lunches.rs.dto.UserRegisterDTO;
import com.eightobjects.lunches.rs.status.LoginStatus;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

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
    @RequestMapping(value="/changePassword/{userId}/{oldPassword}/{password}", method = RequestMethod.PUT)
    @ResponseStatus(HttpStatus.OK)
    public UserDto changePassword(String userId,String oldPassword, String password){
        UserDto user = new UserDto();

        return user;
    }

    @ResponseBody
    @RequestMapping(value="/register/", method = RequestMethod.PUT)
    @ResponseStatus(HttpStatus.OK)
    public UserDto register(@RequestBody UserRegisterDTO registerUser){
        UserDto user = new UserDto();

        return user;
    }

    @ResponseBody
    @RequestMapping(value="/{userId}", method = RequestMethod.PUT)
    @ResponseStatus(HttpStatus.OK)
    public UserDto updateUser(String userId, UserDto user){
        return null;
    }

    @ResponseBody
    @RequestMapping(value="/{userId}", method = RequestMethod.GET)
    @ResponseStatus(HttpStatus.OK)
    public UserDto getUser(@PathVariable String userId){
        return null;
    }

}
