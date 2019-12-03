package fr.dawan.meepletown.beans; 

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

import fr.dawan.meepletown.enums.GroupType;
import javafx.scene.image.Image;

public class Groupe extends DbObject implements Serializable{
	
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	private String name;
	private GroupType type;
	
	private List<User> membersList = null;
	private List<Game> gamesList = null;
	
	private String description = "";
	
	private Image avatar = null;
	
	public Groupe(int id, String name, GroupType type, String description, Image avatar) {
		super();
		this.name = name;
		this.type = type;
		this.description = description;
		this.avatar = avatar;
		
		this.membersList = new ArrayList<>();
		
		this.gamesList = new ArrayList<>();
		
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public GroupType getType() {
		return type;
	}

	public void setType(GroupType type) {
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
