package fr.dawan.meepletown.controllers;

import java.util.Set;

import javax.ws.rs.PathParam;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import fr.dawan.meepletown.beans.Session;
import fr.dawan.meepletown.dao.GenericDao;

@RestController
@RequestMapping("/session")
public class SessionController {

	@Autowired
	GenericDao<Session> dao;
	
	//recherche par lieu
	@GetMapping("/{postalCode}")
	public Session findBy(@PathParam(value = "postalCode") long postalCode) {
		System.out.println(postalCode);
		return dao.findById(Session.class, postalCode);
	}
	
	
	public Set<Session> findAll(){
		return (Set<Session>) dao.findAll(Session.class);
	}
	
	@PostMapping("/")
	public void createOrUpdate(@RequestBody Session session) {
		dao.create(session);
	}
	
	@DeleteMapping("/delete/{postalCode}")
	public void delete(@PathParam(value = "postalCode") long postalCode) {
		dao.delete(Session.class, postalCode);
	}
	
}
