package fr.dawan.meepletown.beans;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.MappedSuperclass;

@MappedSuperclass
public abstract class DbObject {
	
	@Id @GeneratedValue(strategy = GenerationType.IDENTITY) 
	private long id;

	public long getId() {
		return id;
	}

}
