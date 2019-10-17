package fr.dawan.meepletown;



public class GroupSession extends Session{
	private Groupe groupe;
	
	public GroupSession() {
		super();
	}
	public GroupSession(String title, Groupe groupe) {
		super(title);
		this.groupe = groupe;
	}
	public Groupe getGroupe() {
		return groupe;
	}
	public void setGroupe(Groupe groupe) {
		this.groupe = groupe;
	}

}
