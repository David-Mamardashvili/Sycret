import HomePageMain from "../components/homePage-main/homePage-main";
import HomePageFooter from "../components/homePage-footer/homePage-footer";

function HomePage(props) {
    return (
      <>
      <HomePageMain {...props}/>
      <HomePageFooter {...props}/>
      </>
    );
  }
  
  export default HomePage;
  