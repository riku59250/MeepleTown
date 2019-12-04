package fr.dawan.meepletown.beans;

import java.io.Serializable;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.ManyToMany;

import fr.dawan.meepletown.enums.GameType;

@Entity
public class Game extends DbObject{
	
	private String name;
	private GameType type;
	private String description;
	private int nbrMinJoueur;
	private int nbrMaxJoueur;
	
	@ManyToMany(mappedBy= "gamesList")
	private List<Groupe> listGroup;
	
	@ManyToMany(mappedBy= "gamesListSession")
	private List<Session> listSession;
	
	@ManyToMany(mappedBy= "listGame")
	private List<User> listUsers;
	
	
	public Game(int id, String name, GameType type, String description, int nbrMinJoueur, int nbrMaxJoueur) {
		super();
		this.name = name;
		this.type = type;
		this.description = description;
		this.nbrMinJoueur = nbrMinJoueur;
		this.nbrMaxJoueur = nbrMaxJoueur;
	}
	public Game() {
		super();
	}
	
	
	
	public List<User> getListUsers() {
		return listUsers;
	}
	public void setListUsers(List<User> listUsers) {
		this.listUsers = listUsers;
	}
	public List<Session> getListSession() {
		return listSession;
	}
	public void setListSession(List<Session> listSession) {
		this.listSession = listSession;
	}
	public List<Groupe> getListGroup() {
		return listGroup;
	}
	public void setListGroup(List<Groupe> listGroup) {
		this.listGroup = listGroup;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public GameType getType() {
		return type;
	}
	public void setType(GameType type) {
		this.type = type;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public int getNbrMinJoueur() {
		return nbrMinJoueur;
	}
	public void setNbrMinJoueur(int nbrMinJoueur) {
		this.nbrMinJoueur = nbrMinJoueur;
	}
	public int getNbrMaxJoueur() {
		return nbrMaxJoueur;
	}
	public void setNbrMaxJoueur(int nbrMaxJoueur) {
		this.nbrMaxJoueur = nbrMaxJoueur;
	}
	@Override
	public String toString() {
		return "Game [name=" + name + ", type=" + type + ", description=" + description + ", nbrMinJoueur="
				+ nbrMinJoueur + ", nbrMaxJoueur=" + nbrMaxJoueur + "]";
	}
	
	
}
