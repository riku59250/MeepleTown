package fr.dawan.meepletown;


public enum SessionType {
	JDP("JEU DE PLATEAU"), JDR ("JEU DE ROLE"), FIG ("JEU DE FIGURINE"), GN ("GN");
	
	private String name = "";
	   
	  //Constructeur
	  SessionType(String name){
	    this.name = name;
	  }
	   
	  @Override
	  public String toString(){
	    return name;
	  }
}
