/*
 * Example based on https://www.tutorialspoint.com/cucumber/cucumber_java_testing.htm
 * Also see https://sites.google.com/a/chromium.org/chromedriver/getting-started
 * 
 */

package CucumberJava; 

import java.io.File;
import java.io.IOException;
import java.rmi.server.RemoteServer;

import org.openqa.selenium.By; 
import org.openqa.selenium.WebDriver; 
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeDriverService;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.remote.RemoteWebDriver;

import cucumber.annotation.en.Given; 
import cucumber.annotation.en.Then; 
import cucumber.annotation.en.When; 



public class cucumberJava { 
   private static ChromeDriverService service;
   WebDriver driver = null; 
	
   @Given("^I have open the browser$") 
   public void openBrowser() {
	  // driver = new ChromeDriver();
	  service = new ChromeDriverService.Builder().usingDriverExecutable(new File("./drivers/chromedriver-mac64"))
		        .usingPort(9515).build();
	  //System.out.println("URL: " + service.getUrl()); prints "URL: http://localhost:9515"
	 
	  try {
		service.start();
	  } catch (IOException e) {
		e.printStackTrace();
	  }
		 
	  driver = new RemoteWebDriver(service.getUrl(), DesiredCapabilities.chrome());
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
      
      driver.quit();
      service.stop();
   } 
}