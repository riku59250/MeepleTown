package fr.dawan.meepletown.controllers;

import java.util.Set;

import javax.ws.rs.PathParam;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import fr.dawan.meepletown.beans.GroupSession;
import fr.dawan.meepletown.dao.GenericDao;

@RestController
@RequestMapping("GroupSession")
public class GroupSessionController {
	
	@Autowired
	GenericDao<GroupSession> dao;
	
	//recherche session de groupe par code postal
	@RequestMapping("/{codePostal")
		public GroupSession findBy(@PathParam(value = "codePostal") long codePostal) {
		System.out.println(codePostal);
		return dao.findById(GroupSession.class, codePostal);
	}

	public Set<GroupSession> findAll(){
		return (Set<GroupSession>) dao.findAll(GroupSession.class);
	}
	
	@PostMapping("/")
	public void createOrUpdate(@RequestBody GroupSession GroupSession) {
		dao.create(GroupSession);
	}
	
	@DeleteMapping("/delete/{codePostal}")
	public void delete(@PathParam( value = "codePostal") long codePostal) {
		 dao.delete(GroupSession.class, codePostal);
	}
}
