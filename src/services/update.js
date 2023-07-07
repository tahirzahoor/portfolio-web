import { collection, addDoc } from "firebase/firestore";
import { db } from "../utils/firebase";
const json_data = {
    "title": "Kustomer",
    "description": "Facebook Acquired Chat SDK",
    "category": "SOCIAL NETWORKING",
    "links": [
      {
        "platform": "web",
        "link": "https://www.kustomer.com/"
      }
    ],
    "heroImage": "https://firebasestorage.googleapis.com/v0/b/tahir-portfolio-239f8.appspot.com/o/projects%2FKustomer%2Fhero_image.png?alt=media&token=8339a959-7d98-4899-97bd-240ca36a0f6c",
    "logo": "https://firebasestorage.googleapis.com/v0/b/tahir-portfolio-239f8.appspot.com/o/projects%2FKustomer%2Flogo.svg?alt=media&token=6bd74dc4-540f-41e7-bca2-be54c2dfb05f",
    "mainImage": "https://firebasestorage.googleapis.com/v0/b/tahir-portfolio-239f8.appspot.com/o/projects%2FKustomer%2Fhero_image.png?alt=media&token=8339a959-7d98-4899-97bd-240ca36a0f6c",
    "images": [
      "https://firebasestorage.googleapis.com/v0/b/tahir-portfolio-239f8.appspot.com/o/projects%2FKustomer%2FProblem.svg?alt=media&token=c675d7fc-1a92-4436-8c3a-99a8215d88e7",
      "https://firebasestorage.googleapis.com/v0/b/tahir-portfolio-239f8.appspot.com/o/projects%2FKustomer%2FSolution.svg?alt=media&token=f045e155-4970-48aa-a8e7-76e0cf949fd9"
    ],
    "problemStatement": " How customers perceive their interactions with your brand has become a primary focus for businesses. Kustomer is a NY-based company helping brands provide better customer experience. They’ve raised around $38.5 million in funding for a modern platform that provides an omnichannel customer experience. Their solution combines everything you know about your consumers with a powerful process engine so your team can deliver faster, more proactive service. Kustomer team approached BrainX to build an android SDK for their growing customer base. ",
    "solutionStatement": " The solution we built is a chat sdk especially developed for customer experience, service & support. It is designed to enable customers to chat with brand’s support team from within the mobile app. It supports both logged in and anonymous chats. Fully customizable style & font, it’s easy to match SDK’s Mobile Chat to client application’s brand. For localization, 48 languages are pre-built into the SDK. Through SDK, we have managed user communication with support teams, automated conversational messaging, media sharing, and pro-active messaging. ",
    "comment": {
      "commenter": "Peter Johnson",
      "designation": "Product Manager, Kustomer",
      "text": "BrainX Technology has been instrumental in delivering quality mobile SDKs in a very short time frame. Their team is responsive at all hours of the day- willing to address new issues and bugs almost instantly. Along with engineering, they have their own testing, design, and QA which makes BrainX a product manager's dream.",
      "image": "https://scontent.flhe3-2.fna.fbcdn.net/v/t1.6435-9/151779004_1827353717415074_911461335778076400_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=174925&_nc_ohc=xhj_CALM4ZEAX-g_7Cb&_nc_ht=scontent.flhe3-2.fna&oh=00_AfAkN11WGFQwGoXlLe3vRZfflJcpeC09olt7TiJcpoF1TQ&oe=64CF7C80"
    },
    "colorScheme": {
      "primaryColor": "#EBEBEB",
      "startColor": "#FFF5F5",
      "endColor": "#FFF5F5"
    }
  }
  

const addJsonDataToCollection = async () => {
  try {
    const collectionRef = collection(db, "projects");
    await addDoc(collectionRef, json_data);
    console.log("Data added successfully!");
  } catch (error) {
    console.error("Error adding data:", error);
  }
};

export default addJsonDataToCollection