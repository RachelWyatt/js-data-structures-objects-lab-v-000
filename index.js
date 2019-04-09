// Write your solution in this file!
const driver = {}

function updateDriverWithKeyAndValue(driver, key, value) {
 return driver.assign({}, obj, { [key]: value });
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, object) {
  driver[key] = value;
  return driver;
}

function deleteFromDriverByKey() {
  
}

function destructivelyDeleteFromDriverByKey(driver, key) {

}

