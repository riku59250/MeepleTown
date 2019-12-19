package fr.dawan.meepletown.dao;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.EntityTransaction;
import javax.persistence.Persistence;
import javax.persistence.TypedQuery;

import fr.dawan.meepletown.beans.Session;
import fr.dawan.meepletown.beans.User;

public class SessionDao extends GenericDao<Session> {

		private EntityManager createEntityManager() {
			EntityManagerFactory factory = Persistence.createEntityManagerFactory("meepletown");
			EntityManager entityManager = factory.createEntityManager();
			return entityManager;
		}
		
		public void create(Session entity) {
			if (entity.getId() == 0) {
				EntityManager entityManager = createEntityManager();
				EntityTransaction transaction = entityManager.getTransaction();

				try {
					// début de la transaction
					transaction.begin();

					// On insère la formation dans la BDD
					entityManager.persist(entity);

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
