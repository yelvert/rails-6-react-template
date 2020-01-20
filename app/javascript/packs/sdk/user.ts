import {
  current_user_path,
  sign_out_path,
} from './routes';
import agent from './agent';

export async function current () {
  return await agent.get(current_user_path)
}

export async function signOut() {
  return await agent.delete(sign_out_path)
}

export default {
  current,
  signOut,
}
