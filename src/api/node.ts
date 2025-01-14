import { defGetter } from '@thi.ng/paths';
import type Process from 'node:process';

// process.env
const getEnv = (env: string) =>
  defGetter<typeof Process, 'env'>(['env'])(process)[env];

export const GH_TOKEN = getEnv('GH_TOKEN'); // github.com -> Settings -> Developer Settings -> Personal access tokens -> token for public repo
export const REPO = getEnv('REPO'); // if not set -> prefix JSON paths (f.e. https://github/user/repo -> user/repo is prefix)
