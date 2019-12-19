package fr.dawan.meepletown.dao;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;
import javax.persistence.TypedQuery;

import fr.dawan.meepletown.beans.User;

public class sessionDao {

	private EntityManager createEntityManager() {
		EntityManagerFactory factory = Persistence.createEntityManagerFactory("meepletown");
		EntityManager entityManager = factory.createEntityManager();
		return entityManager;
	}
	
//	public Session findAll() {
//		System.out.println("sessionDao");
//
//		EntityManager entityManager = createEntityManager();
//		Session entity = null;
//
//		TypedQuery<User> query = entityManager.createQuery("select session from User user where user.mail = :email and user.password = :password" , User.class );
//
//		query.setParameter("email", email);
//		query.setParameter("password", password);
//		// on paramètre et on exécute la requête, et on récupère le résultat
//		entity = query.getSingleResult();
//		entityManager.close();
//
//		System.out.println(entity);
//		return entity;
//	}

}

