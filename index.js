const {Builder,By,Key,Util, until,WebElement, WebDriver,Select}= require("selenium-webdriver");
const { Name } = require("selenium-webdriver/lib/command");
require('chromedriver');



async function testForm()
{
     
     let  driver =  await  new Builder().forBrowser("chrome").build();
     await driver.get("http://www.sovtech.co.za/contact-us/");
     await driver.manage().window().maximize();
     
     await driver.findElement(By.xpath("//input[@id='your_name-c2e387f9-4bd8-496f-ab2a-81fbbc31712a']")).sendKeys("Andile Lukhele");
     await driver.findElement(By.name("email")).sendKeys("wayneaa28@gmail.com");
     await driver.findElement(By.name("mobilephone")).sendKeys("0797696381");
     Select (await driver.findElement(By.name("numemployees")).selectByValue("1-5"));
     Select (await driver.findElement(By.name("what_kind_of_problem_is_your_business_currently_facing_")).selectByValue("Other"));
     await driver.findElement(By.name("message")).sendKeys("QA Engineer automation test");
     await driver.findElement(By.name("LEGAL_CONSENT.subscription_type_10841063")).click();
     await driver.findElement(By.xpath("//input[@type='submit']")).click();

     await driver.quit();
}  
testForm()
