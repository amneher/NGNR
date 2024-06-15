import { fromCognitoIdentityPool } from "@aws-sdk/credential-providers";
import { S3ControlClient, ListAccessPointsCommand } from "@aws-sdk/client-s3-control";
import {
  ListBucketsCommand,
  ListObjectsV2Command,
  S3Client,
} from "@aws-sdk/client-s3";

const ID_POOL_ID = process.env.COGNITO_IDENTITY_POOL_ID
  ? process.env.COGNITO_IDENTITY_POOL_ID
  : "";
const COGNITO_ID = process.env.COGNITO_USER_POOL_ID
  ? process.env.COGNITO_USER_POOL_ID
  : "";

const client = new S3Client({
  region: "us-west-1",
});

const controlClient = new S3ControlClient({ region: "us-west-1", });

export async function listBucketObjects(bucketName: string) {
  let accessPoints: string[] = [];
  let nextToken: string | undefined = "true"
  while (nextToken) {
    const input = { // ListAccessPointsRequest
      AccountId: process.env.AWS_ACCOUNT_ID,
      Bucket: bucketName,
      NextToken: nextToken,
      MaxResults: Number("50"),
    };
    const apCommand: ListAccessPointsCommand = new ListAccessPointsCommand(input);
    const { $metadata, AccessPointList, NextToken} = await controlClient.send(apCommand);
    nextToken = NextToken;
    AccessPointList?.map((item) => {
      item.Name ? accessPoints.push(item.Name) : null;
    });
  }

  const command = new ListObjectsV2Command({
    Bucket: accessPoints[0],
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
