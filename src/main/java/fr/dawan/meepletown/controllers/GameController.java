package fr.dawan.meepletown.controllers;

import java.util.Set;

import javax.websocket.server.PathParam;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import fr.dawan.meepletown.beans.Game;
import fr.dawan.meepletown.dao.GenericDao;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/game")
public class GameController {
	@Autowired
	GenericDao<Game> dao;

	@GetMapping("/{id}")
	public Game findById(@PathVariable(value = "id") long id) {
		return dao.findById(Game.class, id);
	}
	
	@GetMapping("/")
	public Set<Game> findAll(){
		return (Set<Game>) dao.findAll(Game.class);
	}
	
	@PostMapping("/")
	public void createOrUpdate(@RequestBody Game game) {
		dao.create(game);
	}
	
	@DeleteMapping("/delete/{id}")
	public void delete(@PathVariable(value = "id") long id) {
		dao.delete(Game.class, id);
	}
	
	

}
