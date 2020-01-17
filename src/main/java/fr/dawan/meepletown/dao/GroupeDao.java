package fr.dawan.meepletown.dao;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.EntityTransaction;
import javax.persistence.Persistence;

import fr.dawan.meepletown.beans.Session;
import fr.dawan.meepletown.beans.User;
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
		public void createWithAuthor(fr.dawan.meepletown.beans.Groupe gr, long idUser) {
			if (gr.getId() == 0) {
				EntityManagerFactory factory = Persistence.createEntityManagerFactory("meepletown");
				EntityManager entityManager = factory.createEntityManager();
				EntityTransaction transaction = entityManager.getTransaction();

				try {
					// début de la transaction
					transaction.begin();
					User u = entityManager.find(User.class, idUser);
					gr.getMembersList().add(u);
<<<<<<< HEAD

=======
			
>>>>>>> 0d8c5bc9709302462c256d652cb719c5586d9e12
					// On insère la formation dans la BDD
					entityManager.persist(gr);

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
		public void updateGroupe(Groupe gr) {
			if (gr.getId() > 0) {
				EntityManagerFactory factory = Persistence.createEntityManagerFactory("meepletown");
				EntityManager entityManager = factory.createEntityManager();
				EntityTransaction transaction = entityManager.getTransaction();

				try {
					// début de la transaction
					transaction.begin();
<<<<<<< HEAD

					fr.dawan.meepletown.beans.Groupe groupe = new fr.dawan.meepletown.beans.Groupe(gr.getId(), gr.getName(), gr.getType(), gr.getDescription(), gr.getAvatar());
					groupe.setGamesList(gr.getGamesList());
					groupe.setMembersList(gr.getMembersList());


=======
					
					fr.dawan.meepletown.beans.Groupe groupe = new fr.dawan.meepletown.beans.Groupe(gr.getId(), gr.getName(), gr.getType(), gr.getDescription(), gr.getAvatar());
					groupe.setGamesList(gr.getGamesList());
					groupe.setMembersList(gr.getMembersList());
					
			
>>>>>>> 0d8c5bc9709302462c256d652cb719c5586d9e12
					// On insère la formation dans la BDD
					entityManager.merge(groupe);

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

<<<<<<< HEAD

=======
		
>>>>>>> 0d8c5bc9709302462c256d652cb719c5586d9e12

		

	

}
