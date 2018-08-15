import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { StatsPage } from '../../pages/stats/stats';
import { MoviesPage } from '../../pages/movies/movies';
import { Storage } from '@ionic/storage';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
// all variables
  private isPlayVisible = true;
  private isHigherVisible = false;
  private isLowerVisible = false;
  private chooseHigher;
  private chooseLower;
  private cardCount = 0;
  private currentCard = 0;
  private previousCard = 0;
  private min = 2;
  private max = 11;
  private played = 0;
  private won = 0;
  private percent = 0.0;

  constructor(public navCtrl: NavController, public storage: Storage) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad');
  }

  //navigate to stats page
  goToStats() {
    this.navCtrl.push(StatsPage);
  }

   //navigate to stats page
   goToMovies() {
    this.navCtrl.push(MoviesPage);
   }

  //when player starts game goes to play()
  play(){
    //hides play button and shows the higher and lower buttons
    this.isPlayVisible = false;
    //goes to cardreveal() to show the first card
    //puts the choice as higher so the user won't lose on the first card,
    // as the previous card is to zero so any card will be higher
    this.chooseHigher = true;
    this.cardReveal();
    this.isHigherVisible = true;
    this.isLowerVisible = true;
    this.checkHigherOrLower();
  }

  //when user clicks higher
  higher(){
     //shows next card, sets user's choice as higher and checks if user is right by going to checkHigherOrLower
    this.chooseHigher = true;
    this.cardReveal();
    this.checkHigherOrLower();
  }

  //when user clicks Lower
  lower(){
    //shows next card, sets user's choice to lower and checks if user is right by going to checkHigherOrLower
    this.chooseLower = true;
    this.cardReveal();
    this.checkHigherOrLower();
  }
  
  //Shows the next card
  cardReveal(){
    //make sure that the same card doesn't show two times in a row
    do {
    this.currentCard = Math.floor(Math.random()*(this.max-this.min+1)+this.min);

    } while (this.currentCard == this.previousCard);
    
    //check in an if statement what card your turnin over
    if(this.cardCount == 0){
     //have var so you can change the image on screen
     // put "as HTMLImageElement" so the element has .src
     let card = document.getElementById("card0") as HTMLImageElement;
     //check the value and then show appropriate card
     if(this.currentCard == 2){
      card.src = "assets/imgs/2.png"; 
     }
     else if(this.currentCard == 3){
      card.src = "assets/imgs/3.png"; 
     }
     else if(this.currentCard == 4){
      card.src = "assets/imgs/4.png"; 
     }
     else if(this.currentCard == 5){
      card.src = "assets/imgs/5.png"; 
     }
     else if(this.currentCard == 6){
      card.src = "assets/imgs/6.png"; 
     }
     else if(this.currentCard == 7){
      card.src = "assets/imgs/7.png"; 
     }
     else if(this.currentCard == 8){
      card.src = "assets/imgs/8.png"; 
     }
     else if(this.currentCard == 9){
      card.src = "assets/imgs/9.png"; 
     }
     else if(this.currentCard == 10){
      card.src = "assets/imgs/10.png"; 
     }
     else if(this.currentCard == 11){
      card.src = "assets/imgs/11.png"; 
     }

    }

    else if(this.cardCount == 1){
      let card = document.getElementById("card1") as HTMLImageElement;
      if(this.currentCard == 2){
       card.src = "assets/imgs/2.png"; 
      }
      else if(this.currentCard == 3){
       card.src = "assets/imgs/3.png"; 
      }
      else if(this.currentCard == 4){
       card.src = "assets/imgs/4.png"; 
      }
      else if(this.currentCard == 5){
       card.src = "assets/imgs/5.png"; 
      }
      else if(this.currentCard == 6){
       card.src = "assets/imgs/6.png"; 
      }
      else if(this.currentCard == 7){
       card.src = "assets/imgs/7.png"; 
      }
      else if(this.currentCard == 8){
       card.src = "assets/imgs/8.png"; 
      }
      else if(this.currentCard == 9){
       card.src = "assets/imgs/9.png"; 
      }
      else if(this.currentCard == 10){
       card.src = "assets/imgs/10.png"; 
      }
      else if(this.currentCard == 11){
       card.src = "assets/imgs/11.png"; 
      }
 
     }

     else if(this.cardCount == 2){
      let card = document.getElementById("card2") as HTMLImageElement;
      if(this.currentCard == 2){
       card.src = "assets/imgs/2.png"; 
      }
      else if(this.currentCard == 3){
       card.src = "assets/imgs/3.png"; 
      }
      else if(this.currentCard == 4){
       card.src = "assets/imgs/4.png"; 
      }
      else if(this.currentCard == 5){
       card.src = "assets/imgs/5.png"; 
      }
      else if(this.currentCard == 6){
       card.src = "assets/imgs/6.png"; 
      }
      else if(this.currentCard == 7){
       card.src = "assets/imgs/7.png"; 
      }
      else if(this.currentCard == 8){
       card.src = "assets/imgs/8.png"; 
      }
      else if(this.currentCard == 9){
       card.src = "assets/imgs/9.png"; 
      }
      else if(this.currentCard == 10){
       card.src = "assets/imgs/10.png"; 
      }
      else if(this.currentCard == 11){
       card.src = "assets/imgs/11.png"; 
      }
 
     }

     else if(this.cardCount == 3){
      let card = document.getElementById("card3") as HTMLImageElement;
      if(this.currentCard == 2){
       card.src = "assets/imgs/2.png"; 
      }
      else if(this.currentCard == 3){
       card.src = "assets/imgs/3.png"; 
      }
      else if(this.currentCard == 4){
       card.src = "assets/imgs/4.png"; 
      }
      else if(this.currentCard == 5){
       card.src = "assets/imgs/5.png"; 
      }
      else if(this.currentCard == 6){
       card.src = "assets/imgs/6.png"; 
      }
      else if(this.currentCard == 7){
       card.src = "assets/imgs/7.png"; 
      }
      else if(this.currentCard == 8){
       card.src = "assets/imgs/8.png"; 
      }
      else if(this.currentCard == 9){
       card.src = "assets/imgs/9.png"; 
      }
      else if(this.currentCard == 10){
       card.src = "assets/imgs/10.png"; 
      }
      else if(this.currentCard == 11){
       card.src = "assets/imgs/11.png"; 
      }
 
     }
  
     else if(this.cardCount == 4){
      let card = document.getElementById("card4") as HTMLImageElement;
      if(this.currentCard == 2){
       card.src = "assets/imgs/2.png"; 
      }
      else if(this.currentCard == 3){
       card.src = "assets/imgs/3.png"; 
      }
      else if(this.currentCard == 4){
       card.src = "assets/imgs/4.png"; 
      }
      else if(this.currentCard == 5){
       card.src = "assets/imgs/5.png"; 
      }
      else if(this.currentCard == 6){
       card.src = "assets/imgs/6.png"; 
      }
      else if(this.currentCard == 7){
       card.src = "assets/imgs/7.png"; 
      }
      else if(this.currentCard == 8){
       card.src = "assets/imgs/8.png"; 
      }
      else if(this.currentCard == 9){
       card.src = "assets/imgs/9.png"; 
      }
      else if(this.currentCard == 10){
       card.src = "assets/imgs/10.png"; 
      }
      else if(this.currentCard == 11){
       card.src = "assets/imgs/11.png"; 
      }
 
     }
  
     else if(this.cardCount == 5){
      let card = document.getElementById("card5") as HTMLImageElement;
      if(this.currentCard == 2){
       card.src = "assets/imgs/2.png"; 
      }
      else if(this.currentCard == 3){
       card.src = "assets/imgs/3.png"; 
      }
      else if(this.currentCard == 4){
       card.src = "assets/imgs/4.png"; 
      }
      else if(this.currentCard == 5){
       card.src = "assets/imgs/5.png"; 
      }
      else if(this.currentCard == 6){
       card.src = "assets/imgs/6.png"; 
      }
      else if(this.currentCard == 7){
       card.src = "assets/imgs/7.png"; 
      }
      else if(this.currentCard == 8){
       card.src = "assets/imgs/8.png"; 
      }
      else if(this.currentCard == 9){
       card.src = "assets/imgs/9.png"; 
      }
      else if(this.currentCard == 10){
       card.src = "assets/imgs/10.png"; 
      }
      else if(this.currentCard == 11){
       card.src = "assets/imgs/11.png"; 
      }
 
     }
  
  
  }

  //check if the card is higher or lower in value than the previous card
  checkHigherOrLower(){
    //check if user is right in an if statement
    if (this.chooseHigher == true && this.currentCard > this.previousCard)
    {
      //add 1 to the card count
      this.cardCount++;
      //check if it was the last card or if there are more
      if (this.cardCount == 6)
      {
        //they got the last card right so they won
        this.win();
      }
      else
      {
        //more cards to come so go to the next round
        this.nextRound();
      }
    }
    else if (this.chooseLower == true && this.currentCard < this.previousCard)
    {
      this.cardCount++;
      if (this.cardCount == 6)
      {
        this.win();
      }
      else
      {
        this.nextRound();
      }
    }
    else
    {
      //if the user guessed wrong they lost the game
      this.lose();
    }
  }

  nextRound(){
    //set the current cards value to the previous card as the game is moving on to the next card
    this.previousCard = this.currentCard;
    //reset their choices to false
    this.chooseLower = false;
    this.chooseHigher = false;
  }

  win(){
    //hide the lower and higher button
    this.isHigherVisible = false;
    this.isLowerVisible = false;
    //make a new var to equal "this" so it can be used in the setTimeout() function
    var that = this;
    //add 1 to the won games counter
    this.won++;
    //delay the end of the game by 1 second so the user can see the last card and print out that they won
    setTimeout(function(){alert("You Win!");that.restart();}, 1000);
  }

  lose(){
    //hide the lower and higher button
    this.isHigherVisible = false;
    this.isLowerVisible = false;
    var that = this;
    //delay the end of the game by 1 second so the user can see the last card and print out that they lost
    setTimeout(function(){alert("You Lose");that.restart();}, 1000);
  }

  restart(){
    //add 1 to the amount of games played counter
    this.played++;
    this.storage.set("played", this.played);
   
    //update storage for won counter
    this.storage.set("won", this.won);

   //calculate the percent of the games won
    this.percent = (this.won/this.played)*100;
    this.storage.set("percent", this.percent);

    //make the play button visible
    this.isPlayVisible = true;

    //put the images back to the back of the cards
    let card_0 = document.getElementById("card0") as HTMLImageElement;
    let card_1 = document.getElementById("card1") as HTMLImageElement;
    let card_2 = document.getElementById("card2") as HTMLImageElement;
    let card_3 = document.getElementById("card3") as HTMLImageElement;
    let card_4 = document.getElementById("card4") as HTMLImageElement;
    let card_5 = document.getElementById("card5") as HTMLImageElement;

    card_0.src = "assets/imgs/cardBack.png";
    card_1.src = "assets/imgs/cardBack.png";
    card_2.src = "assets/imgs/cardBack.png";
    card_3.src = "assets/imgs/cardBack.png";
    card_4.src = "assets/imgs/cardBack.png";
    card_5.src = "assets/imgs/cardBack.png";

    //reset values
    this.cardCount = 0;
    this.currentCard = 0;
    this.previousCard = 0;
  }

  ionViewWillEnter(){
    //retrieve played storage
    this.storage.get("played")
    .then((data) =>
    {
    this.played = data;
    })
    .catch((err) => {
    alert("Error accesssing Storage")
    })
    
    //retrieve won storage
    this.storage.get("won")
    .then((data) =>
    {
    this.won = data;
    })
    .catch((err) => {
    alert("Error accesssing Storage")
    })

    //retrieve percent storage
    this.storage.get("percent")
    .then((data) =>
    {
    this.percent = data;
    })
    .catch((err) => {
    alert("Error accesssing Storage")
    })
  }
   
}


