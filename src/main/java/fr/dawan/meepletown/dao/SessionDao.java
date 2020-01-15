package fr.dawan.meepletown.dao;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.EntityTransaction;
import javax.persistence.Persistence;
import javax.persistence.TypedQuery;

import fr.dawan.meepletown.beans.Groupe;
import fr.dawan.meepletown.beans.Session;
import fr.dawan.meepletown.beans.User;

public class SessionDao {

	private EntityManager createEntityManager() {
		EntityManagerFactory factory = Persistence.createEntityManagerFactory("meepletown");
		EntityManager entityManager = factory.createEntityManager();
		return entityManager;
	}

	

	public void UpdateSession(long id, User u) {
		if (u.getId() > 0) {
			EntityManager entityManager = createEntityManager();
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
			}

		}
	}
	

	

}
