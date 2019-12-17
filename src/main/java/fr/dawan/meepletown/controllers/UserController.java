package fr.dawan.meepletown.controllers;

import java.util.Set;

import javax.ws.rs.PathParam;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
<<<<<<< HEAD
=======
import org.springframework.web.bind.annotation.PathVariable;
>>>>>>> 6310b7271b1bc93bcac64f7561f35df8fe5b1086
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import fr.dawan.meepletown.beans.User;
import fr.dawan.meepletown.dao.GenericDao;
import fr.dawan.meepletown.dao.userDao;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/user")
public class UserController {
	
	@Autowired
	GenericDao<User> dao; 
	@Autowired
	userDao userDao;
	
	
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
		System.out.println(user);
		dao.create(user);
	}
	
	@DeleteMapping("/delete/{iduser}")
	public void delete(@PathVariable( value = "idUser") long id) {
		dao.delete(User.class, id);
		
	}
	
	@RequestMapping("/connect")
	public User findByEmail(@RequestParam("email") String email, @RequestParam("password") String password) {
		System.out.println(email);
		System.out.println(password);
		return userDao.findByEmailAndPassword(email, password);
	}
	

}
