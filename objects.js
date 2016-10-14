// Defining animal class
var animal = function (species, age, gender) {
  this.species = species;
  this.age = age;
  this.gender = gender;
};
animal.prototype.display = function () {
  var output = "The animal is a " + this.gender + " " + this.species + " which is " + this.age + " years old.";
  createPtag(output);
};
animal.prototype.setNoise = function (sounds) {
  if (sounds.includes(":")) {
    this.sound = sounds.split(":");
  }
  else {
    this.sound = [sounds];
  }
}
animal.prototype.makeNoise = function () {
  var chance = Math.floor(Math.random() * (this.sound.length));
  var output = this.sound[chance];
  createPtag(output);
};

// Defining human which is a child class of the animal class
var human = function (age, gender, name, profession, important_trait) {
  animal.call(this, "human", age, gender);
  this._name = name;// I cannot use this.name because HTML/javascript has a default "name" property and this would over-ride it for this class
  this.profession = profession;
  this.trait = important_trait;
};
human.prototype.display = function () {
  var output = this._name + " is a(n) " + this.age + " year old " + this.gender + " " + this.species + ", who is a " + this.profession + ".";
  createPtag(output);
  output = this._name + " is also notably " + this.trait + ".";
  createPtag(output);
};
human.prototype.greet = function (otherPerson) {
  var output;
  if (otherPerson === undefined) {
    output = "Hello, I'm " + this._name + ". What is your name?";
  }
  else {
    output = "Hello " + otherPerson + ", I'm " + this._name + ". Nice to meet you.";
  }
  createPtag(output);
};

// Defining dog which is a child class of the animal class
var dog = function (age, gender, name, size) {
  animal.call(this, "dog", age, gender);
  this._name = name;
  this._size = size;
  this.sound = ["Woof!", "Bark!", "Arf arf!"];
};
dog.prototype.display = function () {
  var output = this._name + " is a(n) " + this.age + " year old, " + this._size + " sized, " + this.gender + " " + this.species +  ".";
  createPtag(output);
};
dog.prototype.makeNoise = function () {
  var chance = Math.floor(Math.random() * (this.sound.length));
  var output = this.sound[chance];
  createPtag(output);
};

// Defining cat which is a child class of the animal class
var cat = function (age, gender, name, cattitude_lvl) {
  animal.call(this, "cat", age, gender);
  this._name = name;
  this.cattitude = cattitude_lvl; // Cattitude levels are on a scale of 0 to 10
  this.sound = ['Mew.', 'Meow.', 'MEEEOOOOOOOOOOW!!!!!', 'Purrrrr, Purrrr.'];
};
cat.prototype.determineCattitudiness = function () { // Silly joking function ;)
  if (!(this.cattitude == 0)) {
    if (this.cattitude > 2) {
      if (this.cattitude > 4) {
        if (this.cattitude > 6) {
          if (this.cattitude > 8) {
            if (this.cattitude > 9) {
              // greater than 9
              return "Insanely High Cattitude! Extreme Caution Recommended. Keep 4 light years distance at all times!";
            }
            else { // less than or equal to 9
              return "Extremely High Cattitude.";
            }
          }
          else { // less than or equal to 8
            return "Very High Cattitude.";
          }
        }
        else { // less than or equal to 6
          return "Moderately High Cattitude.";
        }
      }
      else { // less than or equal to 4
        return "Mediocore Cattitude.";
      }
    }
    else { // less than or equal to 2
      return "Very Low Cattitude.";
    }
  }
  else {
    return "No Cattitude Detected. Are you sure that is a cat?";
  }
}
cat.prototype.display = function () {
  var output = this._name + " is a " + this.age + " year old " + this.gender + " " + this.species + ". " + SheHe(this) + " has a  cattitude level of: " + this.determineCattitudiness();
  createPtag(output);
};
cat.prototype.makeNoise = function () {
  var chance = Math.floor(Math.random() * (this.sound.length));
  var output = this.sound[chance];
  createPtag(output);
}

// instantiating objects and calling methods of those objects
var objs = [];
objs[0] = new animal("Blue Jay", 1.2, "male");
objs[0].setNoise("Tweet:Chirp:Tweet Tweet Tweet");
objs[0].makeNoise();
objs[0].makeNoise();
objs[0].display();
createHr();
objs[1] = new human(17, "male", "Corbin Cunningham", "student", "thoughtful");
objs[1].display();
objs[1].greet();
objs[1].greet("Mr. Clawson");
createHr();
objs[2] = new human(33, "male", "Patrick Clawson", "coding instructor", "patient and caring");
objs[2].display();
objs[2].greet();
createHr();
objs[3] = new dog(2.5, "female", "Jordi", "medium");
objs[3].display();
objs[3].makeNoise();
objs[3].makeNoise();
createHr();
objs[4] = new dog(0.5, "male", "Spike", "small");
objs[4].display();
objs[4].makeNoise();
createHr();
objs[5] = new cat(2, "male", "Mittens", 10);
objs[5].display();
objs[5].makeNoise();

// function to determine if 'she' or 'he' should be used based on gender.
function SheHe(Obj) {
  if (Obj.gender == "male" || Obj.gender == "Male") {
    return "He";
  }
  else {
    if (Obj.gender == "female" || Obj.gender == "Female") {
      return "She";
    }
  }
}
// creating html element (<p>) and assigning ids to them along with txt
// (basically defining a console.log you can see on the screen)
var IDtracker = 0;
function createPtag(text_output) {
  var elem = document.createElement("P");
  elem.setAttribute("class", "pTag");
  var id = "textTag_" + toString(IDtracker);
  elem.setAttribute("id", id);
  IDtracker++;
  elem.innerHTML = text_output;
  var par = document.getElementById("main_output");
  par.appendChild(elem);
}
// function for creating a break in the page
function createHr() {
  var elem = document.createElement("hr");
  elem.style.height = "2px";
  elem.style.width = "300px";
  // elem.style.backgroundColor = "black";
  elem.style.float = "left";
  elem.setAttribute("noshade", "noshade");
  document.getElementById("main_output").appendChild(elem);
  var br = document.createElement("br");
  document.getElementById("main_output").appendChild(br);
}
