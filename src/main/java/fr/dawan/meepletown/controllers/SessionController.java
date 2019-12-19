package fr.dawan.meepletown.controllers;

import java.util.Set;

import javax.ws.rs.HeaderParam;
import javax.ws.rs.PathParam;
import javax.ws.rs.core.Response;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import fr.dawan.meepletown.beans.Session;
import fr.dawan.meepletown.dao.GenericDao;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/session")
public class SessionController {

	@Autowired
	GenericDao<Session> dao;
	

	@GetMapping("/")
	public Set<Session> findAll(){
		System.out.println(dao.findAll(Session.class));
		return (Set<Session>) dao.findAll(Session.class);
	}
	
	@GetMapping("/{id}")
	public Session findBy(@PathVariable(value = "id")  long id) {
		return dao.findById(Session.class, id);
	}
	
	
//	//recherche par lieu
//	@GetMapping("/{postalCode}")
//	public Session findBy(@PathParam(value = "postalCode") long postalCode) {
//		System.out.println(postalCode);
//		return dao.findById(Session.class, postalCode);
//	}
	
	
	
	@PostMapping("/")
	public void createOrUpdate(@RequestBody Session session) {
		System.out.println(session);
		dao.create(session);
	}
	
	@DeleteMapping("/{id}")
	public void delete(@PathVariable(value = "id") long id) {
		dao.delete(Session.class, id);
	}
	
}
