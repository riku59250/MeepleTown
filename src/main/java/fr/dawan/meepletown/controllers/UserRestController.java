package fr.dawan.meepletown.controllers;

import java.util.List;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import fr.dawan.meepletown.beans.User;
import fr.dawan.meepletown.dao.GenericDao;

@RestController
@RequestMapping("userrest")
public class UserRestController {
	
	@Autowired
	GenericDao<User> dao;
	
	@GetMapping("test")	
	public List<User> getUser() {
		return (List<User>) dao.findAll(User.class);
	}
	}

