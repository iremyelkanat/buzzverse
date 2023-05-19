import cloudinary, {
    UploadApiResponse,
    UploadApiErrorResponse,
} from 'cloudinary';

export function uploads(
    file: string,
    publicID?: string,
    overwrite?: boolean,
    invalidate?: boolean
): Promise<UploadApiResponse | UploadApiErrorResponse | undefined> {
    return new Promise((resolve) => {
        cloudinary.v2.uploader.upload(
            file,
            {
                public_id: publicID,
                overwrite,
                invalidate,
            },
            (
                error: UploadApiErrorResponse | undefined,
                result: UploadApiResponse | undefined
            ) => {
                if (error) resolve(error);
                resolve(result);
            }
        );
    });
}
