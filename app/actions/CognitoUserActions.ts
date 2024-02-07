"use server";

import {
  SignUpCommand,
  CognitoIdentityProviderClient,
  InitiateAuthCommand,
  AuthFlowType,
} from "@aws-sdk/client-cognito-identity-provider";
import { redirect } from "next/navigation"
import { Schema, z } from "zod";

const CLIENT_ID = process.env.COGNITO_CLIENT_ID;

export const CognitoUserCreateAction = async (formData: FormData) => {
  "use server";

  const schema: Schema = z.object({
    username: z.string().min(5),
    password: z.string().min(8),
    email: z.string().email(),
  });
  const parse = schema.safeParse({
    username: formData.get("username"),
    password: formData.get("password"),
    email: formData.get("email"),
  });
  if (!parse.success) {
    return { message: "Failed to create cognito user." };
  }
  const data = parse.data;
  const result = await signUp({
    username: data.username,
    password: data.password,
    email: data.email,
  });
  if (result.UserConfirmed) {
    return redirect("/")
  } else {
    return redirect("#")
  }
};

export const CognitoInitiateAuth = async (formData: FormData) => {
  "use server";

  const schema: Schema = z.object({
    username: z.string().min(5),
    password: z.string().min(8),
  });
  const parse = schema.safeParse({
    username: formData.get("username"),
    password: formData.get("password"),
  });
  if (!parse.success) {
    return { message: "Failed to initiate cognito auth flow." };
  }
  const data = parse.data;
  const result = await initiateAuth({username: data.username, password: data.password})
}

export const signUp = ({
  username,
  password,
  email,
}: {
  username: string;
  password: string;
  email: string;
}) => {
  const client = new CognitoIdentityProviderClient({});

  const command = new SignUpCommand({
    ClientId: CLIENT_ID,
    Username: username,
    Password: password,
    UserAttributes: [{ Name: "email", Value: email }],
  });
// { // SignUpResponse
//   UserConfirmed: true || false, // required
//   CodeDeliveryDetails: { // CodeDeliveryDetailsType
//     Destination: "STRING_VALUE",
//     DeliveryMedium: "SMS" || "EMAIL",
//     AttributeName: "STRING_VALUE",
//   },
//   UserSub: "STRING_VALUE", // required
// };
  return client.send(command);
};

export const initiateAuth = ({ username, password }: {username: string, password: string}) => {
  const client = new CognitoIdentityProviderClient({});

  const command = new InitiateAuthCommand({
    AuthFlow: AuthFlowType.USER_PASSWORD_AUTH,
    AuthParameters: {
      USERNAME: username,
      PASSWORD: password,
    },
    ClientId: CLIENT_ID,
  });

  return client.send(command);
};