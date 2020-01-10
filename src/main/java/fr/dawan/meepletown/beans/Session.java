package fr.dawan.meepletown.beans;

import java.util.Date;
import java.util.HashSet;
import java.util.Set;

import javax.persistence.Entity;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;

import com.fasterxml.jackson.annotation.JsonIgnore;

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
	
	@ManyToMany
	@JsonIgnore
	private Set<User> playersList;
	
	@ManyToMany
	@JsonIgnore
	private Set<Game> gamesListSession;
	
	@ManyToOne
	@JsonIgnore
	private User author;
	
	public Session() {}
	public Session(String title) {
		this.setTitle(title);
	}
	
	
	public Set<Game> getGamesListSession() {
		return gamesListSession;
	}
	public void setGamesListSession(Set<Game> gamesListSession) {
		this.gamesListSession = gamesListSession;
	}
	public User getAuthor() {
		return author;
	}
	public void setAuthor(User author) {
		this.author = author;
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
	
	public boolean getIsPrivate() {
		return isPrivate;
	}
	public void setPrivate(boolean isPrivate) {
		this.isPrivate = isPrivate;
	}
	@Override
	public String toString() {
		return "Session [title=" + title + ", place=" + place + ", sessionType=" + sessionType + ", description="
				+ description + ", nbMaxPlayers=" + nbMaxPlayers + ", nbMinPlayers=" + nbMinPlayers + ", startDate="
				+ startDate + ", endDate=" + endDate + ", isPrivate=" + isPrivate + "]";
	}
	

	
	
	
}
