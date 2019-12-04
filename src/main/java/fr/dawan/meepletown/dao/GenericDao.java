package fr.dawan.meepletown.dao;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.EntityTransaction;
import javax.persistence.PersistenceContext;
import javax.persistence.TypedQuery;

import org.springframework.beans.factory.annotation.Autowired;

import fr.dawan.meepletown.beans.DbObject;

public class GenericDao {
	@PersistenceContext
	EntityManager em;
	
	
	public<T extends DbObject> void create(T elm, boolean closeConnection) throws Exception {
		EntityTransaction et = em.getTransaction();
		try {
			et.begin();
			if(elm.getId()!=0) {
				em.merge(elm);
			}
			else {
				em.persist(elm);
			}
			et.commit();
		} catch (Exception ex) {
			et.rollback();
			throw ex;
		} finally {
			if(closeConnection) {
				em.close();
			}
		}
	}

	public<T extends DbObject> void remove(T elm, boolean closeConnection) throws Exception {
		EntityTransaction et = em.getTransaction();
		try {
			et.begin();
			if(elm.getId() !=0) {
				em.remove(elm);
			}
			else {
				em.persist(elm);
			}
			et.commit();
		} catch (Exception ex) {
			et.rollback();
			throw ex;
			} finally {
				if(closeConnection) {
					em.close();
				}
			}
		}
	
	public<T extends DbObject>  T find(Class<T> clazz, int id, boolean closeConnection)  {
		T elm = em.find(clazz, id);
		if(closeConnection) {
			em.close();
		}
		return elm;
	}
	
	public<T extends DbObject> List<T> findAll(Class<T> clazz, boolean closeConnection)   {
		TypedQuery<T> query = em.createQuery("SELECT * FROM " + clazz.getName() + " ENTITY", clazz);
		List<T> result = query.getResultList();
		if(closeConnection) {
			em.close();
		}
		return result;
	}
	
	
	
	public<T extends DbObject> long countElm(Class<T> clazz, EntityManager em, boolean closeConnection) {
		TypedQuery<Long> query = em.createQuery("SELECT COUNT FROM " + clazz.getName() + " ENTITY", Long.class);
		long r = query.getSingleResult();
		if(closeConnection) {
			em.close();
		}
		return r;
	}


}
