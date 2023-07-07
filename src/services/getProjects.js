import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../utils/firebase";

const getProjects = async (category) => {
  try {
    const projectsCollectionRef = collection(db, "projects");
    const data = await getDocs(projectsCollectionRef);

    let projects = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));

    if (category) {
      projects = projects.filter((project) => project.category === category);
    }



    return projects;
  } catch (error) {
    console.error("Error fetching projects:", error);
    return [];
  }
};

export default getProjects;
