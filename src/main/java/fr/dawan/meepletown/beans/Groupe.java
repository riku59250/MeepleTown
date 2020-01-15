package fr.dawan.meepletown.beans; 

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.ManyToMany;

import com.fasterxml.jackson.annotation.JsonIgnore;

import fr.dawan.meepletown.enums.GroupType;

@Entity
public class Groupe extends DbObject{
	
	private String name;
	private GroupType type;
	private String description = "";
	private String avatar = null;
	
	@ManyToMany
	@JsonIgnore
	private Set<User> membersList = new HashSet<User>();
	
	@ManyToMany
	@JsonIgnore
	private Set<Game> gamesList = new HashSet<Game>();
	
	public Groupe() {}
	
	public Groupe(int id, String name, GroupType type, String description, String avatar) {
		super();
		this.name = name;
		this.type = type;
		this.description = description;
		this.avatar = avatar;
		
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

	public Set<User> getMembersList() {
		return membersList;
	}

	public void setMembersList(Set<User> membersList) {
		this.membersList = membersList;
	}

	public Set<Game> getGamesList() {
		return gamesList;
	}

	public void setGamesList(Set<Game> gamesList) {
		this.gamesList = gamesList;
	}

	@Override
	public String toString() {
		return "Groupe [name=" + name + ", type=" + type + ", description=" + description + ", avatar=" + avatar + "]";
	}



	
}
