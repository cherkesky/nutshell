//Author: Sully, purpose: a function to be called when the article section is clicked that will display all articles in main container
import { makeArticleCardMain } from "./htmlMaker";
import { addMainEventListener } from "./eventListeners";

export const populateArticlesToMain = () => {
const mainRef = document.getElementById("main-container")
mainRef.innerHTML = "<h2>Articles</h2>"
const articleArray = JSON.parse(sessionStorage.getItem("articles"))
articleArray.forEach(element => {
    const newArt = makeArticleCardMain(element);
    mainRef.innerHTML += newArt;
});
}