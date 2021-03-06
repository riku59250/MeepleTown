package fr.dawan.meepletown.dao;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import javax.persistence.EntityGraph;
import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.EntityTransaction;
import javax.persistence.Persistence;
import javax.persistence.TypedQuery;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;

import fr.dawan.meepletown.beans.Game;
import fr.dawan.meepletown.beans.Groupe;
import fr.dawan.meepletown.beans.Session;
import fr.dawan.meepletown.beans.User;
import fr.dawan.meepletown.json.SessionJson;

public class SessionDao {

	public Set<SessionJson> findAll() {
		Set<SessionJson> resultat = null;

		EntityManagerFactory factory = Persistence.createEntityManagerFactory("meepletown");
		EntityManager em = factory.createEntityManager();

		EntityGraph<Session> graph = em.createEntityGraph(Session.class);
		graph.addSubgraph("playersList");
		graph.addSubgraph("gamesListSession");
		graph.addSubgraph("author");
		// on crée la requête
		TypedQuery<Session> query = em.createQuery("SELECT entity FROM Session entity ", Session.class);
		query.setHint("javax.persistence.loadgraph", graph);
		
		// on exécute la requête et on récupère le résultat
		List<Session> list = query.getResultList();
		resultat = new HashSet<SessionJson>();
		for (Session session : list) {
			SessionJson s = new SessionJson(session.getTitle(), session.getPlace(), session.getSessionType(), 
					session.getDescription(), session.getNbMaxPlayers(), session.getNbMinPlayers(), session.getStartDate(), 
					session.getEndDate(), session.getIsPrivate(), session.getPlayersList(), session.getGamesListSession(), 
					session.getAuthor());

			s.setId(session.getId());
			resultat.add(s);
		}
	
		em.close();
		factory.close();
		return resultat;
	}
	
	public void updateSession(Game game, long id) {	
		if (game.getId() > 0) {
			EntityManagerFactory factory = Persistence.createEntityManagerFactory("meepletown");
			EntityManager entityManager = factory.createEntityManager();
			EntityTransaction transaction = entityManager.getTransaction();

			try {
				// début de la transaction
				transaction.begin();
				Session session = null;
				TypedQuery<Session> query = entityManager.createQuery(
						"select session from Session session where session.id = :id ", Session.class);

				query.setParameter("id", id);
				// on paramètre et on exécute la requête, et on récupère le résultat
				session = query.getSingleResult();
				// On met à jour la formation
				session.getGamesListSession().add(game);
				entityManager.merge(session);

				// on commit tout ce qui s'est fait dans la transaction
				transaction.commit();
			} catch (Exception ex) {
				// en cas d'erreur, on effectue un rollback
				transaction.rollback();
				ex.printStackTrace();
			} finally {
				entityManager.close();
				factory.close();
			}

		}
		
	}
	public SessionJson findById(long id) {
		SessionJson resultat = null;

		EntityManagerFactory factory = Persistence.createEntityManagerFactory("meepletown");
		EntityManager em = factory.createEntityManager();

		EntityGraph<Session> graph = em.createEntityGraph(Session.class);
		graph.addSubgraph("playersList");
		graph.addSubgraph("gamesListSession");
		graph.addSubgraph("author");
		// on crée la requête
		TypedQuery<Session> query = em.createQuery(
				"select session from Session session where session.id = :id ", Session.class);
		query.setParameter("id", id);
		query.setHint("javax.persistence.loadgraph", graph);
		
		// on exécute la requête et on récupère le résultat
		Session session = query.getSingleResult();
		
		resultat = new SessionJson(session.getTitle(), session.getPlace(), session.getSessionType(), session.getDescription(), 
				session.getNbMaxPlayers(), session.getNbMinPlayers(), session.getStartDate(), session.getEndDate(), session.getIsPrivate(), 
				session.getPlayersList(), session.getGamesListSession(), session.getAuthor());
		resultat.setId(session.getId());

		em.close();
		factory.close();
		return resultat;
	}
	
