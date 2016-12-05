/*
 * Example based on https://www.tutorialspoint.com/cucumber/cucumber_java_testing.htm
 * 
 */

package CucumberJava; 

import org.openqa.selenium.By; 
import org.openqa.selenium.WebDriver; 
import org.openqa.selenium.chrome.ChromeDriver;
import cucumber.annotation.en.Given; 
import cucumber.annotation.en.Then; 
import cucumber.annotation.en.When; 



public class cucumberJava { 
   WebDriver driver = null; 
	
   @Given("^I have open the browser$") 
   public void openBrowser() {
	  //Info on how to select which driver to use: 
      //http://stackoverflow.com/questions/13724778/how-to-run-selenium-webdriver-test-cases-in-chrome 
	  System.setProperty("webdriver.chrome.driver", "./drivers/chromedriver-mac64");
	  driver = new ChromeDriver();
   } 
	
   @When("^I open Facebook website$") 
   public void goToFacebook() { 
      driver.navigate().to("https://www.facebook.com/"); 
      try {
    	//pause for 4 seconds
		Thread.sleep(4000);
	} catch (InterruptedException e) {
		// TODO Auto-generated catch block
		e.printStackTrace();
	}
   } 
	
   @Then("^Login button should exits$") 
   public void loginButton() { 
      if(driver.findElement(By.id("u_0_n")).isEnabled()) { 
         System.out.println("Test 1 Pass"); 
      } else { 
         System.out.println("Test 1 Fail"); 
      } 
      driver.close(); 
   } 
}