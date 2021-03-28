export default class UserCommentModel {
  constructor(comment) {
    this.rating = comment[`rating`];
    this.comment = comment[`comment`];
  }

  static parseUserCommentData(comment) {
    return new UserCommentModel(comment);
  }

  static parseUserCommentsData(comments) {
    return comments.map(UserCommentModel.parseUserCommentData);
  }

  toRAW() {
    return {
      "rating": this.rating,
      "comment": this.comment
    };
  }

}
