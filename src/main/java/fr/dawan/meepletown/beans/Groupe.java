package fr.dawan.meepletown.beans; 

import java.util.ArrayList;
import java.util.List;
import java.util.Set;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.ManyToMany;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;

import fr.dawan.meepletown.enums.GroupType;

@Entity
public class Groupe extends DbObject{

	private String name;
	private String nameDept;
	private String city;
	private GroupType type;
	private String description = "";
	private String avatar = null;
	
	@ManyToMany()
	@JsonIgnore
	private Set<User> membersList;
	
	@ManyToMany()
	@JsonIgnore
	private Set<Game> gamesList;
	
	public Groupe() {}
	
	public Groupe(int id, String name, GroupType type, String description, String avatar) {
		super();
		this.name = name;
		this.type = type;
		this.description = description;
		this.avatar = avatar;
	}

	public String getNameDept() {
		return nameDept;
	}

	public void setNameDept(String nameDept) {
		this.nameDept = nameDept;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
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
		return "Groupe [name=" + name + ", nameDept=" + nameDept + ", city=" + city + ", type=" + type
				+ ", description=" + description + ", avatar=" + avatar + "]";
	}


	

	
	
	
	
}
