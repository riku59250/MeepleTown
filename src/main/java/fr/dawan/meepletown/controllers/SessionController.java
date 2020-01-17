package fr.dawan.meepletown.controllers;

import java.util.HashMap;
import java.util.List;
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

import fr.dawan.meepletown.beans.Game;
import fr.dawan.meepletown.beans.Session;
import fr.dawan.meepletown.beans.User;
import fr.dawan.meepletown.dao.GenericDao;
import fr.dawan.meepletown.dao.SessionDao;
import fr.dawan.meepletown.json.SessionJson;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/session")
public class SessionController {

	@Autowired
	GenericDao<Session> dao;
	@Autowired
	SessionDao sessioDao;
	

	@GetMapping("/")
	public Set<SessionJson> findAll(){
//		Set <Session> listSession = new HashSet<Session>();
//		listSession.addAll(dao.findAll(Session.class));
//		System.out.println("list:"+listSession);
//		return listSession;
		return sessioDao.findAll();
	}
	
	@GetMapping("/{id}")
	public SessionJson findBy(@PathVariable(value = "id")  long id) {
		System.out.println(sessioDao.findById(id));
		return sessioDao.findById(id);
	}
	
	
//	//recherche par lieu
//	@GetMapping("/{postalCode}")
//	public Session findBy(@PathParam(value = "postalCode") long postalCode) {
//		System.out.println(postalCode);
//		return dao.findById(Session.class, postalCode);
//	}
	
	@GetMapping("/user/{id}")
	public Set<SessionJson> findByUser(@PathVariable(value = "id")  long id) {
		System.out.println("ici");
		return sessioDao.findAllUser(id);
	}
	
	@PostMapping("/")
	public void createOrUpdate(@RequestBody Session session) {
		dao.create(session);
	}
	
	@PostMapping("/{idUser}")
	public void createOrUpdate(@PathVariable(value="idUser") long idUser, @RequestBody Session session) {
		sessioDao.createWithAuthor(session, idUser);
	}
	
	@PostMapping("/withgames/{idUser}")
	public void createWithGames(@PathVariable(value="idUser") long idUser, @RequestBody SessionJson session) {
		System.out.println("--------------");
		System.out.println(session.getGamesListSession());
		sessioDao.createWithAuthorAndGames(session, idUser);
	}

	@DeleteMapping("/{id}")
	public void delete(@PathVariable(value = "id") long id) {
		dao.delete(Session.class, id);
	}
	
	@PutMapping("/adduser/{id}")
	public void addUser (@PathVariable(value = "id")long id, @RequestBody User u) {
		sessioDao.UpdateSession(id, u);
	}
	
	@GetMapping("/getusers/{id}")
	public Set<User> getUsers (@PathVariable(value = "id")long id) {
		return sessioDao.getPlayerList(id);
	}
	
	@DeleteMapping("/deleteuser/{idSession}/{idUser}")
	public void deleteUser (@PathVariable(value = "idSession")long idSession, @PathVariable(value = "idUser")long idUser) {
		sessioDao.deletePlayer(idSession, idUser);
	}
	
//	@GetMapping("/getauthor/{id}")
//	public User getAuthor(@PathVariable(value = "id") long id) {
//		return sessioDao.getAuthor(id);
//	}
}
