# Instruction and Features
+ One click access: Access the website directly by going to 147.182.148.102 or www.csc301gpa40.ml/
## Enviroment:
+ Node.js 14
+ Java 16
+ Optional: Maven
  + If Maven is installed, use command 'mvn' instead of 'mvnw' in the following steps.

## Testing and Building Backend:
+ CD to the folder named backend
+ If on Windows, run
```console
mvnw.cmd -B test
```
+ If on Mac or Linux, run
```console
sh mvnw -B test
```
  + If it shows Java_Home Error, set 
```console
JAVA_HOME="$PATH"
```
  + where path is your JAVA_HOME 16 Enviroment
  + On Windows, run 
```console
mvnw clean package
```
+ On Mac or Linux, run
```console
sh mvnw clean package
```
  + now testing and building is complete, CD to backend/target and run
```console
java -jar checkAPI-0.0.1.jar
```
Now the backend should be running.

## Testing and Building Frontend:
+ CD to the folder frontend/checkoutcalculator
+ run the following command
```console
npm install
```
```console
npm run test:unit
```
```console
npm run build
```
Now the frontend should have finished testing building. Doulbe click on frontend/checkoutcalculator/dist/index.html, which will lead to the same website as www.csc301gpa40.ml/

## Features
Most the functionalities are designed to be intuitive. Here is a description of the feature:
+ In ADD Item, input the name of the item (cannot be empty), the price of the item, the quantity of the item, whether to include tax, and discount of the item (Float from 0 to 1, e.x. 0.1 will be 10 percent off)
+ After all the items have been added, the 'Upload Order' button will have the summary calculated and display on the right-hand side under 'Summary'
+ A history of all the orders submitted in the past can be found on the right-hand side under 'Load History'. An order in the past can be loaded into the shopping cart by selecting the order in the dropdown and clicking the 'Load' button.
+ The refresh button of the left can refresh the page (it also refreshes the load history which allows the newly submitted order to be loaded in)


