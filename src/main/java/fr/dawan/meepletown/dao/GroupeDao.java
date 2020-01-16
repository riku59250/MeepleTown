package fr.dawan.meepletown.dao;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

import fr.dawan.meepletown.enums.GroupType;
import fr.dawan.meepletown.json.Groupe;

public class GroupeDao {

		

		

		public Groupe findById( long id) {
			EntityManagerFactory factory = Persistence.createEntityManagerFactory("meepletown");
			EntityManager entityManager = factory.createEntityManager();
			Groupe entity = null;

			try {
				// On charge la formation depuis la BDD, selon son ID
				fr.dawan.meepletown.beans.Groupe response = entityManager.find(fr.dawan.meepletown.beans.Groupe.class, id);
				entity = new Groupe(response.getId(), response.getName(), response.getType(), response.getDescription(), response.getAvatar());
				entity.setCity(response.getCity());
				entity.setNameDept(response.getNameDept());
				response.getGamesList().size();
				response.getMembersList().size();
				entity.setGamesList(response.getGamesList());
				entity.setMembersList(response.getMembersList());
			
			} catch (Exception ex) {
				ex.printStackTrace();
			} finally {
				entityManager.close();
				factory.close();
			}

			return entity;
		}
		

		

	

}
