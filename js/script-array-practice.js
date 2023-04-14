//STEP 1 Create a string array that contains your five favorite movies. 
// Then, use the console to display the second movie in your array
// let myMovies = ["The Good, the Bad and the Ugly", "Waterloo Bridge", "Once Upon a Time in the West", "Coco", "Kong Fu Panda"]
// console.log(myMovies[1])

//STEP 2 Declare an array called movies using the function constructor method. 
// Add the length of 5 into the constructor. Then, assign one of your favorite movies 
// to each index in the array until you have 5 total movies in your array. 
// Then, use the console to display the first movie in your array.
// let movies = new Array(5)
// movies[0] = "The Good, the Bad and the Ugly"
// movies[1] = "Waterloo Bridge"
// movies[2] = "Once Upon a Time in the West"
// movies[3] = "Coco"
// movies[4] = "Kong Fu Panda"
// console.log(movies[0])

//STEP 3 Copy your code from step 2. Add a new movie into the 3rd position within your array. 
// Then, use the console to display the length of the array. You should now have 6 total movies stored in the array.
// let movies = new Array(6)
// movies[0] = "The Good, the Bad and the Ugly"
// movies[1] = "Waterloo Bridge"
// movies[2] = "Conception"
// movies[3] = "Once Upon a Time in the West"
// movies[4] = "Coco"
// movies[5] = "Kong Fu Panda"
// console.log(movies.length)

//STEP 4 Declare an array called movies using literal notation. 
// Then, assign one of your favorite movies to each index in the array until you have 5 
// total movies in your array. Now, use the delete operator to remove the first movie 
// in the array. Use the console to display the contents of the array.
// let movies = ["The Good, the Bad and the Ugly", "Waterloo Bridge", "Once Upon a Time in the West", "Coco", "Kong Fu Panda"]
// movies[0] = "The Good, the Bad and the Ugly"
// movies[1] = "Waterloo Bridge"
// movies[2] = "Once Upon a Time in the West"
// movies[3] = "Coco"
// movies[4] = "Kong Fu Panda"
// delete movies[0];
// console.log(movies);

//STEP 5 Declare an array called movies using literal notation. 
// Then, assign one of your favorite movies to each index in the array until you have 7 
// total movies in your array. Now, use a for/in loop to iterate through the array and 
// display each movie within the console window.
// let movies = []
// movies[0] = "The Good, the Bad and the Ugly"
// movies[1] = "Waterloo Bridge"
// movies[2] = "Once Upon a Time in the West"
// movies[3] = "Coco"
// movies[4] = "Kong Fu Panda"
// movies[5] = "Conception"
// movies[6] = "Dune"
// for (let i = 0; i < movies.length; i++) {
//     console.log(movies[i])
// };

//STEP 6 Copy the code from step 5. Now, use a for/of loop to iterate through the array and 
// display each movie within the console window.
// let movies = []
// movies[0] = "The Good, the Bad and the Ugly"
// movies[1] = "Waterloo Bridge"
// movies[2] = "Once Upon a Time in the West"
// movies[3] = "Coco"
// movies[4] = "Kong Fu Panda"
// movies[5] = "Conception"
// movies[6] = "Dune"
// for (i of movies) {
//     console.log(i)
// };

//STEP 7 Copy the code from step 5. Using the for/of loop to iterate through the array, 
// display each movie within the console window in a sorted view.
// let movies = []
// movies[0] = "The Good, the Bad and the Ugly"
// movies[1] = "Waterloo Bridge"
// movies[2] = "Once Upon a Time in the West"
// movies[3] = "Coco"
// movies[4] = "Kong Fu Panda"
// movies[5] = "Conception"
// movies[6] = "Dune"
// movies.sort();
// for (i of movies) {
//     console.log(i)
// };

//STEP 8
// let leastFavMovies = ["Dracula", "Left Behind", "Stolen"]
// let movies = []
// movies[0] = "The Good, the Bad and the Ugly"
// movies[1] = "Waterloo Bridge"
// movies[2] = "Once Upon a Time in the West"
// movies[3] = "Coco"
// movies[4] = "Kong Fu Panda"
// movies[5] = "Conception"
// movies[6] = "Dune"
// console.log("Movies I like:\n ")
// for (let i = 0; i < movies.length; i++) {    
//     console.log(movies[i])
// };
// console.log("\nMovies I regret watching:\n ")
// for (i of leastFavMovies) {
//     console.log(i)
// };

