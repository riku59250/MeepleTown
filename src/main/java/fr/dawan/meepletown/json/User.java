package fr.dawan.meepletown.json;

import java.util.Set;

import javax.swing.ImageIcon;

import com.fasterxml.jackson.annotation.JsonIgnore;

import fr.dawan.meepletown.beans.DbObject;
import fr.dawan.meepletown.beans.Game;
import fr.dawan.meepletown.beans.Session;

public class User extends DbObject{

  //Attributs Initialisation
	private String pseudo;
	private String mail;
	@JsonIgnore
	private String password;
	private int numDept;
	private String city;
	private ImageIcon avatar;
	

	private Set<Game> listGame; 
	

	private Set<fr.dawan.meepletown.beans.Groupe> listGroup;
	

	private Set<Session> listSession;
	

	private Set<Session> session;
	
	//Create constructor
	public User( String pseudo, String mail, String password, int numDept, String city, ImageIcon avatar,
			Set<fr.dawan.meepletown.beans.Groupe> listGroup, Set<Game> listGame) {
		this.pseudo = pseudo;
		this.mail = mail;
		this.password = password;
		this.numDept = numDept;
		this.city = city;
		this.avatar = avatar;
		this.listGroup = listGroup;
		this.listGame = listGame;
	}
	
	
	public User () {
		super();
		
		
	}
	
	



	public Set<Session> getSession() {
		return session;
	}


	public void setSession(Set<Session> session) {
		this.session = session;
	}


	public Set<Session> getListSession() {
		return listSession;
	}


	public void setListSession(Set<Session> listSession) {
		this.listSession = listSession;
	}


	//Getters
	

	public String getPseudo() {
		return pseudo;
	}

	public String getMail() {
		return mail;
	}

	public String getPassword() {
		return password;
	}

	public int getNumDept() {
		return numDept;
	}

	public String getCity() {
		return city;
	}

	public ImageIcon getAvatar() {
		return avatar;
	}

	public Set<fr.dawan.meepletown.beans.Groupe> getListGroup() {
		return listGroup;
	}

	public Set<Game> getListGame() {
		return listGame;
	}

	//Seeters

	public void setPseudo(String pseudo) {
		this.pseudo = pseudo;
	}

	public void setMail(String mail) {
		this.mail = mail;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public void setNumDept(int numDept) {
		this.numDept = numDept;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public void setAvatar(ImageIcon avatar) {
		this.avatar = avatar;
	}

	public void setListGroup(Set<fr.dawan.meepletown.beans.Groupe> listGroup) {
		this.listGroup = listGroup;
	}

	public void setListGame(Set<Game> listGame) {
		this.listGame = listGame;
	}


	@Override
	public String toString() {
		return "User [pseudo=" + pseudo + ", mail=" + mail + ", password=" + password + ", numDept=" + numDept
				+ ", city=" + city + ", avatar=" + avatar + "]";
	}




	
	
  
}
