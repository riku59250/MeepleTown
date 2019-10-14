package dawan.meepletown.group; 

import java.util.*;

import dawan.meepletown.*;
import javafx.scene.image.Image;

public class Groupe {

	private int id;
	private String name;
	private Type type;
	
	private List<User> membersList = null;
	private List<Game> gamesList = null;
	
	private String description = "";
	
	private Image avatar = null;
	
	public Groupe(int id, String name, Type type, String description, Image avatar) {
		this.id = id;
		this.name = name;
		this.type = type;
		this.description = description;
		this.avatar = avatar;
		
		this.membersList = new ArrayList<>();
		
		this.gamesList = new ArrayList<>();
		
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public Type getType() {
		return type;
	}

	public void setType(Type type) {
		this.type = type;
	}

	public List<User> getMembersList() {
		return membersList;
	}

	public void setMembersList(List<User> membersList) {
		this.membersList = membersList;
	}

	public List<Game> getGamesList() {
		return gamesList;
	}

	public void setGamesList(List<Game> gamesList) {
		this.gamesList = gamesList;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public Image getAvatar() {
		return avatar;
	}

	public void setAvatar(Image avatar) {
		this.avatar = avatar;
	}
	
	
	
}
