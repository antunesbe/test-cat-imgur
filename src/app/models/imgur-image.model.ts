export class ImgurImage {
    id: string;
    title?: string;
    description?: string;
    datetime: number;
    type: string;
    animated: boolean;
    width: number;
    height: number;
    size: number;
    views: number;
    bandwidth: number;
    vote?: number;
    favorite: boolean;
    is_ad: boolean;
    in_most_viral: boolean;
    has_sound: boolean;
    tags: any[];
    ad_type: number;
    ad_url: string;
    edited: string;
    in_gallery: boolean;
    link: string;
    comment_count?: number;
    favorite_count?: number;
    ups?: number;
    downs?: number;
    points?: number;
    score?: number;

    constructor(data?: IImgurImage) {
        if (data) {
            this.id = data.id;
            this.title = data.title;
            this.description = data.description;
            this.datetime = data.datetime;
            this.type = data.type;
            this.animated = data.animated;
            this.width = data.width;
            this.height = data.height;
            this.size = data.size;
            this.views = data.views;
            this.bandwidth = data.bandwidth;
            this.vote = data.vote;
            this.favorite = data.favorite;
            this.is_ad = data.is_ad;
            this.in_most_viral = data.in_most_viral;
            this.has_sound = data.has_sound;
            this.tags = data.tags;
            this.ad_type = data.ad_type;
            this.ad_url = data.ad_url;
            this.edited = data.edited;
            this.in_gallery = data.in_gallery;
            this.link = data.link;
            this.comment_count = data.comment_count;
            this.favorite_count = data.favorite_count;
            this.ups = data.ups;
            this.downs = data.downs;
            this.points = data.points;
            this.score = data.score;
        }
    }
}

export interface IImgurImage {
    id: string;
    title?: string;
    description?: string;
    datetime: number;
    type: string;
    animated: boolean;
    width: number;
    height: number;
    size: number;
    views: number;
    bandwidth: number;
    vote?: number;
    favorite: boolean;
    is_ad: boolean;
    in_most_viral: boolean;
    has_sound: boolean;
    tags: any[];
    ad_type: number;
    ad_url: string;
    edited: string;
    in_gallery: boolean;
    link: string;
    comment_count?: number;
    favorite_count?: number;
    ups?: number;
    downs?: number;
    points?: number;
    score?: number;
}
