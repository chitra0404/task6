class Movie{
    constructor(title,studio,rating){
        this.title=title;
        this.studio=studio;
        this.rating=rating;
    }
     getrating() {
        return "the rating is  " + this.rating;
      }
      
}
const CasinoRoyale = new movie( "Casino Royal", "Eon Productions", "PG13");

class Movie{
    constructor(title,studio,rating){
        this.title=title;
        this.studio=studio;
        this.rating="PG";
    }
}