	public void createWithAuthor(Session s, long idUser) {
		if (s.getId() == 0) {
			EntityManagerFactory factory = Persistence.createEntityManagerFactory("meepletown");
			EntityManager entityManager = factory.createEntityManager();
			EntityTransaction transaction = entityManager.getTransaction();

			try {
				// début de la transaction
				transaction.begin();
				User u = entityManager.find(User.class, idUser);
				s.setAuthor(u);
				s.getPlayersList().add(u);
				// On insère la formation dans la BDD
				entityManager.persist(s);

				// on commit tout ce qui s'est fait dans la transaction
				transaction.commit();
			} catch (Exception ex) {
				// en cas d'erreur, on effectue un rollback
				transaction.rollback();
				ex.printStackTrace();
			} finally {
				entityManager.close();
				factory.close();
			}
		}
	}
	



	public long createWithAuthorAndGames(SessionJson session, long idUser) {
		if (session.getId() == 0) {
			EntityManagerFactory factory = Persistence.createEntityManagerFactory("meepletown");
			EntityManager entityManager = factory.createEntityManager();
			EntityTransaction transaction = entityManager.getTransaction();

			Session newSession = new Session(session.getTitle(), session.getPlace(), session.getSessionType(), session.getDescription(),
					session.getNbMaxPlayers(), session.getNbMinPlayers(), session.getStartDate(), session.getEndDate(),
					session.getIsPrivate(), session.getAuthor());

			try {
				// début de la transaction
				transaction.begin();
				User u = entityManager.find(User.class, idUser);
				newSession.setAuthor(u);
				newSession.getPlayersList().add(u);
				newSession.setGamesListSession(session.getGamesListSession());
				// On insère la formation dans la BDD
				entityManager.persist(newSession);

				// on commit tout ce qui s'est fait dans la transaction
				transaction.commit();
			} catch (Exception ex) {
				// en cas d'erreur, on effectue un rollback
				transaction.rollback();
				ex.printStackTrace();
			} finally {
				entityManager.close();
				factory.close();
			}
			return newSession.getId();
		}
		return 0;
	}

	public void UpdateSession(long id, User u) {
		if (u.getId() > 0) {
			EntityManagerFactory factory = Persistence.createEntityManagerFactory("meepletown");
			EntityManager entityManager = factory.createEntityManager();
			EntityTransaction transaction = entityManager.getTransaction();

			try {
				// début de la transaction
				transaction.begin();
				Session session = null;
				TypedQuery<Session> query = entityManager.createQuery(
						"select session from Session session where session.id = :id ", Session.class);

				query.setParameter("id", id);
				// on paramètre et on exécute la requête, et on récupère le résultat
				session = query.getSingleResult();
				// On met à jour la formation
				session.getPlayersList().add(u);
				entityManager.merge(session);

				// on commit tout ce qui s'est fait dans la transaction
				transaction.commit();
			} catch (Exception ex) {
				// en cas d'erreur, on effectue un rollback
				transaction.rollback();
				ex.printStackTrace();
			} finally {
				entityManager.close();
				factory.close();
			}

		}
	}
	
	public void deletePlayer(long idSession, long idUser) {
		EntityManagerFactory factory = Persistence.createEntityManagerFactory("meepletown");
		EntityManager entityManager = factory.createEntityManager();
			EntityTransaction transaction = entityManager.getTransaction();

			try {
				System.out.println("ici");
				User u = entityManager.find(User.class, idUser);
				System.out.println(u);
				// début de la transaction
				transaction.begin();
				Session session = null;
				TypedQuery<Session> query = entityManager.createQuery(
						"select session from Session session where session.id = :id ", Session.class);

				query.setParameter("id", idSession);
				// on paramètre et on exécute la requête, et on récupère le résultat
				session = query.getSingleResult();
				// On met à jour la formation
				session.getPlayersList().remove(u);
				
				entityManager.merge(session);

				// on commit tout ce qui s'est fait dans la transaction
				transaction.commit();
			} catch (Exception ex) {
				// en cas d'erreur, on effectue un rollback
				transaction.rollback();
				ex.printStackTrace();
			} finally {
				entityManager.close();
				factory.close();
			}

		
	}
	
