package fr.dawan.meepletown.controllers;

import java.util.Set;

import javax.ws.rs.PathParam;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import fr.dawan.meepletown.beans.User;
import fr.dawan.meepletown.dao.GenericDao;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/user")
public class UserController {
	
	@Autowired
	GenericDao<User> dao; 
	
	
	@RequestMapping("/{idUser}")
	public User findBy(@PathVariable(value = "idUser") long id) {
		System.out.println(id);
		return dao.findById(User.class, id);
	}
	
	@GetMapping("/")
	public Set<User> findAll(){
		return (Set<User>) dao.findAll(User.class);
	}
	
	@PostMapping("/")
	public void createOrUpdate(@RequestBody User user) {
		dao.create(user);
	}
	
	@DeleteMapping("/delete/{iduser}")
	public void delete(@PathVariable( value = "idUser") long id) {
		dao.delete(User.class, id);
		
	}
	
	

}
