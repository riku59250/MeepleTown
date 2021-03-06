package fr.dawan.meepletown.dao;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

import javax.persistence.EntityGraph;
import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;
import javax.persistence.TypedQuery;

import fr.dawan.meepletown.beans.User;
import fr.dawan.meepletown.json.UserJson;

public class userDao {


	
	public fr.dawan.meepletown.json.UserJson findByEmailAndPassword(String email, String password) {
		EntityManagerFactory factory = Persistence.createEntityManagerFactory("meepletown");
		EntityManager entityManager = factory.createEntityManager();
		User entity = null;
		fr.dawan.meepletown.json.UserJson user = null;
		TypedQuery<User> query = entityManager.createQuery("select user from User user where user.mail = :email and user.password = :password" , User.class );

		query.setParameter("email", email);
		query.setParameter("password", password);
		try {
			entity = query.getSingleResult();
			entity.getListGame().size();
			entity.getListGroup().size();
			entity.getListSession().size();
			entity.getSession().size();
			 user = new fr.dawan.meepletown.json.UserJson(entity.getPseudo(), entity.getMail(), entity.getPassword(), entity.getNumDept(), entity.getCity(), entity.getAvatar(), entity.getListGroup(), entity.getListGame());
			user.setListSession(entity.getListSession());
			user.setSession(entity.getSession());
			user.setId(entity.getId());
		}catch (Exception e) {
			// TODO: handle exception
		}finally {
			
			entityManager.close();
			factory.close();
		}
		// on paramètre et on exécute la requête, et on récupère le résultat
		System.out.println(user);
		return user;
	}
	public Set<User> findAll( ) {
		Set<User> resultat = null;

		EntityManagerFactory factory = Persistence.createEntityManagerFactory("meepletown");
		EntityManager em = factory.createEntityManager();

		EntityGraph<User> graph = em.createEntityGraph(User.class);
		graph.addSubgraph("listGame");
		graph.addSubgraph("listGroup");
		graph.addSubgraph("listSession");
		// on crée la requête
		TypedQuery<User> query = em.createQuery("SELECT entity FROM User entity ", User.class);
		query.setHint("javax.persistence.loadgraph", graph);
		
		// on exécute la requête et on récupère le résultat
		//TODO faut le transformer en SET maintenant
		//resultat = query.getResultList();
		List<User> list = query.getResultList();
		
		resultat = new HashSet<User>(list);
		

		em.close();
		factory.close();
		return resultat;
	}

	public UserJson findById(long id) {
		System.out.println("FindById");

		EntityManagerFactory factory = Persistence.createEntityManagerFactory("meepletown");
		EntityManager entityManager = factory.createEntityManager();
		User entity = null;

		TypedQuery<User> query = entityManager.createQuery("select user from User user where user.id = :id" , User.class );

		query.setParameter("id", id);
		
		// on paramètre et on exécute la requête, et on récupère le résultat
		entity = query.getSingleResult();
		entity.getListGame().size();
		entity.getListGroup().size();
		entity.getListSession().size();
		entity.getSession().size();
		UserJson user = new UserJson(entity.getPseudo(), entity.getMail(), entity.getPassword(), entity.getNumDept(), entity.getCity(), entity.getAvatar(), entity.getListGroup(), entity.getListGame());
		user.setListSession(entity.getListSession());
		user.setSession(entity.getSession());
		user.setId(entity.getId());
		entityManager.close();
		factory.close();
		return user;
	}
}
