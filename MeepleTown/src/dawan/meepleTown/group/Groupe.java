package dawan.meepleTown.group; 

import java.util.*;
import dawan.meepleTown.*;
import javafx.scene.image.Image;

public class Groupe {

	private int id;
	private String name;
	private Type type;
	
	private List<User> membersList = null;
	private List<Jeux> gamesList = null;
	
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
	
}
