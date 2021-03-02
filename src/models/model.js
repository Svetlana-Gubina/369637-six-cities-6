export default class Model {
  constructor(hotel) {
    this.bedrooms = hotel[`bedrooms`];
    this.id = hotel[`id`];
    this.city = {
      location: {
        latitude: hotel[`city`][`location`][`latitude`],
        longitude: hotel[`city`][`location`][`longitude`],
        zoom: hotel[`city`][`location`][`zoom`]
      },
      name: hotel[`city`][`name`]
    };
    this.description = hotel[`description`];
    this.goods = hotel[`goods`] || [];
    this.host = {
      avatarUrl: hotel[`host`][`avatar_url`],
      id: hotel[`host`][`id`],
      isPro: hotel[`host`][`is_pro`],
      name: hotel[`host`][`name`]
    };
    this.images = hotel[`images`] || [];
    this.isFavorite = hotel[`is_favorite`];
    this.isPremium = hotel[`is_premium`];

    this.location = {
      latitude: hotel[`location`][`latitude`],
      longitude: hotel[`location`][`longitude`],
      zoom: hotel[`location`][`zoom`]
    };
    this.maxAdults = hotel[`max_adults`];
    this.previewImage = hotel[`preview_image`];
    this.price = hotel[`price`];
    this.rating = hotel[`rating`];
    this.title = hotel[`title`];
    this.type = hotel[`type`];
  }

  static parseHotelData(hotels) {
    return new Model(hotels);
  }

  static parseHotelsData(hotels) {
    return hotels.map(Model.parseHotelData);
  }

  toRAW() {
    return {
      "bedrooms": this.bedrooms,
      "city": {
        "location": {
          "latitude": this.city.location.latitude,
          "longitude": this.city.location.longitude,
          "zoom": this.city.location.zoom
        },
        "name": this.city.location.name
      },
      "description": this.description,
      "goods": this.goods,
      "host": {
        "avatar_url": this.host.avatarUrl,
        "id": this.host.id,
        "is_pro": this.host.isPro,
        "name": this.host.name
      },
      "id": this.id,
      "images": this.images,
      "is_favorite": this.isFavorite,
      "is_premium": this.isPremium,
      "location": {
        "latitude": this.location.latitude,
        "longitude": this.location.longitude,
        "zoom": this.location.zoom
      },
      "max_adults": this.maxAdults,
      "preview_image": this.previewImage,
      "price": this.price,
      "rating": this.rating,
      "title": this.title,
      "type": this.type
    };
  }

}