	public void deleteGame(long idSession, long idGame) {
		EntityManagerFactory factory = Persistence.createEntityManagerFactory("meepletown");
		EntityManager entityManager = factory.createEntityManager();
			EntityTransaction transaction = entityManager.getTransaction();

			try {
				System.out.println("ici");
				Game g = entityManager.find(Game.class, idGame);
				System.out.println(g);
				// début de la transaction
				transaction.begin();
				Session session = null;
				TypedQuery<Session> query = entityManager.createQuery(
						"select session from Session session where session.id = :id ", Session.class);

				query.setParameter("id", idSession);
				// on paramètre et on exécute la requête, et on récupère le résultat
				session = query.getSingleResult();
				// On met à jour la formation
				session.getGamesListSession().remove(g);
				
				entityManager.merge(session);

				// on commit tout ce qui s'est fait dans la transaction
				transaction.commit();
			} catch (Exception ex) {
				// en cas d'erreur, on effectue un rollback
				transaction.rollback();
				ex.printStackTrace();
			} finally {
				entityManager.close();
				factory.close();
			}

		
	}
	
	public Set<User> getPlayerList(long id) {
		EntityManagerFactory factory = Persistence.createEntityManagerFactory("meepletown");
		EntityManager entityManager = factory.createEntityManager();
			EntityTransaction transaction = entityManager.getTransaction();
		
			try {
				// début de la transaction
				transaction.begin();
				Session session = null;
				TypedQuery<Session> query = entityManager.createQuery(
						"select session from Session session where session.id = :id ", Session.class);

				query.setParameter("id", id);
				// on paramètre et on exécute la requête, et on récupère le résultat
				session = query.getSingleResult();
				System.out.println(session.getPlayersList());
				
				return session.getPlayersList();
				

			} catch (Exception ex) {
				// en cas d'erreur, on effectue un rollback
				transaction.rollback();
				ex.printStackTrace();
			} finally {
				entityManager.close();
				factory.close();
			}

			return null;
	}
	
	public Set<SessionJson> findAllUser(long id) {
		Set<SessionJson> resultat = null;

		EntityManagerFactory factory = Persistence.createEntityManagerFactory("meepletown");
		EntityManager em = factory.createEntityManager();

		EntityGraph<Session> graph = em.createEntityGraph(Session.class);
		graph.addSubgraph("playersList");
		graph.addSubgraph("gamesListSession");
		graph.addSubgraph("author");
		// on crée la requête
		TypedQuery<Session> query = em.createQuery("SELECT entity FROM Session entity ", Session.class);
		query.setHint("javax.persistence.loadgraph", graph);

		// on exécute la requête et on récupère le résultat
		List<Session> list = query.getResultList();
		resultat = new HashSet<SessionJson>();
		for (Session session : list) {
			for(User u : session.getPlayersList()) {


				
				
				if(u.getId()== id) {
					
					SessionJson s = new SessionJson(session.getTitle(), session.getPlace(), session.getSessionType(), 
							session.getDescription(), session.getNbMaxPlayers(), session.getNbMinPlayers(), session.getStartDate(), 
							session.getEndDate(), session.getIsPrivate(), session.getPlayersList(), session.getGamesListSession(), 
							session.getAuthor());

					s.setId(session.getId());
					resultat.add(s);

				}
			}



			
		}
	
		em.close();
		factory.close();
		return resultat;
	}
//	public User getAuthor(long id) {
//		EntityManagerFactory factory = Persistence.createEntityManagerFactory("meepletown");
//		EntityManager entityManager = factory.createEntityManager();
//		EntityTransaction transaction = entityManager.getTransaction();
//	
//		try {
//			// début de la transaction
//			transaction.begin();
//			Session session = null;
//			TypedQuery<Session> query = entityManager.createQuery(
//					"select session from Session session where session.id = :id ", Session.class);
//
//			query.setParameter("id", id);
//			// on paramètre et on exécute la requête, et on récupère le résultat
//			session = query.getSingleResult();
//			return session.getAuthor();
//			
//
//		} catch (Exception ex) {
//			// en cas d'erreur, on effectue un rollback
//			transaction.rollback();
//			ex.printStackTrace();
//		} finally {
//			entityManager.close();
//			factory.close();
//		}
//
//		return null;
//}

}

