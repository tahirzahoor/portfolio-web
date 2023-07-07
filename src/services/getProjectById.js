import { doc, getDoc } from "firebase/firestore";
import { db } from "../utils/firebase";

const getProjectById = async (projectId) => {
  try {
    const projectDocRef = doc(db, "projects", projectId);
    const projectSnapshot = await getDoc(projectDocRef);

    if (projectSnapshot.exists()) {
      const projectData = projectSnapshot.data();
      return { ...projectData, id: projectSnapshot.id };
    } else {
      console.error("Project not found");
      return null;
    }
  } catch (error) {
    console.error("Error fetching project:", error);
    return null;
  }
};

export default getProjectById;