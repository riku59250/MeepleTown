package fr.dawan.meepletown.beans;

import java.util.Date;
import java.util.List;
import java.util.Set;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.ManyToMany;

import fr.dawan.meepletown.enums.SessionType;

@Entity
public class Session extends DbObject {

	private String title;
	private String place;
	private SessionType sessionType;
	private String description;
	private int nbMaxPlayers;
	private int nbMinPlayers;
	private Date startDate;
	private Date endDate;
	private boolean isPrivate;
	
	@ManyToMany( fetch =  FetchType.EAGER)
	private Set<User> playersList;
	@ManyToMany( fetch =  FetchType.EAGER)
	private Set<Game> gamesListSession;
	
	
	public Session() {}
	public Session(String title) {
		this.setTitle(title);
	}
	
	
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getPlace() {
		return place;
	}
	public void setPlace(String place) {
		this.place = place;
	}
	public SessionType getSessionType() {
		return sessionType;
	}
	public void setSessionType(SessionType sessionType) {
		this.sessionType = sessionType;
	}
	public int getNbMaxPlayers() {
		return nbMaxPlayers;
	}
	public void setNbMaxPlayers(int nbMaxPlayers) {
		this.nbMaxPlayers = nbMaxPlayers;
	}
	public int getNbMinPlayers() {
		return nbMinPlayers;
	}
	public void setNbMinPlayers(int nbMinPlayers) {
		this.nbMinPlayers = nbMinPlayers;
	}
	public Set<User> getPlayersList() {
		return playersList;
	}
	public void setPlayersList(Set<User> playersList) {
		this.playersList = playersList;
	}
	public Set<Game> getGamesList() {
		return gamesListSession;
	}
	public void setGamesList(Set<Game> gamesList) {
		this.gamesListSession = gamesList;
	}
	public Date getStartDate() {
		return startDate;
	}
	public void setStartDate(Date startDate) {
		this.startDate = startDate;
	}
	public Date getEndDate() {
		return endDate;
	}
	public void setEndDate(Date endDate) {
		this.endDate = endDate;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	
	public boolean isPrivate() {
		return isPrivate;
	}
	public void setPrivate(boolean isPrivate) {
		this.isPrivate = isPrivate;
	}
	@Override
	public String toString() {
		return "Session [title=" + title + ", place=" + place + ", sessionType=" + sessionType + ", nbMaxPlayers="
				+ nbMaxPlayers + ", startDate=" + startDate + ", endDate=" + endDate + ", playersList=" + playersList
				+ ", gamesListSession=" + gamesListSession + "]";
	}
	
	
}
