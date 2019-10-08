package dawan.meepleTown;


public enum SessionType {
	JDP("JEU DE PLATEAU"), JDR ("JEU DE ROLE"), FIG ("JEU DE FIGURINE"), GN ("GN");
	
	private String name = "";
	   
	  //Constructeur
	  SessionType(String name){
	    this.name = name;
	  }
	   
	  public String toString(){
	    return name;
	  }
}
