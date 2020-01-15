package fr.dawan.meepletown.controllers;

import java.util.HashSet;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import fr.dawan.meepletown.beans.Session;
import fr.dawan.meepletown.beans.User;
import fr.dawan.meepletown.dao.GenericDao;
import fr.dawan.meepletown.dao.SessionDao;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/session")
public class SessionController {

	@Autowired
	GenericDao<Session> dao;
	@Autowired
	SessionDao sessioDao;
	

	@GetMapping("/")
	public Set<Session> findAll(){
		Set <Session> listSession = new HashSet<Session>();
		listSession.addAll(dao.findAll(Session.class));
		System.out.println("list:"+listSession);
		return listSession;
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
	
	@PutMapping("/adduser/{id}")
	public void addUser (@PathVariable(value = "id")long id, @RequestBody User u) {
		sessioDao.UpdateSession(id, u);
		
	}
}
