package fr.dawan.meepletown.beans;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.ManyToMany;
import javax.swing.ImageIcon;


@Entity
public class User extends DbObject{

  //Attributs Initialisation
	private int idUser;
	private String pseudo;
	private String mail;
	private String password;
	private int numDept;
	private String city;
	private ImageIcon avatar;
	
	@ManyToMany
	private List<Game> listGame;
	
	@ManyToMany(mappedBy= "membersList")
	private List<Groupe> listGroup;
	
	@ManyToMany(mappedBy= "playersList")
	private List<Session> listSession;
	
	
	//Create constructor
	public User(int idUser, String pseudo, String mail, String password, int numDept, String city, ImageIcon avatar,
			List listGroup, List listGame) {
		this.idUser = idUser;
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
	
	
	
	public List<Session> getListSession() {
		return listSession;
	}


	public void setListSession(List<Session> listSession) {
		this.listSession = listSession;
	}


	//Getters
	public int getIdUser() {
		return idUser;
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

	public List getListGroup() {
		return listGroup;
	}

	public List getListGame() {
		return listGame;
	}

	//Seeters
	public void setIdUser(int idUser) {
		this.idUser = idUser;
	}

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

	public void setListGroup(List listGroup) {
		this.listGroup = listGroup;
	}

	public void setListGame(List listGame) {
		this.listGame = listGame;
	}


	@Override
	public String toString() {
		return "User [idUser=" + idUser + ", pseudo=" + pseudo + ", mail=" + mail + ", password=" + password
				+ ", numDept=" + numDept + ", city=" + city + ", avatar=" + avatar + ", listGame=" + listGame
				+ ", listGroup=" + listGroup + ", listSession=" + listSession + "]";
	}
	
	
  
}
