import { collection, getDocs } from "firebase/firestore";
import { db } from "../utils/firebase";

const getCategories = async () => {
  try {
    const projectsCollectionRef = collection(db, "projects");
    const data = await getDocs(projectsCollectionRef);
    const categories = data.docs.map((doc) => doc.data().category);
    const uniqueCategories = [...new Set(categories)].filter(
      (category) => category
    ); 

    return uniqueCategories;
  } catch (error) {
    console.error("Error fetching categories:", error);
    return [];
  }
};

export default getCategories;
