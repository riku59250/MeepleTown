package fr.dawan.meepletown.beans; 

import java.util.ArrayList;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.ManyToMany;

import fr.dawan.meepletown.enums.GroupType;
import javafx.scene.image.Image;

@Entity
public class Groupe extends DbObject{
	
	private String name;
	private GroupType type;
	private String description = "";
	private String avatar = null;
	
	@ManyToMany
	private List<User> membersList;
	@ManyToMany
	private List<Game> gamesList;
	
	public Groupe() {}
	
	public Groupe(int id, String name, GroupType type, String description, String avatar) {
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

	public String getAvatar() {
		return avatar;
	}

	public void setAvatar(String avatar) {
		this.avatar = avatar;
	}

	@Override
	public String toString() {
		return "Groupe [name=" + name + ", type=" + type + ", description=" + description + ", avatar=" + avatar
				+ ", membersList=" + membersList + ", gamesList=" + gamesList + "]";
	}
	
	
	
}
