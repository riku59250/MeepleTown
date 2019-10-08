package dawan.meepleTown;

import java.util.Date;
import java.util.List;

public class Play {

	private String title;
	private String place;
	private SessionType sessionType;
	private int nbMaxPlayers;
	private List<User> playersList;
	private List<Game> gamesList;
	private Date startDate;
	private Date endDate;
	
	public Play() {}
	public Play(String title) {
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
	public List<User> getPlayersList() {
		return playersList;
	}
	public void setPlayersList(List<User> playersList) {
		this.playersList = playersList;
	}
	public List<Game> getGamesList() {
		return gamesList;
	}
	public void setGamesList(List<Game> gamesList) {
		this.gamesList = gamesList;
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
	
	
}