//STEP 9 Copy the code from step 8. Now, use the concat() method to merge the two arrays 
// together into a single array called movies. 
// Use the console window to display the list in reverse sorted
// let leastFavMovies = ["Dracula", "Left Behind", "Stolen"]
// let movies = []
// movies[0] = "The Good, the Bad and the Ugly"
// movies[1] = "Waterloo Bridge"
// movies[2] = "Once Upon a Time in the West"
// movies[3] = "Coco"
// movies[4] = "Kong Fu Panda"
// movies[5] = "Conception"
// movies[6] = "Dune"
// console.log("Movies I like:\n ")
// for (let i = 0; i < movies.length; i++) {    
//     console.log(movies[i])
// };
// console.log("\nMovies I regret watching:\n ")
// for (i of leastFavMovies) {
//     console.log(i)
// };
// movies = movies.concat("Dracula", "Left Behind", "Stolen")
// console.log(movies.reverse().sort());

//STEP 10 Copy the code from step 9. Use an array function to return just the last item 
// in the array and display it within the console window.
// let leastFavMovies = ["Dracula", "Left Behind", "Stolen"]
// let movies = []
// movies[0] = "The Good, the Bad and the Ugly"
// movies[1] = "Waterloo Bridge"
// movies[2] = "Once Upon a Time in the West"
// movies[3] = "Coco"
// movies[4] = "Kong Fu Panda"
// movies[5] = "Conception"
// movies[6] = "Dune"
// console.log("Movies I like:\n ")
// for (let i = 0; i < movies.length; i++) {    
//     console.log(movies[i])
// };
// console.log("\nMovies I regret watching:\n ")
// for (i of leastFavMovies) {
//     console.log(i)
// };
// movies = movies.concat("Dracula", "Left Behind", "Stolen")
// console.log(movies.reverse().sort());
// console.log(movies.pop());

//STEP 11 Copy the code from step 10. Remove the previous method and this time 
// use a method to return just the first item in the array and display it within 
// the console window.
// let leastFavMovies = ["Dracula", "Left Behind", "Stolen"]
// let movies = []
// movies[0] = "The Good, the Bad and the Ugly"
// movies[1] = "Waterloo Bridge"
// movies[2] = "Once Upon a Time in the West"
// movies[3] = "Coco"
// movies[4] = "Kong Fu Panda"
// movies[5] = "Conception"
// movies[6] = "Dune"
// console.log("Movies I like:\n ")
// for (let i = 0; i < movies.length; i++) {    
//     console.log(movies[i])
// };
// console.log("\nMovies I regret watching:\n ")
// for (i of leastFavMovies) {
//     console.log(i)
// };
// movies = movies.concat("Dracula", "Left Behind", "Stolen")
// console.log(movies.reverse().sort());
// console.log(movies.shift());

//STEP 12 Programmatically retrieve the movies in your array that you do not like 
// and return their indices. // Then, using those indices, programmatically add movies 
// that you do like.
// let leastFavMovies = ["Dracula", "Left Behind", "Stolen"]
// let movies = []
// movies[0] = "The Good, the Bad and the Ugly"
// movies[1] = "Waterloo Bridge"
// movies[2] = "Once Upon a Time in the West"
// movies[3] = "Coco"
// movies[4] = "Kong Fu Panda"
// movies[5] = "Conception"
// movies[6] = "Dune"
// console.log("Movies I like:\n ")
// for (let i = 0; i < movies.length; i++) {    
//     console.log(movies[i])
// };
// console.log("\nMovies I regret watching:\n ")
// for (i of leastFavMovies) {
//     console.log(i)
// };
// movies = movies.concat("Dracula", "Left Behind", "Stolen")
// console.log(movies.reverse().sort());

// for (let i=0; i < movies.length; i++) {
//     switch (movies[i]) {
//         case "Dracula":
//             console.log(movies[movies.indexOf("Dracula")])
//             console.log(movies.indexOf("Dracula"))
//             movies[movies.indexOf("Dracula")] = "Avatar"           
//             break
//         case "Left Behind":
//             console.log(movies.indexOf("Left Behind"))
//             movies[movies.indexOf("Left Behind")] = "The Lord of Ring"            
//             break
//         case "Stolen":
//             console.log(movies.indexOf("Stolen"))
//             movies[movies.indexOf("Stolen")] = "The Godfather"            
//             break       
//     };
// };
// console.log(movies);

//STEP 13
let movies = [
    ["The Good, the Bad and the Ugly 1",1],
    ["Waterloo Bridge 2", 2],
    ["Once Upon a Time in the West 3", 3],
    [ "Coco 4", 4],
    [ "Kong Fu Panda 5", 5]
];

//STEP 14

//STEP 15

//STEP 16

//STEP 17