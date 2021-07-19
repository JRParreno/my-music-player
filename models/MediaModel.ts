import { MediaTypeValue } from "expo-media-library";

export default class MediaModel {
    id: number;
    filename: string;
    uri: string
    mediaType: MediaTypeValue | undefined;
    mediaSubTypes: string[] | undefined;
    width: number;
    height: number;
    creationTime: number;
    modificationTime: number;
    duration: number;
    alumId: number;

    constructor(id: number, filename: string, uri: string, 
         width: number, height: number,
        creationTime: number, modificationTime: number,
        duration: number, alumId: number,
        mediaSubTypes?: string[], mediaType?: MediaTypeValue
        ) {
        this.id = id;
        this.filename = filename;
        this.uri = uri;
        this.mediaType = mediaType;
        this.mediaSubTypes = mediaSubTypes;
        this.width = width;
        this.height = height;
        this.creationTime = creationTime;
        this.modificationTime = modificationTime;
        this.duration = duration;
        this.alumId = alumId;
    }

}
