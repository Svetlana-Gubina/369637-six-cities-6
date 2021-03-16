export default class CommentModel {
  constructor(comment) {
    this.id = comment[`id`];
    this.rating = comment[`rating`];
    this.comment = comment[`comment`];
    this.user = {
      avatarUrl: comment[`user`][`avatar_url`],
      id: comment[`user`][`id`],
      isPro: comment[`user`][`is_pro`],
      name: comment[`user`][`name`]
    };
    this.date = comment[`date`];
  }

  static parseCommentData(comment) {
    return new CommentModel(comment);
  }

  static parseCommentsData(comments) {
    return comments.map(CommentModel.parseCommentData);
  }

  toRAW() {
    return {
      "date": this.date,
      "user": {
        "avatar_url": this.user.avatarUrl,
        "id": this.user.id,
        "is_pro": this.user.isPro,
        "name": this.user.name
      },
      "id": this.id,
      "rating": this.rating,
      "comment": this.comment
    };
  }

}
