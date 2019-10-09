package dawan.meepleTown;

import dawan.meepleTown.group.*;

public class GroupPlay extends Play{
	private Groupe groupe;
	
	public GroupPlay() {
		super();
	}
	public GroupPlay(String title, Groupe groupe) {
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