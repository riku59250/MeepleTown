package fr.dawan.meepletown.controllers;

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

import fr.dawan.meepletown.beans.Groupe;
import fr.dawan.meepletown.beans.User;
import fr.dawan.meepletown.dao.GenericDao;
import fr.dawan.meepletown.dao.GroupeDao;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/groupe")
public class GroupController {

	@Autowired
	GenericDao<Groupe> dao;
	@Autowired
	GroupeDao groupeDao;

	@RequestMapping("/{idGroupe}")
	public fr.dawan.meepletown.json.Groupe findBy(@PathVariable(value = "idGroupe") long id) {
		
		return groupeDao.findById(id);
	}

	@GetMapping("/")
	public Set<Groupe> findAll() {
		return (Set<Groupe>) dao.findAll(Groupe.class);
	}

	@PostMapping("/{iduser}")
	public long createOrUpdate(@RequestBody Groupe groupe, @PathVariable(value = "iduser") long id) {
<<<<<<< HEAD

=======
		
>>>>>>> 0d8c5bc9709302462c256d652cb719c5586d9e12
		groupeDao.createWithAuthor(groupe, id);
		return groupe.getId();
	}

	@DeleteMapping("/delete/{idGroupe}")
	public void delete(@PathVariable(value = "idGroupe") long id) {
		dao.delete(Groupe.class, id);
	}
	@PutMapping("/")
	public void update (@RequestBody fr.dawan.meepletown.json.Groupe groupe ) {
		System.out.println(groupe);
		System.out.println(groupe.getMembersList());
		groupeDao.updateGroupe(groupe);
	}

}
