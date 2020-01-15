package fr.dawan.meepletown.beans;

import java.util.Set;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;
import javax.swing.ImageIcon;

import com.fasterxml.jackson.annotation.JsonIgnore;


@Entity
public class User extends DbObject{

  //Attributs Initialisation
	private String pseudo;
	private String mail;
	private String password;
	private int numDept;
	private String city;
	private ImageIcon avatar;
	
	@ManyToMany()
	@JsonIgnore
	private Set<Game> listGame; 
	
	@ManyToMany(mappedBy= "membersList", fetch = FetchType.LAZY)
	@JsonIgnore
	private Set<Groupe> listGroup;
	
	@ManyToMany(mappedBy= "playersList", fetch = FetchType.LAZY)
	@JsonIgnore
	private Set<Session> listSession;
	
	@OneToMany(mappedBy= "author", fetch = FetchType.LAZY)
	@JsonIgnore
	private Set<Session> session;
	
	//Create constructor
	public User( String pseudo, String mail, String password, int numDept, String city, ImageIcon avatar,
			Set<Groupe> listGroup, Set<Game> listGame) {
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
	
	
	
	public Set<Session> getListSession() {
		return listSession;
	}


	public void setListSession(Set<Session> listSession) {
		this.listSession = listSession;
	}


	//Getters
	

	public Set<Session> getSession() {
		return session;
	}


	public void setSession(Set<Session> session) {
		this.session = session;
	}


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

	public Set<Groupe> getListGroup() {
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

	public void setListGroup(Set<Groupe> listGroup) {
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
