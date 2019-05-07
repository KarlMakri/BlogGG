export class Post {
  constructor(
    public title: string,
    public resume: string,
    public description: string,
    public author: string,
    public picture: string,
    public date: Date,
    public like: number
  ){
    this.title = title;
    this.resume = resume;
    this.description = description;
    this.author = author;
    this.picture = picture;
    this.date = date;
    this.like = like;
  }
}
