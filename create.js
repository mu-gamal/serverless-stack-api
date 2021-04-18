import * as uuid from "uuid";
import handler from "./libs/handler";
import dynamoDb from "./libs/dynamodb";

export const main = handler(async (event) => {
  const data = JSON.parse(event.body);
  const params = {
    TableName: process.env.tableName,
    Item: {
      userId: "123",
      noteId: uuid.v1(),
      content: data.content,
      attachment: data.attachment,
      createdAt: Date.now(),
    },
  };

  await dynamoDb.put(params);

  return params.Item;
});