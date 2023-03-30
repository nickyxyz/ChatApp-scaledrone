const hour = new Date().getHours();
const welcomeTypes = ["Good Morning!", "Good Afternoon!", "Good Evening!"];
export let welcomeText = "";
if (hour < 12) {
    welcomeText = welcomeTypes[0];
} else if (hour < 18) {
    welcomeText = welcomeTypes[1];
} else {
    welcomeText = welcomeTypes[2];
}
