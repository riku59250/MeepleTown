package dawan.meepleTown;

public class Game {
	private int id;
	private String name;
	private TypesGames type;
	private String description;
	private int nbrMinJoueur;
	private int nbrMaxJoueur;
	
	
	public Game(int id, String name, TypesGames type, String description, int nbrMinJoueur, int nbrMaxJoueur) {
		this.id = id;
		this.name = name;
		this.type = type;
		this.description = description;
		this.nbrMinJoueur = nbrMinJoueur;
		this.nbrMaxJoueur = nbrMaxJoueur;
	}
	public Game() {
		
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
	public TypesGames getType() {
		return type;
	}
	public void setType(TypesGames type) {
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
	
}
