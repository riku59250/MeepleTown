package fr.dawan.meepletown.json;

import java.util.Date;
import java.util.HashSet;
import java.util.Set;

import fr.dawan.meepletown.beans.DbObject;
import fr.dawan.meepletown.beans.Game;
import fr.dawan.meepletown.beans.User;
import fr.dawan.meepletown.enums.SessionType;


public class SessionJson extends DbObject {

	private String title;
	private String place;
	private SessionType sessionType;
	private String description;
	private int nbMaxPlayers;
	private int nbMinPlayers;
	private Date startDate;
	private Date endDate;
	private boolean isPrivate;
	

	private Set<User> playersList = new HashSet<User>();

	private Set<Game> gamesListSession;
	

	private User author;
	
	public SessionJson(String title, String place, SessionType sessionType, String description, int nbMaxPlayers,
			int nbMinPlayers, Date startDate, Date endDate, boolean isPrivate, Set<User> playersList,
			Set<Game> gamesListSession, User author) {
		super();
		this.title = title;
		this.place = place;
		this.sessionType = sessionType;
		this.description = description;
		this.nbMaxPlayers = nbMaxPlayers;
		this.nbMinPlayers = nbMinPlayers;
		this.startDate = startDate;
		this.endDate = endDate;
		this.isPrivate = isPrivate;
		this.playersList = playersList;
		this.gamesListSession = gamesListSession;
		this.author = author;
	}
	public SessionJson() {}
	public SessionJson(String title) {
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
