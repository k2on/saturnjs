interface SizeUrlsType {
    small: string;
    medium: string;
    large: string;
}

export default interface ProfilePictureType {
    id: string;
    contentType: string;
    metadata: unknown;
    resourceUrl: string;
    sizeUrls: SizeUrlsType;
}
