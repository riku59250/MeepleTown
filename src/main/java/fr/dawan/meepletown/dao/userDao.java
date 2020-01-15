package fr.dawan.meepletown.dao;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

import javax.persistence.EntityGraph;
import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;
import javax.persistence.TypedQuery;
import javax.swing.ImageIcon;

import fr.dawan.meepletown.beans.Game;
import fr.dawan.meepletown.beans.Groupe;
import fr.dawan.meepletown.beans.User;

public class userDao {

	private EntityManager createEntityManager() {
		EntityManagerFactory factory = Persistence.createEntityManagerFactory("meepletown");
		EntityManager entityManager = factory.createEntityManager();
		return entityManager;
	}
	
	public fr.dawan.meepletown.json.User findByEmailAndPassword(String email, String password) {
		System.out.println("userDao");

		EntityManager entityManager = createEntityManager();
		User entity = null;

		TypedQuery<User> query = entityManager.createQuery("select user from User user where user.mail = :email and user.password = :password" , User.class );

		query.setParameter("email", email);
		query.setParameter("password", password);
		// on paramètre et on exécute la requête, et on récupère le résultat
		entity = query.getSingleResult();
		entity.getListGame().size();
		entity.getListGroup().size();
		entity.getListSession().size();
		entity.getSession().size();
		fr.dawan.meepletown.json.User user = new fr.dawan.meepletown.json.User(entity.getPseudo(), entity.getMail(), entity.getPassword(), entity.getNumDept(), entity.getCity(), entity.getAvatar(), entity.getListGroup(), entity.getListGame());
		user.setListSession(entity.getListSession());
		user.setSession(entity.getSession());
		entityManager.close();

		return user;
	}
	public Set<User> findAll( ) {
		Set<User> resultat = null;

		EntityManager em = createEntityManager();

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
		return resultat;
	}

	public fr.dawan.meepletown.json.User findById(long id) {
		System.out.println("FindById");

		EntityManager entityManager = createEntityManager();
		User entity = null;

		TypedQuery<User> query = entityManager.createQuery("select user from User user where user.id = :id" , User.class );

		query.setParameter("id", id);
		
		// on paramètre et on exécute la requête, et on récupère le résultat
		entity = query.getSingleResult();
		entity.getListGame().size();
		entity.getListGroup().size();
		entity.getListSession().size();
		entity.getSession().size();
		fr.dawan.meepletown.json.User user = new fr.dawan.meepletown.json.User(entity.getPseudo(), entity.getMail(), entity.getPassword(), entity.getNumDept(), entity.getCity(), entity.getAvatar(), entity.getListGroup(), entity.getListGame());
		user.setListSession(entity.getListSession());
		user.setSession(entity.getSession());
		entityManager.close();

		return user;
	}
}
