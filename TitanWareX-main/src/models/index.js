// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Subscribe, Account, Todo, Note } = initSchema(schema);

export {
  Subscribe,
  Account,
  Todo,
  Note
};