// import { AwsCredentialIdentity } from "@aws-sdk/types";
import {
  ListBucketsCommand,
  ListObjectsV2Command,
  S3Client,
} from "@aws-sdk/client-s3";

const client = new S3Client({});

export async function listBucketObjects(bucketName: string) {
  const command = new ListObjectsV2Command({
    Bucket: bucketName,
    MaxKeys: 20,
  });

  let isTruncated = true;
  let objects: string[] = [];
  while (isTruncated) {
    const { Contents, IsTruncated, NextContinuationToken } = await client.send(
      command
    );
    Contents?.map((item) => {
      item.Key ? objects.push(item.Key) : null;
    });

    isTruncated = IsTruncated ?? false;
    command.input.ContinuationToken = NextContinuationToken;
  }

  return objects;
}

export async function listBuckets() {
  // returns a Bucket[] -> Bucket: {CreationDate: Date, Name: string}
  const command = new ListBucketsCommand({});
  const response = await client.send(command);
  return response.Buckets;
}
