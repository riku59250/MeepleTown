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

import fr.dawan.meepletown.beans.GroupSession;
import fr.dawan.meepletown.dao.GenericDao;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/groupsession")
public class GroupSessionController {
	
	@Autowired
	GenericDao<GroupSession> dao;
	
	@RequestMapping("/{id}")
		public GroupSession findBy(@PathVariable(value = "id") long id) {
		return dao.findById(GroupSession.class, id);
	}

	@GetMapping("/")
	public Set<GroupSession> findAll(){
		return (Set<GroupSession>) dao.findAll(GroupSession.class);
	}
	
	@PostMapping("/")
	public void createOrUpdate(@RequestBody GroupSession GroupSession) {
		dao.create(GroupSession);
	}
	
	@DeleteMapping("/delete/{id}")
	public void delete(@PathVariable( value = "id") long id) {
		 dao.delete(GroupSession.class, id);
	}
}
