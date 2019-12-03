package fr.dawan.meepletown.beans;

import java.io.Serializable;

import javax.persistence.Entity;

import fr.dawan.meepletown.enums.GameType;

@Entity
public class Game extends DbObject implements Serializable{
	
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	private String name;
	private GameType type;
	private String description;
	private int nbrMinJoueur;
	private int nbrMaxJoueur;
	
	
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
